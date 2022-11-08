import { LightningElement,api,track } from 'lwc';

export default class MeetingRoom extends LightningElement {
    @api meetingRoomInfo; //{roomName:'A-01', roomCapacity:'12'}
    @api showRoomInfo = false;

    styleClickHandler(){
        //alert('clciked in child');
        //alert(this.meetingRoomInfo);
        const tileClicked = new CustomEvent('tileclick', {detail: this.meetingRoomInfo} );
        this.dispatchEvent(tileClicked);
    }

}