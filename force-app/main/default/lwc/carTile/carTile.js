import { LightningElement,api,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';  

export default class CarTile extends LightningElement {
    @api car;
    @api carSelectedId;

   @wire(CurrentPageReference) pageRef;

    handleCarSelect(event){
        event.preventDefault();
        const carId = this.car.Id;
        const carSelect = new CustomEvent('carselect', {detail:carId});
        this.dispatchEvent(carSelect);
        console.log("carSelect event dispatched");

        fireEvent(this.pageRef, 'carselect', this.car.Id );
        console.log("this.car.Id" + this.car.Id);
        console.log("fireEvent dispatched");

    }

    get isCarSelected(){
        if(this.car.Id === this.carSelectedId){
            return "tile selected";
        }
        return "tile";
    }

}