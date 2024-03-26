import { LightningElement ,api } from 'lwc';
import CAR_HUB_PLACEHOLDER from '@salesforce/resourceUrl/cardplaceholder'

export default class Cardplaceholder extends LightningElement {

    @api message;
    placeholderurl = CAR_HUB_PLACEHOLDER
    
}