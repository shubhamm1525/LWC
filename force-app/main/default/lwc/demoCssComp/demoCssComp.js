import { LightningElement } from 'lwc';

export default class DemoCssComp extends LightningElement {
    todoVideos = [
        {
        id:0,
        title:"Lightning Message Service",
        done:true,
        description:"Explain LMS with aura and lwc example"
    },
    {
        id:1,
        title:"Lightning Record Service",
        done:true,
        description:"Explain Record service with aura and lwc example"
    },
    {
        id:2,
        title:"Lightning navigation Service",
        done:true,
        description:"Explain navigation service with aura and lwc example"
    }


]
}