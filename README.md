# Public API to Retrieve Basic Information
This is an API endpoint that retrieves basic information. It is the first task in the back-end track for HNG12 as a [Nodejs Developer](https://hng.tech/hire/nodejs-developers).

## Tech Stack
- Javascript
- Node
- Express

## How to Install and Run The App
1. Clone the project
```
git clone https://github.com/MuthoniMN/hng12_b1
```
2. Install the required packages
```
cd hng12_b1/ && npm install
```
3. Run the application
```
npm run start
```

## API Documentation
Request: `GET`

Endpoint: `/`

Response: `application/json`
```
{
    "email": "test@gmail.com",
    "current_datetime": "",
    "github_url": "https://github.com/MuthoniMN/hng12_b1"
}
```
