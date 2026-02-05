📖 Project Description

This project is a backend REST API built using Node.js and Express.js for managing complaints or issues.
It allows users to create, view, resolve, and delete complaints following RESTful principles.

The main objective of this project is to understand Express routing, middleware, controllers, and clean project architecture.
No database is used; instead, all complaint data is stored in memory using JavaScript arrays, as per the assignment requirements.

The project follows a proper folder structure that separates routes, controllers, and middleware to keep the code clean, readable, and easy to maintain.

🚀 Features
Create a new complaint
Fetch all complaints
Resolve a complaint
Delete a complaint
Logger middleware to track requests
Auth middleware to protect sensitive routes
Clean and modular folder structure

🛠 Technologies Used
Node.js
Express.js
JavaScript (ES Modules)
Postman (for API testing)

📂 Folder Structure
complaint-api/
│
├── server.js
├── app.js
├── package.json
│
├── routes/
│   └── complaint.routes.js
│
├── controllers/
│   └── complaint.controller.js
│
├── middleware/
│   ├── logger.middleware.js
│   └── auth.middleware.js

📌 API Endpoints
Method	Endpoint	Description
GET	/complaints	Fetch all complaints
POST	/complaints	Create a new complaint
PUT	/complaints/:id/resolve	Resolve a complaint
DELETE	/complaints/:id	Delete a complaint

▶ How to Run the Project
npm install
npm start


Server will start on:
http://localhost:3000

🧪 Testing
The API endpoints were tested using Postman by sending GET, POST, PUT, and DELETE requests.

📝 Notes
This project uses in-memory storage, so data will be lost when the server restarts.
The project is built for learning purposes and academic evaluation.

👤 Author
Om
