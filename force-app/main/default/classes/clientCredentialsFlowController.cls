public with sharing class clientCredentialsFlowController {
    @AuraEnabled
    public static Map<Integer, String> getAccessToken(String clientId, String clientSecret, String myDomain) {
        Http h = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(myDomain);
        request.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.setMethod('POST');
        request.setBody('grant_type=client_credentials' + '&client_id=' + EncodingUtil.urlEncode(clientId, 'UTF-8') + '&client_secret=' + EncodingUtil.urlEncode(clientSecret, 'UTF-8'));

        HttpResponse response = h.send(request);
        Map<Integer,String> resp = new Map<Integer,String>();
        if (response.getStatusCode() == 200) {
            Map<String, Object> jsonResponse = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
            System.debug('response => ' + response.getBody());
            System.debug('json response => ' + jsonResponse);
            resp.put(200, (String)jsonResponse.get('access_token'));
            return resp;
        } else {
            if (response.getStatusCode() == 404) {
                System.debug('response => ' + response + ' ' + 'response Body => ' + response.getBody() + ' ' + 'response Status => ' + response.getStatus());
                Map<String, Object> jsonResponse = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
                resp.put(400, 'The error message is ' + (String)jsonResponse.get('error') + ' and description is ' + (String)jsonResponse.get('error_description') + '. You made a ' + response.getStatus() + '. Please review your form parameters in order to fix this issue.');
                return resp;
            }
            return null;
        }

    }
}