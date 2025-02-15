
import { APP_CONFIG } from '../../config/URL';
import { CategoryServiceService } from '../service/category-service.service';
import { Category } from './../Model/Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']  
})
export class CategoryComponent implements OnInit {

  ModelAdd: boolean = false;
  ModelUpdate: boolean = false;
  ModelDelete: boolean = false;

  categories: any[] = [];
  category = new Category();

  root_category_uri = APP_CONFIG.root_media_uri;

  imageFile: File | null = null;

  constructor(private categoryservice: CategoryServiceService) { }

  ngOnInit(): void {
    this.loadCategory();
  }

  loadCategory(): void {
    this.categoryservice.getCategory().subscribe(
      (dataCategory: any) => {
        this.categories = dataCategory;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  onSaveCategory(){
    const formData = new FormData();
    formData.append('name', this.category.name);
    formData.append('description', this.category.description);

    if (this.imageFile instanceof File) {
      formData.append('image', this.imageFile);
    }

    this.categoryservice.insertCategory(formData).subscribe(
      (dataCategory) => {
        //console.log('Category saved', dataCategory);
        this.loadCategory();  
        this.ModelAdd = false;  
      },
      (error) => {
        console.error('Error saving category', error);
      }
    );
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
      //console.log('File selected');
    }
  }
  deleteCategory(id: any){
    
    if (this.ModelDelete) {
      this.categoryservice.deleteCategory(id).subscribe(
        (dataCategory) => {
          //console.log('Category deleted', dataCategory);
          this.loadCategory();  

          this.ModelDelete = false;
        },
        (error) => {
          console.error('Error deleting category', error);
        }
      );
    }
  }

  updateCategory(){
    const formData = new FormData();
    formData.append('name', this.category.name);
    formData.append('description', this.category.description);
  
    if (this.imageFile) {
      formData.append('image', this.imageFile);  
    }
  
    this.categoryservice.updateCategory(this.category.id, formData).subscribe(
      (dataCategory) => {
   //    console.log('Category updated', dataCategory);
        this.loadCategory();  
  
        
        this.ModelUpdate = false;
      },
      (error) => {
        console.error('Error updating category', error);
      }
    );
  
  }
  ModelOpen() {
    this.resetCategoryForm();  
    this.ModelAdd = true;
  }

  ModelClose() {
    this.ModelAdd = false;
    this.imageFile = null;  
  }

  ModelUpdateOpen(id: any){
    this.categoryservice.getCategoryById(id).subscribe(
      (dataCategory) => {
        this.category = dataCategory;  
        this.ModelUpdate = true;  
      },
      (error) => {
        console.error('Error fetching category for update', error);
      }
    );
  }

  ModelUpdateClose(){
    this.ModelUpdate = false;
  }

  ModelDeleteOpen(id: any){
    this.category.id = id
  this.ModelDelete = true
  }

  ModelDeleteClose(){
    this.ModelDelete = false
    this.category.id = null
  }

  
  private resetCategoryForm(){
    this.category = new Category();  
    this.imageFile = null;  
  }
}
