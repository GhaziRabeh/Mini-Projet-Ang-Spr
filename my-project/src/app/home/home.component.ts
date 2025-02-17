import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { Product } from '../Model/Product';
import { APP_CONFIG } from '../../config/URL';
import { CategoryServiceService } from '../service/category-service.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  categories: Category[] = [];
  

  products: Product[] = []; 
  root_product_api = APP_CONFIG.root_api_uri_product;
  root_productImage = APP_CONFIG.root_mediaProd_uri;
  constructor(private categoryService: CategoryServiceService,
              private productService: ProductServiceService) {}


  ngOnInit(): void {
    this.loadCategory();
    this.loadProduct();
  }
  loadCategory() {
    this.categoryService.getCategory().subscribe(
      (dataCategory: any) => { 
        this.categories = dataCategory; 
      },
      (error: any) => {
        console.error(`Error Loading Category: ${error}`);
      }
    );
  }

  loadProduct() {
    this.productService.getProduct().subscribe(
      (dataProduct: any) => { 
        this.products = dataProduct; 
      },
      (error: any) => {
        console.error(`Error Loading Products: ${error}`);
      }
    );
  }
}
