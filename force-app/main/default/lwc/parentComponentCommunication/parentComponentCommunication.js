import { LightningElement } from 'lwc';

export default class ParentComponentCommunication extends LightningElement {
    clicks = 1;

    handleIncreaseCount(){
        this.clicks = this.clicks + 1;
    }
}