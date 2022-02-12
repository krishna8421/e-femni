# Add Products

### Endpoint

http://localhost:3000/api/addProducts

### Request

> Type: POST

> See the [Env](./env.md) Api Docs to get the admin details.

#### For Adding Single Product

```json
{
  "username": "admin_username",
  "password": "admin_password",
  "singleData": true,
  "data": {
    "imgUrl": "",
    "productName": "",
    "price": 0
  }
}
```

#### For Adding Multiple Products

```json
{
  "username": "admin_username",
  "password": "admin_password",
  "singleData": false,
  "data": [
    {
      "imgUrl": "",
      "productName": "",
      "price": 0
    },
    {
      "imgUrl": "",
      "productName": "",
      "price": 0
    },
    ...
  ]
}
```

### Response

```json
{
  "status": "success",
  "message": "Products Added Successfully"
}
```

### Error Handling

```json
{
  "status": "error",
  "error": "Err message"
}
```
