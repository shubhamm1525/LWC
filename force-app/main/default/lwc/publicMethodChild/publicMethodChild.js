import { LightningElement,track,api } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];

    options =  [
            { label: 'Red Marker', value: 'red' },
            { label: 'Green Marker', value: 'green' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Yellow Marker', value: 'yellow' },
        ];

    @api selectCheckBox(checkboxValue){

     const selectedCheckbox = this.options.find(checkbox =>{
            return checkboxValue === checkbox.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully Checked";
        }
            return "No checkbox found";
    }











}