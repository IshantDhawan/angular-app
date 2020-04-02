import { Component, Input } from '@angular/core';

@Component({
    selector : 'address-info',
    templateUrl : './address.component.html'
})

export class AddressComponent{
@Input('address') address;
}