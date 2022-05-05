# Store Locator

> Node/Express/Mongo API with GeoJSON location field for store locations. Simple vanilla JS frontend using the Mapquest Library

## Quick Start

Add your MONGO_URI to the "config/config.env" file.

```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm run dev (nodemon)
or
npm start

# Routes
GET    /api/v1/location # Get location

POST   /api/v1/location # Add location
body {
    "deviceId": "123",
    "location": {
        "type": "Point",
        "coordinates": [
            24.917755,
            67.0971768
        ]
    }
}
```
