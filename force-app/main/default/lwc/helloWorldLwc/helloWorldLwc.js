import { LightningElement,track,wire } from 'lwc';

export default class HelloWorldLwc extends LightningElement {

   @track dynamicGreeting = "World";

   greetingChangeHandler(event){
       this.dynamicGreeting = event.target.value;
   }


}