import { LightningElement,track } from 'lwc';

export default class BmiCalculator extends LightningElement {

    cardTitle = 'BMI Calculator Local Dev Server';

    @track bmiData = {
        weight:0,
        height:0,
        bmiResult:0
    }

    onWeightChange(event){
        this.bmiData.weight = parseFloat(event.target.value);
    }

    onHeightChange(event){
        this.bmiData.height = parseFloat(event.target.value);
    }

    calculateBmiHandler(){
        try{
            this.bmiData.bmiResult = this.bmiData.weight / (this.bmiData.height * this.bmiData.height);
        }catch{
            this.bmiData.bmiResult = undefined;
        }
    }

get bmiValue(){
    if(this.bmiData.bmiResult === undefined){
        return "";
    }
    return `Your BMI is ${this.bmiData.bmiResult}`;
}









}