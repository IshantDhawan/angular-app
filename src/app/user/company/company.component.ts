import { Component, Input } from '@angular/core';

@Component({
    selector : 'company-info',
    templateUrl : './company.component.html'
})

export class CompanyComponent{
@Input('company') company ;
}