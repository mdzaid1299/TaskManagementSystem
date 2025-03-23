# Task Management System

## Overview
This is a **Task Management System** built with:
- **Django** (Backend - API)
- **Flask** (Microservices)
- **PostgreSQL** (Database)
- **HTML, CSS, JavaScript** (Frontend)

## Features
- Create, Read, Update, and Delete (CRUD) tasks.
- API integration with Django REST framework.
- Flask-based microservices.
- PostgreSQL database for persistent storage.
---

## 🚀 Local Setup & Running Guide
### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/YOUR_GITHUB_USERNAME/TaskManagementSystem.git
 cd TaskManagementSystem
```

### **2️⃣ Setup & Run PostgreSQL**
Ensure PostgreSQL is running locally on port `5432`. Use **pgAdmin 4** to create the database manually or via SQL.

#### **PostgreSQL Configuration** (pgAdmin 4 / psql)
```sql
CREATE DATABASE task_management;
CREATE USER task_user WITH PASSWORD 'your_password';
ALTER ROLE task_user SET client_encoding TO 'utf8';
ALTER ROLE task_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE task_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE task_management TO task_user;
```

---

## 📌 **Backend - Django API**
### **3️⃣ Setup Django Backend**
```sh
cd task_manager
python -m venv venv
source venv/bin/activate   # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

### **4️⃣ Apply Migrations & Run Server**
```sh
python manage.py migrate
python manage.py runserver
```
📍 **Django API Running At:** `http://127.0.0.1:8000/api/tasks/`

---

## ⚙️ **Flask Microservice**
### **5️⃣ Setup Flask Service**
```sh
cd ../flask_service
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
```

### **6️⃣ Run Flask Service**
```sh
python app.py
```
📍 **Flask API Running At:** `http://127.0.0.1:5000/flask-tasks`

---

## 🎨 **Frontend Setup**
### **7️⃣ Open Frontend in Browser**
- Navigate to the `frontend/` folder.
- Open `index.html` in a browser.
- Update `script.js` to match the backend API URL:
  ```js
  const apiUrl = "http://127.0.0.1:8000/api/tasks/";
  ```

---
