import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../Model/Product';
import { APP_CONFIG } from '../../config/URL';
import { CategoryServiceService } from '../service/category-service.service';
import { ProductServiceService } from '../service/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{


  category = new Category()
  categories : Category[] = []


  product= new Product()
  products: Product[] = []; 
  root_product_api = APP_CONFIG.root_api_uri_product;
  root_productImage = APP_CONFIG.root_mediaProd_uri;


constructor(private productService: ProductServiceService,
  private categoryService : CategoryServiceService,
              private router : ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCategroy()
    this.loadProduct();
  }
//get

loadCategroy(){
this.categoryService.getCategory().subscribe(
  (dataCategory)=>{
    this.category = dataCategory
  }
)
}
  loadProduct() {
    const id = this.router.snapshot.paramMap.get('id');
    this.productService.getProductById(id).subscribe(
      (dataProduct) => { 
        this.product = dataProduct; 
        //console.log(`Product By !id ${dataProduct}`);
        
      },
      (error: any) => {
        console.error(`Error Loading Products: ${error}`);
      }
    );
  }

}
