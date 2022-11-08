import { LightningElement,api } from 'lwc';

export default class HeaderLessQuickAction extends LightningElement {
    @api invoke(){
        console.log("Action Performed");
    }
}