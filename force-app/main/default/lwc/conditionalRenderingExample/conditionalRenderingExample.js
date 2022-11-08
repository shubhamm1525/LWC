import { LightningElement,track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {

    @track displayDiv = false;

    @track cityList = ['Nagpur','Mumbai','Goa','Pune','Hyderabad'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    };














}