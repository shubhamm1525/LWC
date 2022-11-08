import { LightningElement } from 'lwc';
import SL from '@salesforce/resourceUrl/simplelightbox';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

export default class SimpleLightBoxExample extends LightningElement {
    slLoaded = false;
    renderedCallback() {
        if (!this.slLoaded) {
            Promise.all([
                loadStyle(this, SL + '/simpleLightbox/dist/simpleLightbox.css'),
                loadScript(this, SL + '/simpleLightbox/dist/simpleLightbox.js')
            ]).then(() => {
                this.slLoaded = true;

            }).catch((error) => {
                console.error('Unable to initialize simple light box ' + error);
            })
        }
    }

    openGallery(){
       
        SimpleLightBox.open({
            items:['https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fred-car&psig=AOvVaw16aK_umzpQNffQpstG6C4g&ust=1640170898664000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJibj4ff9PQCFQAAAAAdAAAAABAD']
        });
    }





}