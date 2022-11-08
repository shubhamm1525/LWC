import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value;

    onInputChangehandler(event) {
        this.value = event.target.value;
    }

    checkboxSelectHandler() {
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMessage = childComponent.selectCheckBox(this.value);
        console.log(returnedMessage);
    }
}