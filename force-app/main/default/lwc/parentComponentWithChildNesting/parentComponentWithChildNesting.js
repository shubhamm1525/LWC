import { LightningElement,api } from 'lwc';
import findAccList from '@salesforce/apex/AccountController.findAccList';

export default class ParentComponentWithChildNesting extends LightningElement {
   
    myDataFromParents;
    error;

    handleOnChange(event){
        const keyword = event.target.value;
        console.log(keyword);
        findAccList({keyword})
        .then((result)=>{
            
            this.myDataFromParents = result;
            console.log(this.myDataFromParents);
            this.error = undefined;
           
        })
        .catch((error)=>{
            this.error = error;
            this.myDataFromParents = undefined;
        });
        
    };

}