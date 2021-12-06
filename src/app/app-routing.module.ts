import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  {path: 'products', component:ProductsComponent},
  {path: '', component:HomeComponent},
  {path: 'new', component:ProductAddComponent},
  {path: 'editProduct/:id', component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
