public class DummyLateResponse {
    @AuraEnabled(cacheable=true)
    public static String getData(Integer sleep) {
        
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:Dummy_late_response?sleep=' + sleep);
        req.setMethod('GET');
        HttpResponse res = h.send(req);
        System.debug(res.getBody());
        Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(res.getBody());
        System.debug(m);
        return (String)m.get('about');
        
    }
}