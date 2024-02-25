
## CRUD API with Node.js
- This repository contains a simple CRUD (Create, Read, Update, Delete) API implemented using Node.js. 
- The API interacts with a PostgreSQL database to perform CRUD operations.



## <CRUD API>

This repository contains the source code for the <CRUD API> project, written in Node.js and using PostgreSQL for data storage.

## Features

Create, Read, Update, and Delete records in the database.
Secure API endpoints with appropriate access controls.
Basic logging of API operations for monitoring and debugging.

## Technologies Used

Node.js: v18.16.1 and above 
PostgreSQL: 16 and above 
Postman
Git
GITHUB CI/CD
Postman
VS Code 


### Prerequisites:

Node.js  
PostgreSQL  
Postman  
VS Code  
Git  
GITHUB 

### Installation:

### Pull the code
   
```bash
git clone https://github.com/ankit9928/Server-task.git
cd Server-task
npm install or yarn install
```

### Environment variables

Create a .env file (refer to .env.example for reference) and configure it with your database credentials, API keys, etc.
Configure Postman collections (optional) to test API endpoints.

```bash
PORT=3000
POSTGRES_URL="YOUR_POSTGRES_DB_URL"
```

### Open the project in VS Code.

Run the development server:

```bash
npm start app.js
```

<div align="center">
  <img src="/assets/start.png" />
</div>


### Endpoints:

Postman collections are provided for testing API endpoints (optional).

```bash

GET /api/records          Retrieve all records from the database.
POST /api/records         Create a new record in the database.
PUT /api/records/:id      Update an existing record in the database.
DELETE /api/records/:id   Delete a record from the database.

```

### Test your application using Postman or other testing tools.

<div align="center">
  <img src="/assets/get.png" />
</div>

<div align="center">
  <img src="/assets/put.png" />
</div>

<div align="center">
  <img src="/assets/delete.png" />
</div>


### Logging

The API includes basic logging of API operations. Logs can be found in the logs directory. 


### CI/CD


<div align="center">
  <img src="/assets/CI/CD.png" />
</div>

## EC2 instance for Hosting BACKEND 

Commands for SSH into an EC2 instance, installing Node.js, Git, PM2, and cloning a Git repository followed by starting the application with PM2:

```bash
ssh -i your-key.pem ec2-user@your-ec2-public-ip

sudo yum update -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install node

sudo yum install git -y

npm install pm2 -g

git clone https://github.com/ankit9928/Server-task.git
cd Server-task

npm install

pm2 start app.js
```

<div align="center">
  <img src="/assets/EC2.png" />
</div>

<div align="center">
  <img src="/assets/pm2.png" />
</div>

## Contributing

If you want to contribute to this project, please refer to the CONTRIBUTING.md file for guidelines and instructions.

## License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## Additional Notes:

Replace <CRUD API> and other placeholders with your project's specific information.
Add documentation specific to your project, such as API endpoints, usage examples, and deployment instructions.
Consider including screenshots or GIFs to showcase your project's functionality.
Keep the readme updated with any changes or new features.
I hope this template helps you create a comprehensive and informative readme.md file for your Node.js project!

