import { LightningElement } from 'lwc';

export default class ParentComponentCommunication extends LightningElement {
    clicks = 1;
    endValue = 0;
    msg = 'Default String Message';


    handleIncreaseCount(event){
        this.endValue = event.detail.endValue;
        this.msg = event.detail.msg;

        if(this.clicks < this.endValue){
            this.clicks = this.clicks + 1;
        }
        
    }
}