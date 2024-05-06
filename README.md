# Book Management RESTful Service

This is a simple RESTful service built with Node.js and Express.js to manage user authentication and registration. The service allows users to register, log in, and retrieve user information.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on the book collection.
- **User Registration**: Register new users with unique email and username.
- **User Authentication**: Authenticate users with email and password.
- **MongoDB Integration**: Uses MongoDB as the database to store book information.
- **JSON Web Token (JWT)**: Generate JWT tokens for authenticated users.
- **Error Handling**: Comprehensive error handling for invalid requests.
- **Validation**: Proper validation for request payloads.
- **Password Hashing**: Securely hash passwords before storing them in the database.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/user-management-service.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and define the following variables:

```
MONGO_USER=<mongodb-userName>
MONGO_PASS=<mongodb-password>
MONGO_DB=<DB-name>
PORT=<server-port>
CRYPTO_SECRET=<qwe2345fg678bn9098cvbnjhas>
```

4. Start the server:

```bash
npm start
```

## Usage

### Registration

To register a new user, send a POST request to the `/register` endpoint with the user's email, username, and password in the request body.

**Register Endpoint**:

```
POST /users/register
```

Request Body:
```json
{
  "email": "example@example.com",
  "username": "exampleuser",
  "password": "your_password"
}
```

### Authentication

To authenticate a user and obtain an access token, send a POST request to the `/login` endpoint with the user's email and password in the request body.

**Login Endpoint**:

```
POST /users/login
```

Request Body:
```json
{
  "email": "example@example.com",
  "password": "your_password"
}
```

### Get Users

To retrieve a list of all registered users, send a GET request to the `/users` endpoint.

**Get Users Endpoint**:

```
GET /users/
```

### Books Control Endpoints

#### Get All Books

To retrieve all books in the collection, send a GET request to the `/books` endpoint.

**Get All Books Endpoint**:

```
GET /books
```

#### Get Book by ID

To retrieve a specific book by its ID, send a GET request to the `/books/:id` endpoint, where `:id` is the ID of the book.

**Get Book by ID Endpoint**:

```
GET /books/getBook:id
```

#### Add Book

To add a new book to the collection, send a POST request to the `/books` endpoint with the book details in the request body.

**Add Book Endpoint**:

```
POST /books/addBook
```

Request Body:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Genre",
  "publicationYear": 2022
}
```

#### Update Book

To update an existing book's details, send a PUT request to the `/books/:id` endpoint with the updated book details in the request body, where `:id` is the ID of the book.

**Update Book Endpoint**:

```
PUT /books/updateBook:id
```

Request Body:
```json
{
  "title": "Updated Title"
}
```

#### Delete Book

To delete a book from the collection, send a DELETE request to the `/books/:id` endpoint, where `:id` is the ID of the book to be deleted.

graph TD;
    A[Retrieve pending SMS messages] --> B[Find primary SMS gateway];
    B --> C{Any primary gateway found?};
    C -->|Yes| D[Loop through pending messages];
    C -->|No| E[Throw error: Primary SMS setup not found];
    D --> F[Send SMS message];
    F -->|Success| G[Update SMS queue and SMS setup data];
    F -->|Error| H[Update SMS queue and SMS setup data];


**Delete Book Endpoint**:

```
DELETE /books/deleteBook:id
```

### Error Handling

If any errors occur during registration or login (e.g., invalid email, duplicate username), the service will respond with an appropriate error message and status code.
