import { LightningElement,api,track,wire } from 'lwc';
import { createRecord,getRecord} from 'lightning/uiRecordApi';

const fieldArray=['Account.Name', 'Account.Phone','Account.Website'];

export default class AccountManagerLDS extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;


    @track recordId;

    @wire(getRecord,{recordId:'$recordId', fields:fieldArray })
    accountRecord;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccountHandler(){
        const fields = {'Name': this.accountName, 'Phone' :this.accountPhone,'Website': this.accountWebsite};
        const recordInput = {apiName : 'Account', fields};
        
        createRecord(recordInput).then(response =>{
            console.log('Account has been created : ', response.id );
            this.recordId = response.id;
            console.log('this.recordId  ' , this.recordId);

        }).catch(error => {
            console.error('Error in creating Account : '+ error.body.message);
        })
    }

    get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
    }


}