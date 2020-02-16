import 'jquery';
import 'lodash';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersTableComponent } from './customers/customers-table.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { DiscountComponent } from './customerDetail/discount.component';
import { CustomerService } from './customers/customer.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderService } from './orders/order.service';
import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { ProductService } from './products/product.service';
import { AddressService } from './shared/address.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SilsComponent } from './sils/sils.component';
import { SilsTableComponent } from './sils-table/sils-table.component';
import { DocTypesComponent } from './doc-types/doc-types.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent,
        SilsComponent,
        SilsTableComponent,
        DocTypesComponent,
        LoginComponent,
        
        
        
        
    ],
    entryComponents: [
        HomeComponent,
        CustomersComponent,
        CustomersTableComponent,
        OrdersComponent,
        CreateOrderComponent,
        CustomerDetailComponent,
        DiscountComponent,
        NavigationComponent,
        ProductsComponent,
        ProductDetailComponent,
        OrderDetailComponent,
        
    ],
    providers: [
        CustomerService,
        OrderService,
        ProductService,
        AddressService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() { }
}
