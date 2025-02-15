import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { Product } from '../Model/Product';
import { CategoryServiceService } from '../service/category-service.service';
import { ProductServiceService } from '../service/product-service.service';
import { APP_CONFIG } from '../../config/URL';

@Component({
  selector: 'app-gestion-stock',
  standalone: false,
  templateUrl: './gestion-stock.component.html',
  styleUrl: './gestion-stock.component.css'
})
export class GestionStockComponent implements OnInit{

  categories: Category[] = [];
 

  products: Product[] = []; 

  root_productImage = APP_CONFIG.root_mediaProd_uri
constructor(private categoryService : CategoryServiceService, 
  private productService : ProductServiceService){}




  ngOnInit(): void {
    this.loadCategory();
    this.loadProduct();
  }

  loadCategory() {
    this.categoryService.getCategory().subscribe(
      (dataCategory: any) => { 
        this.categories = dataCategory; 
        console.log(`Category ${dataCategory}`);
        
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
        console.log(`Category ${dataProduct}`);
      },
      (error: any) => {
        console.error(`Error Loading Products: ${error}`);
      }
    );
  }

}
