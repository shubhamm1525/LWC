import { LightningElement,wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccList';
import AccountSource from '@salesforce/schema/Account.AccountSource';


export default class BindWireWithProperty extends LightningElement {

    @wire(getAccountList) accounts;
    





}