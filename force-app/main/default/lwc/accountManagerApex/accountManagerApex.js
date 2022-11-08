import { LightningElement,wire,track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class AccountManagerApex extends LightningElement {

   @track numberOfRecords;
   @track accounts;
    numberOfAccountChangehandler(event){
        this.numberOfRecords = event.target.value;
        console.log('numberOfRecords ' + this.numberOfRecords);
    }

    getAccounts(){
        console.log('Inside getAccounts');
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title : "Accounts Loaded",
                message : this.numberOfRecords + ' Accounts Fetched from server',
                variant : 'success',
            })
            this.dispatchEvent(toastEvent);
           
        }).catch(error =>{
            console.error('Error in getting the accounts ', error.body.message);
            const toastEvent = new ShowToastEvent({
                title : "ERROR",
                message : error.body.message,
                variant : 'error',
            })
            this.dispatchEvent(toastEvent);
        })
    }

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

}