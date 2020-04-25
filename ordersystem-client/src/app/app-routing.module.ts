import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';

import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customerDetail/customer-detail.component';
import { CustomerDetailResolver } from './customerDetail/customer-detail.resolver';

import { SilsComponent } from './sils/sils.component';
import { SilDetailResolver } from './sil-detail/sil-detail.resolver';
import { SilDetailComponent } from './sil-detail/sil-detail.component';

import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './orderDetail/order-detail.component';
import { OrderDetailResolver } from './orderDetail/order-detail.resolver';

import { CreateOrderComponent } from './createOrder/create-order.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './productDetail/product-detail.component';
import { ProductDetailResolver } from './productDetail/product-detail.resolver';

import { DocTypesComponent } from './doc-types/doc-types.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '././service/auth-guard.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AtpComponent } from './atp/atp.component';
import { CmmComponent } from './cmm/cmm.component';
import { OwdComponent } from './owd/owd.component';





//import { AuthGuard } from "./shared/auth.guard";

// Angular 8 uses the standard compliant import() statement which will allow you to detect any issues ahead of time:
/*const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  }
];*/

const routes: Routes = [
    //{ path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
    { path: 'home', component: HomeComponent },

    { path: 'customers', component: CustomersComponent },
    { path: 'customers/:customerId', component: CustomerDetailComponent, resolve: { customer: CustomerDetailResolver } },
    
    { path: 'orders/create', component: CreateOrderComponent },
    { path: 'orders/:orderId', component: OrderDetailComponent, resolve: { order: OrderDetailResolver }  },
    { path: 'orders', component: OrdersComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailComponent, resolve: { product: ProductDetailResolver }   },


    { path: 'sils', component: SilsComponent },
    { path: 'sils/:silId', component: SilDetailComponent, resolve: { sil: SilDetailResolver } },



    { path: 'doc-types', component: DocTypesComponent },
    { path: 'atp', component: AtpComponent },
    { path: 'cmm', component: CmmComponent },
    { path: 'owd', component: OwdComponent },  //canActivate: [AuthGuardService],
    

    //{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

    exports: [RouterModule],
    providers: [
        { provide: APP_BASE_HREF, useValue: '!' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CustomerDetailResolver,
        OrderDetailResolver,
        ProductDetailResolver,
        
    ]
})
export class AppRoutingModule { }
