# todoListBackendMongodb

This todoList Backend API has a dependency on a MongoDB database. 

DATABASE_URL = e.g. mongodb://<user_name>:<password>@localhost:27017/<db_name>?authSource=<auth_db_name>
  is required to connect to the database the coud database to connect to todoList is  ---DATABASE_URL="mongodb+srv://todoList:2do@todolist.jhh9a.mongodb.net/test"
  using this you can connect the Mongoose database.
  The host where the server is bound to. Defaults to 0.0.0.0 (all available network interfaces) if undefined.
The server port where the server listens on. Defaults to 3000.
  
  Once you clone the project using gitclone. You have to install all the dependenices 
  Using npm install you can install all the depending liabraires.
  
 To start the application you need to use nodemon app.js 
 
 Using Postman you can get the output of the following:
 1. To Get All the Task : http://localhost:3000/taskList/tasks (get request)
 2. To Get Task by Id : http://localhost:3000/taskList/tasks/31w8d502kirbaiih (get request)
 3. To Add a Task : http://localhost:3000/taskList/tasks (post request)
 4. To Delete a Task : http://localhost:3000/taskList/tasks/31w8damfkiredbdz (delete request)
 5. To Update Task :http://localhost:3000/taskList/tasks/31w8damfkired5k8 (put request)
 
 
