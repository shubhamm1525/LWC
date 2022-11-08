import { LightningElement } from 'lwc';

export default class ChildComponentCommunication extends LightningElement {

    handleOnClick(){
        this.dispatchEvent(new CustomEvent('increasecount') );
    }



}