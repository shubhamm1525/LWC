import { LightningElement } from 'lwc';

export default class ChildComponentCommunication extends LightningElement {

    endValue = 5;


    handleOnClick(){
        const myEventWithValue = new CustomEvent('increasecount',{
            detail:{
                endValue : this.endValue,
                msg : 'I am string'
            }
        })

        this.dispatchEvent(myEventWithValue);
        //this.dispatchEvent(new CustomEvent('increasecount') );

    }



}