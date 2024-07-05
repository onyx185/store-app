import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { CustomerActionTypes } from '../state/customer.actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
  customers: any;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: CustomerActionTypes.LOAD_CUSTOMERS });
    this.store.subscribe(state=>this.customers = state.customers.customers)
  }
  editCustomer(customer: any) {}
  deleteCustomer(customer: any) {}
}
