# API Users

## Overview

API Users is a Node.js API that provides functionality for managing user information. It utilizes Express for the server, MySQL for the database, and Swagger for documentation.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
  - [Swagger](#swagger)
  - [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- Node.js
- MySQL
- Express
- dotenv
- swagger-jsdoc
- swagger-ui-express

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vitoriavicentin/api-users.git
    cd api-users
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the database:**

  ### 1. Start XAMPP:
  
  Make sure that XAMPP is installed and running. This usually involves starting the Apache and MySQL services in the XAMPP control panel.
  
  ### 2. Access PHPMyAdmin:
  
  Open your browser and go to [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/). This will open the PHPMyAdmin web interface.
  
  ### 3. Create a database:
  
  - Click on "Databases" at the top.
  - Under "Create database," enter a name for your database (e.g., "mydatabase") and choose the desired collation (usually, `utf8_general_ci`).
  - Click "Create" to create the database.
  
  ### 4. Select the newly created database:
  
  - On the left side, click on the name of the database you just created.
  
  ### 5. Create the "users" table:
  
  - Click on "SQL" in the top navigation bar.
  
  ```sql
  -- Create the "users" table
  CREATE TABLE users (
      users_email VARCHAR(255) NOT NULL,
      users_name VARCHAR(255) NOT NULL,
      users_password VARCHAR(255) NOT NULL,
      PRIMARY KEY (users_email)
  );
 ```


4. **Start the server:**

    ```bash
    npm start
    ```

Your API should now be running at `http://localhost:3000` or another specified port.

## API Documentation

### Swagger

Your API is documented using Swagger. Access the Swagger documentation at: http://localhost:3000/api-docs


### Endpoints

#### `GET /api/users`

Retrieve a list of users.

#### `POST /api/users`

Add a new user to the database.

- **Request Body:**
  - `name` (string): The user's name.
  - `email` (string): The user's email.
  - `password` (string): The user's password.

- **Example Request:**

    ```bash
    curl --location --request POST 'http://localhost:3000/api/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "securepassword"
    }'
    ```

- **Example Response:**

    ```json
    {
      "message": "User added successfully",
      "user": {
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    }
    ```

## Contributing

Explain how others can contribute to your project.

## License

This project is licensed under the [Your License] - see the [LICENSE.md](LICENSE.md) file for details.
