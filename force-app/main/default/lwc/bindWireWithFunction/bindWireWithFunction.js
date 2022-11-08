import { LightningElement,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';



export default class BindWireWithProperty extends LightningElement {

    accounts;
    error;

    @wire(getAccountList)
    wiredAccounts({error,data}){
        if(data){
            this.accounts = data;
            this.error = undefined;
        }
        else if(error){
            this.error = error;
            this.accounts = undefined;
        }
    }
    





}