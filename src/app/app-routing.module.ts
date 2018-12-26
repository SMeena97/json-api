import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlotComponent } from './flot/flot.component';
import { MorrisComponent } from './morris/morris.component';
import { TablesComponent } from './tables/tables.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flot', component: FlotComponent },
  { path: 'morris', component: MorrisComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
