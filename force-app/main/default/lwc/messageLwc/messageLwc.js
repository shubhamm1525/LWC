import { LightningElement,track,wire } from 'lwc';
import messageDemo from "@salesforce/messageChannel/messageDemo__c";
import { APPLICATION_SCOPE,createMessageContext,MessageContext,publish,releaseMessageContext,subscribe,unsubscribe } from 'lightning/messageService';

export default class MessageLwc extends LightningElement {
    @track messages=[];
    @wire(MessageContext) msgContext;

    subscription = null;
    connectedCallback(){
        if(!this.subscription){
            this.subscription =  subscribe(this.msgContext,messageDemo, (msg) => {
                this.messageHandler(msg);
            }, {SCOPE: APPLICATION_SCOPE}  );
        }
    }

    disconnectedCallback(){
        unsubscribe(this.subscription);
        this.subscription = null;
    } 

    sendHandler(event){
        const inputElement = this.template.querySelector("lightning-input");
        if(inputElement){
            const msg = inputElement.value;
            
            this.messages.push({
                id: this.messages.length,
                value:msg,
                from:"LWC"
            });
            
            //publish message
            const msgPayload  = {
                message:msg,
                from:"LWC"
            };
            

            publish(this.msgContext,messageDemo, msgPayload );
            console.log(msgPayload);

            inputElement.value = "";
        }
    }

    messageHandler(msgPayload){
        //something with the message
        if(msgPayload && msgPayload.from !== "LWC"){
            this.messages.push({
                id: this.messages.length,
                value:msgPayload.message,
                from:msgPayload.from
            });
        }
    }
}