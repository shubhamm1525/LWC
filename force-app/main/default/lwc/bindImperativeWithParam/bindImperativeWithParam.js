import { LightningElement,wire} from 'lwc';
import findAccList from '@salesforce/apex/AccountController.findAccList';



export default class BindWireWithProperty extends LightningElement {

    searchKey='';
    accounts;
    errors;

    handleOnChange(event){
        this.searchKey = event.target.value;
        console.log(this.searchKey);
    }

    buttonClick(){
        console.log('clicked');
        findAccList({keyword:this.searchKey})
        .then((result)=>{
            console.log(result);
            this.accounts = result;
            this.errors = undefined;
        })
        .catch((error)=>{
            this.errors = error;
            this.accounts = undefined;
        });
    }

    
     
    





}