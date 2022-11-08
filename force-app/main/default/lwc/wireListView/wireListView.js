import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name'; 

export default class WireListView extends LightningElement {

    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: "Contact_Test",
        sortBy : NAME_FIELD,
        pageSize : 20
    })
    ListView;

    get contacts(){
        return this.ListView.data.records.records;
    };



}