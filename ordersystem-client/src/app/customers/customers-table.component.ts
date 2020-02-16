import { Component, Input } from '@angular/core';
import { Customer } from './customer.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'customers-table',
    templateUrl: './customers-table.html'
})
export class CustomersTableComponent {
    @Input() customers: Customer[];
    constructor(private router: Router) {

    }

    goToCreateOrder() {
        this.router.navigate(['/orders/create']);
    }
}
