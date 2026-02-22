# ✈️ PlanYourTrip – Travel Planning Web Application

PlanYourTrip is a full-stack travel planning web application where users can explore travel packages, book trips, and request travel quotes.  
The application also includes an admin panel to manage travel packages.

Built using Java Spring Boot, Angular, and MySQL.

---

## 🚀 Tech Stack

Backend:
- Java 8
- Spring Boot 2.7.4
- Spring Web
- Spring Data JPA
- MySQL
- Maven

Frontend:
- Angular
- HTML, CSS, JavaScript

---

## 🌟 Features

### User Features
- User Signup & Login
- Home Page
- View Travel Packages
- Book Packages
- Get a Quote Page
- About Us Page

### Admin Features
- CRUD Operations for Travel Packages

---

## ⚙️ How to Run Locally

### 1. Clone Repository
git clone https://github.com/Viz-17/PlanYourTrip.git

### 2. Setup MySQL Database
Create database:
planyourtrip

Update `application.properties`:
spring.datasource.url=jdbc:mysql://localhost:3306/planyourtrip
spring.datasource.username=yourusername
spring.datasource.password=yourpassword

### 3. Run Backend
Open project in IntelliJ → Run Spring Boot application.

### 4. Run Frontend
cd frontend
npm install
ng serve

---

## 👨‍💻 Author
Vishwa

---

## ⭐ Future Improvements
- Payment integration
- Email notifications
- UI improvements
- Cloud deployment