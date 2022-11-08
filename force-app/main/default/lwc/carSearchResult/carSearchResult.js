import { LightningElement,api, wire,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getCars from '@salesforce/apex/carSearchResultController.getCars';

export default class CarSearchResult extends LightningElement {
    @api carTypeId;
    @track cars;
    @track selectedCarId;

    @wire(getCars,  {carTypeId : '$carTypeId'} )
    wiredCars({data,error}){
        if(data){
            this.cars = data;
            console.log("data received from controller" + data);
        }else if(error){
            this.showToast('ERROR',error.body.message, 'error');
        }
    }

    showToast(title,message,variant) {
        const event = new ShowToastEvent({
            title: title,
            message:message,
            variant: variant,
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }

    carSelectHandler(event){
        const carId = event.detail;
        this.selectedCarId = carId;
        console.log("carSelectHandler event handled");

    }

    get carsFound(){
        if(this.cars){
            return true;
        }else{
            false;
        }
    }


}