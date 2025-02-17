import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionStockComponent } from './gestion-stock/gestion-stock.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterFormComponent } from './register-form/register-form.component';





@NgModule({
  declarations: [
    AppComponent,
    GestionStockComponent,
    CategoryComponent,
    ProductComponent,
    FormComponent,
    HomeComponent,
    ProductDetailsComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    KeycloakAngularModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

