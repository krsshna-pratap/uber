# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint allows users to register by providing their first name, last name, email, and password. Upon successful registration, the API returns a JWT token and the created user object.

## Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullName.firstName`: String, required, minimum 3 characters.
- `fullName.lastName`: String, required, minimum 3 characters.
- `email`: String, required, must be a valid email.
- `password`: String, required, minimum 6 characters.

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "first name must be at least 3 characters long",
        "param": "fullName.firstName",
        "location": "body"
      },
      {
        "msg": "invalid email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

### Missing Fields

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "all fields are required"
      }
    ]
  }
  ```

## Example Request

```sh
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": { "firstName": "John", "lastName": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'
```

## Example Response

### Success Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "64c0f8e2f1b2c9a5d6e8f123",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

### Validation Error Response
```json
{
  "errors": [
    {
      "msg": "first name must be at least 3 characters long",
      "param": "fullName.firstName",
      "location": "body"
    }
  ]
}
```

## Related Files

- [controllers/user.controller.js](controllers/user.controller.js)
- [routes/user.routes.js](routes/user.routes.js)
- [services/user.service.js](services/user.service.js)


## Example Response
- `user` (object):
    - `fullname` (Object).
        - `firstname` (string): user's first name(minimum 3 characters)
        - `lastname` (string): user's last name(minimum 3 charcaters)
    - `email` (string): user's email address(must be a valid email)
    - `password` (string,): user's password(minimum 6 characters)
- `token` (string): JWT Token