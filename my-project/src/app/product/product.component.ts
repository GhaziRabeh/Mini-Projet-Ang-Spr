import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
import { Category } from '../Model/Category';
import { APP_CONFIG } from '../../config/URL';
import { CategoryServiceService } from '../service/category-service.service';
import { ProductServiceService } from '../service/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ModelAdd: boolean = false;
  ModelUpdate: boolean = false;
  ModelDelete: boolean = false;

  categories: Category[] = [];
  product: Product = new Product();

  products: Product[] = []; 
  root_product_api = APP_CONFIG.root_api_uri_product;
  root_productImage = APP_CONFIG.root_mediaProd_uri;

  imageFile: File | null = null;

  constructor(private categoryService: CategoryServiceService,
              private productService: ProductServiceService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadCategory();
    this.loadProduct();
  }
//get
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

  
//add
  onSaveProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price);

    if (this.product.category_id) {
      formData.append('category_id', this.product.category_id.toString());
    }

    if (this.imageFile instanceof File) {
      formData.append('image', this.imageFile);
    }

    this.productService.insertProduct(formData).subscribe(
      (dataProd) => {
        console.log(`Product saved ${dataProd}`);
        this.loadProduct();
        this.ModelAdd = false;
      },
      (error) => {
        console.error(`Error saving Product ${error}`);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      console.log('File selected');
    }
  }

  ModelOpen() {
    this.resetProductForm();
    this.ModelAdd = true;
  }

  ModelClose() {
    this.ModelAdd = false;
    this.imageFile = null;
  }


//delete
  ModelDeleteOpen(id: any) {
    this.product.id = id;
    this.ModelDelete = true;
  }

  ModelDeleteClose() {
    this.ModelDelete = false;
    this.product.id = null;
  }

  deleteProduct(id: any) {
    if (this.ModelDelete) {
      this.productService.deleteProduct(id).subscribe(
        (dataProduct) => {
          console.log('Product deleted', dataProduct);
          this.loadProduct();
          this.ModelDelete = false;
        },
        (error) => {
          console.error('Error deleting product', error);
        }
      );
    }
  }


  //update
  ModelUpdateOpen(id: any) {
    this.productService.getProductById(id).subscribe(
      (dataProd) => {
        this.product = { ...dataProd };
        this.ModelUpdate = true;
        console.log('Product loaded for update:', this.product);
      },
      (error) => {
        console.error('Error fetching product for update', error);
      }
    );
  }
  

  ModelUpdateClose() {
    this.ModelUpdate = false;
  }
  updateProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
  

    if (this.product.category_id) {
      formData.append('category_id', this.product.category_id.toString());
    }
  
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }
  
    this.productService.updateProduct(this.product.id, formData).subscribe(
      (dataProduct) => {
        console.log('Product updated successfully', dataProduct);
        this.loadProduct();
        this.ModelUpdate = false;
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }
  
//reset
  private resetProductForm() {
    this.product = new Product();
    this.imageFile = null;
  }
}
