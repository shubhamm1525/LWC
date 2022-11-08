import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ShowToastEvents extends LightningElement {
  showError() {
    const event = new ShowToastEvent({
      title: "Error",
      message: "Error Toast message",
      variant: "error",
      mode: "dismissable"
    });
    this.dispatchEvent(event);
  };

  showWarning() {
    const event = new ShowToastEvent({
      title: "Warning",
      message: "Warning Toast message",
      variant: "warning",
      mode: "dismissable"
    });
    this.dispatchEvent(event);
  };

  showSuccess() {
    const event = new ShowToastEvent({
      title: "Success",
      message: "Success Toast message",
      variant: "success",
      mode: "dismissable"
    });
    this.dispatchEvent(event);
  };

  showInfo() {
    const event = new ShowToastEvent({
      title: "Info",
      message: "Info Toast message",
      variant: "info",
      mode: "dismissable"
    });
    this.dispatchEvent(event);
  };






}