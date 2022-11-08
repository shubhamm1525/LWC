import { LightningElement,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';

export default class BindWireWithProperty extends LightningElement {

    accounts;
    error;
   
    buttonClick(){
        getAccountList()
        .then((result)=>{
            this.accounts = result;
            this.error = undefined;
        })
        .catch((error)=>{
            this.error = error;
            this.accounts = undefined;
        });
    }

    

}