import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionStockComponent } from './gestion-stock/gestion-stock.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';

import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  {path:"category", component:CategoryComponent },
  {path:"product", component:ProductComponent  },
  {path:"dashboard",
    component:GestionStockComponent, 
    },
    {path:"",component:HomeComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"login",component:FormComponent},
    {path:"register",component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
