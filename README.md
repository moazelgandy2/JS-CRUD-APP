# JavaScript CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built using JavaScript. The application allows users to manage products by adding, viewing, updating, and deleting them.

## Table of Contents

- [<i class="fas fa-play"></i> Live Demo](#live-demo)
- [<i class="fas fa-code"></i> Technologies Used](#technologies-used)
- [<i class="fas fa-database"></i> CRUD Operations](#crud-operations)
  - [<i class="fas fa-plus-circle"></i> Create](#create)
  - [<i class="fas fa-eye"></i> Read](#read)
  - [<i class="fas fa-edit"></i> Update](#update)
  - [<i class="fas fa-trash-alt"></i> Delete](#delete)
  - [<i class="fas fa-check-circle"></i> Live Input Validation](#live-input-validation)
- [<i class="fas fa-cogs"></i> Usage](#usage)
- [<i class="fas fa-code-branch"></i> Code Structure](#code-structure)
- [<i class="fas fa-play-circle"></i> How to Run Locally](#how-to-run-locally)
- [<i class="fas fa-hands-helping"></i> Contributions](#contributions)
- [<i class="fas fa-balance-scale"></i> License](#license)

## Live Demo

Check out the live demo of the CRUD app [here](https://moazelgandy2.github.io/JS-CRUD-APP/).

## Technologies Used

The following technologies were used to create this CRUD app:

- JavaScript
- HTML
- CSS (or Bootstrap for styling)
- LocalStorage (for data persistence)

## CRUD Operations

### Create

Users can add new products by filling in the product details and clicking the "Add" button.

### Read

The app displays the list of products stored in the LocalStorage in a table format.

### Update

Users can update product details by editing the existing product entries.

### Delete

Users can remove products from the list.

### Live Input Validation

Real-time input validation is implemented using event listeners in JavaScript to provide immediate feedback on input field validity.
- Product Name: Validates for a minimum length of 3 characters.
- Product Price: Validates for a minimum length of 1 character (can be adjusted as needed).
- Product Description: Validates for a minimum length of 5 characters.

## Usage

1. Fill in the product details (name, price, description).
2. Real-time validation will indicate the validity of each input field.
3. Click the "Add" button to store the product.
4. View, update, or delete products using the interface provided.

## Code Structure

The application code mainly consists of:

- HTML file: Contains the structure of the web page.
- JavaScript file: Contains the logic for input validation, CRUD operations, and data persistence using LocalStorage.
- CSS (or Bootstrap): Provides styling and layout for the web page.

## How to Run Locally

To run this application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/moazelgandy2/JS-CRUD-APP.git
   ```
2. Open the index.html file in your web browser.

