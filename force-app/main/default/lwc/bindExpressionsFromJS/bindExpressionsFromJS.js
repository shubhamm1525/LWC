import { LightningElement } from 'lwc';

export default class BindExpressionsFromJS extends LightningElement {
    fullName='';
    phone='';
    email='';

    changeHandler(event){
        const label = event.target.label;
        console.log("Lable value is :: " + label);
        if(label == 'Full Name'){
            this.fullName = event.target.value;
        }
        else if(label == 'Phone'){
            this.phone = event.target.value;
        }
        else if(label == 'Email'){
            this.email = event.target.value;
        }
    }

}