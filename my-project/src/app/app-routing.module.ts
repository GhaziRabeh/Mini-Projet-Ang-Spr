import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionStockComponent } from './gestion-stock/gestion-stock.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"" ,component:GestionStockComponent},
  {path:"category", component:CategoryComponent},
  {path:"product", component:ProductComponent},
  {path:"form", component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
