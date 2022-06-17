const location = require('../../controllers/location');
const db = require("../../config/db");
const dotenv = require('dotenv');
var colors = require('colors');

beforeAll(async () => {
    dotenv.config({ path: './config/config.env' });
    // Connect to database
    await db.connectDB();
});

afterAll(async () => {
    // Close database connection
    await db.closeDB();
});


describe('getLocation', () => {
    test('getLocation() is present', () => {
        expect(location.getLocation).toBeDefined();

    });
});

describe('addLocation', () => {
    test('addLocation() is present', () => {
        expect(location.getLocation).toBeDefined();
    });
});