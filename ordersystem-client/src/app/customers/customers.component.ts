import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer.interface';

@Component({
  selector: 'customers',
  templateUrl: './customers.html'
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  title = 'Global Tenant:';
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });
  }
}
