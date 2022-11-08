import { LightningElement, track, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountRecordForm extends LightningElement {
    @api objectApiName;
    @api recordId;

    handleSuccess(event) {

        this.recordId = event.detail.id;
        console.log('ACCOUNT RECORD ID :::' + this.recordId)

        const evt = new ShowToastEvent({
            title: "Record Created",
            message: "Record Created Successfully" + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }

}