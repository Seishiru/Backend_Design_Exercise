Backend Design Exercise: Structuring a Node.js Application

Description:
You will design and implement a basic backend application using Node.js and Express.js. The application will have three key functionalities:
1. User Registration
2. User Login
3. Profile Management

You will use mock models (JSON files or an in-memory database) to simulate a database. Middleware will be applied to manage authentication, rate limiting and logging.


Requirements:

1. Project Structure:
   - Follow a well-organized structure that separates concerns:
     - `app.js` for app initialization
     - `routes/` for route handling
     - `controllers/` for business logic
     - `models/` for mock database models
     - `middleware/` for custom middleware

2. Mock Models:
   - Create mock models using JSON or an in-memory array to simulate database behavior.
   - Define basic user information (e.g., `id`, `username`, `password`, `email`).

3. Routes and Controllers:
   - Implement the following routes:
     - POST /register: For new user registration.
     - POST /login: For user login and token generation.
     - GET /profile: To retrieve user profile details (requires authentication).

4. Middleware:
   - Authentication Middleware: Apply middleware to protect routes (e.g., profile route) by checking if the user is logged in (simulated via token).
   - Logging Middleware: Log details of incoming requests such as method type, route, and timestamp.

5. Code Readability:
   - Use proper naming conventions for variables and functions.
   - Follow the DRY (Don't Repeat Yourself) principle by reusing common code.
   - Add comments to explain logic where necessary.

Guidelines:

1. Step 1: Setup the Project
   - Initialize the project with `npm init` and install the required packages: 
     bash
     npm install express body-parser
     

2. Step 2: Structure Your Project
   Create the following directories and files:
   
   project/
   ├── app.js
   ├── routes/
   │   └── user.js
   ├── controllers/
   │   └── userController.js
   ├── models/
   │   └── userModel.js
   ├── middleware/
   │   └── authMiddleware.js
   └── data/
       └── users.json (optional)
   

Submission:
Submit a ZIP file containing your project folder. Ensure all files are properly named and your code is well-commented for readability. This also serves as your midterms output, which corresponds with your midterm grade. The deadline for submitting will be Sunday, 11:59PM. This is an individual project. Reply your github repo on the message that this attachment url will belong to. Good luck.


Bonus:
1. Use Joi for input validation in the registration and login routes.
2. Implement token-based authentication using JWT instead of the mock token.


