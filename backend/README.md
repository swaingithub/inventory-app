# Inventory App Backend

## Overview
The Inventory App is a MERN stack application that allows users to manage inventory items. This README provides instructions for setting up and running the backend server.

## Prerequisites
- Node.js (version 14 or higher)
- MongoDB (version 4 or higher)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd inventory-app/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Configuration

1. Set up your MongoDB database. You can use a local MongoDB instance or a cloud service like MongoDB Atlas.
2. Update the database connection settings in `src/config/db.js`.

## Running the Application

To start the server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- **GET /api/items**: Retrieve all inventory items.
- **POST /api/items**: Add a new inventory item.
- **PUT /api/items/:id**: Update an existing inventory item.
- **DELETE /api/items/:id**: Delete an inventory item.

## Testing

To run tests, use:
```
npm test
```

## License

This project is licensed under the MIT License.