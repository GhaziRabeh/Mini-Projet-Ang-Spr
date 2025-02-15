# E-commerce Application - Full Stack (Frontend & Backend) 🛒

This project is a **full-stack e-commerce** application that includes both **backend** and **frontend** components. The backend is built using **Spring Boot** and provides a RESTful API, while the frontend is built using **Angular** and **Tailwind CSS** for styling. The application implements **CRUD** functionality for managing **categories** and **products**, with a **OneToMany** relationship between categories and products.

---

## Backend (Spring Boot) 🚀

The backend of this application is built with **Spring Boot**, and it exposes RESTful endpoints for managing categories and products. The backend uses **Spring Data JPA** to interact with a **MySQL** database.

### Key Features 🔑

- **CRUD Operations**: Create, Read, Update, and Delete categories and products.
- **OneToMany Relationship**: A category can have many products, while each product belongs to one category.
- **MySQL Database**: The application uses a MySQL database to store and retrieve categories and products.

### Technologies Used 🛠️

- **Spring Boot**: The backend framework.
- **Spring Data JPA**: For database interaction and CRUD operations.
- **MySQL**: Database for storing category and product information.
- **REST API**: Exposes endpoints for interacting with categories and products.

### API Endpoints 📡

- **Categories**
  - `GET /categories` - Get all categories.
  - `GET /categories/{id}` - Get category by ID.
  - `POST /categories` - Create a new category.
  - `PUT /categories/{id}` - Update a category by ID.
  - `DELETE /categories/{id}` - Delete category by ID.

- **Products**
  - `GET /products` - Get all products.
  - `GET /products/{id}` - Get product by ID.
  - `POST /products` - Create a new product.
  - `PUT /products/{id}` - Update product by ID.
  - `DELETE /products/{id}` - Delete product by ID.

---

## Frontend (Angular) 🌐

The frontend of this application is built using **Angular**. It communicates with the backend via HTTP requests to fetch, display, and manage categories and products. The frontend is styled using **Tailwind CSS** to provide a modern, responsive design.

### Key Features 🔑

- **CRUD Operations**: Allows users to create, read, update, and delete categories and products from the frontend.
- **Responsive Design**: The application is styled using **Tailwind CSS**, ensuring it is responsive across different screen sizes.
- **Angular Services**: Angular services are used to handle HTTP requests to the backend API.

### Technologies Used 🛠️

- **Angular**: The frontend framework for building dynamic web applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **HttpClient**: Angular's built-in service to make HTTP requests to the backend API.

### API Consumption 📱

The frontend communicates with the backend by consuming the following APIs:
- **CategoryService**: Makes HTTP requests to manage categories.
- **ProductService**: Makes HTTP requests to manage products.

### Folder Structure 📂

- `src/app/`:
  - `components/`: Contains Angular components for displaying categories and products.
  - `services/`: Contains Angular services for making API requests (CategoryService, ProductService).

---

## Installation and Setup 🔧

### Backend Setup (Spring Boot)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-name.git
   cd backend
