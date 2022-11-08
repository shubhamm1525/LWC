import { LightningElement } from 'lwc';

export default class UseForEachLoop extends LightningElement {
    Students = [
        {
            Id : '001',
            Name : "Rajat Sharma",
            Class : 'Class 1',
            Fees : 10000,
        },
        {
            Id : '002',
            Name : "sohail Khan",
            Class : 'Class 2',
            Fees : 11000,
        },
        {
            Id : '003',
            Name : "Pankaj Kumar",
            Class : 'Class 3',
            Fees : 10500,
        },
        {
            Id : '004',
            Name : "Mangesh kale",
            Class : 'Class 4',
            Fees : 14000,
        },
        {
            Id : '005',
            Name : "Farhan Baig",
            Class : 'Class 5',
            Fees : 17000,
        }
    ]
}