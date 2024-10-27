# Inventory Management System

A full-stack Inventory Management System built using **React** for the frontend and **Node.js**, **Express**, and **MongoDB** for the backend. This system enables users to manage inventory items and supplier information with features like CRUD operations, low stock alerts, and real-time updates.

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)

---

## Features

### Frontend
- **User SignUp/LogIn**: user signup and login using jwt auth.
- **Inventory Dashboard**: View inventory items with color-coded stock indicators.
- **CRUD Operations**: Forms to add, update, and delete inventory items.
- **Search and Filter**: Filter inventory items by category or supplier.
- **Supplier Management**: Manage supplier information, including name, contact details, and items supplied.

### Backend
- **CRUD API for Inventory and Supplier Management**: API endpoints to manage inventory items and suppliers.
- **Low Stock Alerts**: Mark items as "Out Of stock" when quantities fall below a set threshold.

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js, MongoDB
- **Additional Libraries**: Axios (for API requests), Mongoose (for MongoDB ODM),

---

## Installation

### Prerequisites
- **Node.js** and **npm** installed
- **MongoDB** running locally or in the cloud

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hardikrathod777/inventory-management.git
   cd inventory-management

2. **Install dependencies for both frontend and backend:**
  ```bash
  # Install frontend dependencies
  cd frontend
  npm install
  # Install backend dependencies
  cd ../backend
  npm install
  ```

3. **Environment Variables:**
   Create a .env file in the backend directory and add the following
   ```bash
   PORT=5000
    MONGODB_URI=mongodb://localhost:27017/inventoryDB/your mongodb uri
    JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application:**
   Backend:
   ```bash
   cd backend
    npm start
   ```

   Frontend:
   ```bash
   cd frontend
   npm start
   ```

5. Open **http://localhost:3000** to view the app.


## Usage

1. **Inventory Management**:

Use the inventory dashboard to view, add, update, or delete items.
Filter items by category or supplier for easy access.

2. **Supplier Management**:

Add and edit supplier information and link them to inventory items.

3. **Stock Alerts**:

View low stock alerts on the dashboard.




