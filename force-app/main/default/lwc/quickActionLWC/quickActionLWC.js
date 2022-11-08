import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class QuickActionLWC extends LightningElement {
    closeAction(){
        this.dispatchEvent( new CloseActionScreenEvent() );
    }
}