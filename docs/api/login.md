# Login

### Endpoint

http://localhost:3000/api/login

### Request

> Type: POST

```json
{
  "email": "email@provider.com",
  "pass": "password"
}
```

### Response

```json
{
  "status": "success",
  "token": "long-jwt-token" // Use for authentication
}
```

> jwt-token contains name and email address of the user

> Store in Cookie with name "jwt-token"

> Cookie expiration: 7 Days

```tsx
import Cookies from "js-cookie";

// Set Token
Cookies.set("jwt-token", "long-jwt-token", { expires: 7 });

// Get Token
const token = Cookies.get("jwt-token");
```

### Error Handling

```json
{
  "status": "error",
  "error": "Err message"
}
```
