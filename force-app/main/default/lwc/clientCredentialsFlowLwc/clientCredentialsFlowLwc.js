import { LightningElement } from 'lwc';
import getAccessToken from '@salesforce/apex/clientCredentialsFlowController.getAccessToken'
import { ShowToastEvent } from "lightning/platformShowToastEvent";


export default class ClientCredentialsFlowLwc extends LightningElement {
    tokenReady = false;
    JSONresponse;
    error;
    client_id;
    client_secret;
    sessionId;
    badRequest;
    myDomainURL;
    titleText;
    messageText;
    variant;
    badStatus;

    connectedCallback() {
        this.client_id = '3MVG9SemV5D80oBc_4KF2WNxqFyTGpVDdV2.YP4BiZ04w.1s9jhfPPDRXqcxtnN_mJEbBHpbni3BAlrZ7Wpw_';
        this.client_secret = '7AC67B6A90F4904039C47D4DFAEA933F09A67B4CE097919BEF3273C88728EB47';
        this.myDomainURL = 'https://db000000fx1yhmal-dev-ed.my.salesforce.com/services/oauth2/token';

    }

    handleChange(event) {
        if (event.target.name === 'client_id') {
            this.client_id = event.target.value;
            this.tokenReady = false;
            this.sessionId = '';
            this.badStatus = false;
            
        } else {
            this.client_secret = event.target.value;
            this.tokenReady = false;
            this.sessionId = '';
            this.badStatus = false;
        }
    }

    handleURLChange(event) {
        this.myDomainURL = event.target.value;
        this.sessionId = '';
        this.badStatus = false;
    }

    async getToken() {
        try {
            this.JSONresponse = await getAccessToken({clientId : this.client_id, clientSecret : this.client_secret, myDomain : this.myDomainURL});
            this.error = undefined;
            if (Object.keys(this.JSONresponse)[0] === "200") {
                this.sessionId = this.JSONresponse["200"];
                this.tokenReady = true;
                const evt = new ShowToastEvent({
                    title: `Access token is successfully generated.`,
                    message: this.sessionId,
                    variant: `success`,
                  });
                  this.dispatchEvent(evt);

            } else {
                if (Object.keys(this.JSONresponse)[0] === "400" || (this.JSONresponse)[0] === "404") {
                    this.badRequest = this.JSONresponse["400"];
                }
                const evt = new ShowToastEvent({
                    title: `Error received.`,
                    message: this.badRequest,
                    variant: `error`,
                  });
                  this.dispatchEvent(evt);
                  this.badStatus = true;
            }
        } catch (error) {
            this.JSONresponse = undefined;
            this.error = error;
            this.showRemoteSiteUrlAddMessage(error.body.message);
            this.badStatus = true;
        }
    }

    showRemoteSiteUrlAddMessage(errorMessage) {
        const parts = errorMessage.split('endpoint = ');
        if (parts.length >= 2) {
            const endpointUrl = parts[1];
            try {
                const url = new URL(endpointUrl);
                const baseUrl = url.protocol + '//' + url.host;
                console.log('Base URL:', baseUrl);
                this.showToast('info', 'Action', 'Please add the ' + baseUrl + ' URL to your Remote Site Settings.');
            } catch (error) {
                console.error('Error parsing URL:', error.message);
            }
        } else {
            console.log('Endpoint not found in the error message.');
        }
    }
}