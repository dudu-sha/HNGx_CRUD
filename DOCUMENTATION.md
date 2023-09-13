# API Endponits
This Endpoint contains four operations , below is listed the endpoint, the method , the body required and sample request and responses.
## Fetch list of persons stored in DB
   Method - GET
   EndPoint - 
   ```
   https://crud-api-6tmi.onrender.com/api
   ```
   Sample Response
 ```
[
    {
        "_id": "64fefed854271e6bb0dcdff7",
        "name": "Abas Dino",
        "__v": 0
    },
    {
        "_id": "64ff11cd76a26ededf0454a2",
        "name": "lidiya Abas",
        "__v": 0
    }
]
```
### 2.Fetch details of a specific person by user_id
  Method - GET
  EndPoint - 
  ```
https://crud-api-6tmi.onrender.com/api/{user_id}
```
  Sample Request -
  ```
https://crud-api-6tmi.onrender.com/api/64ff11cd76a26ededf0454a2
```
  Sample Response -
  ```
{
    "user": {
        "_id": "64ff11cd76a26ededf0454a2",
        "name": "lidiya Abas",
        "__v": 0
    }
}
```
Sample Fail Response - 
```
{
    "success": "No User Found!"
}
```
### 3. Add a new user to the DB
   Method - POST
   Endpoint -
   ```
https://crud-api-6tmi.onrender.com/api/
```
   Sample Request Body-
   ```
{
    "name":"John Doe"
}
```
   Sample Response Body -
   ```
{
    "name": "John Doe",
    "_id": "6501626a1e0e9bb02210da41",
    "__v": 0
}
```
Sample error Response -
```
{
    "Failure": "Only String is allowed"
}
```
### 4 . Update userDetail
   Method - PUT
   Endpoint - 
   ```
https://crud-api-6tmi.onrender.com/api/{user_id}
```
   Sample Request :
   ```
https://crud-api-6tmi.onrender.com/api/6501626a1e0e9bb02210da41
```
   Sample Request Body :
   ```
{
    "name":"Mary Jane"
}
```
  Sample Sucess Response - 
  ```
{
    "Success": "User Updated Successfully"
}
```
  Sample Failure Response - 
  ```
{
    "Failure": "User Update Fail"
}
```

### 5. Delete Existing User
   Method - DELETE
   Endpoint -
   ```
   https://crud-api-6tmi.onrender.com/api/{user_id}
   ```
   Sample Request -
   ```
   https://crud-api-6tmi.onrender.com/api/6501626a1e0e9bb02210da41
   ```
   Sample Success Response -
   ```
    {
    "success": "person deleted Successfully"
}
```
   Sample Failure Response -
```
{
    "Failure": "person deletion error!"
}
```
