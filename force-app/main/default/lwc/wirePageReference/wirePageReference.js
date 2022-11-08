import { LightningElement,wire } from 'lwc';
import { CurrentPageReference, NavigationMixin } from 'lightning/navigation';

export default class WirePageReference extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    get currentPageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef) : "";
    }
}