// seed.js
const mongoose = require('mongoose');
const Bank = require('./models/Bank'); // Adjust the path to your Bank model
require('dotenv').config(); // Load environment variables from .env file

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // Remove deprecated options
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

// Sample bank data
const bankData = [
    {
        bankName: 'State Bank of India',
        interestRates: {
            personal: 8.5,
            home: 7.0,
            auto: 9.5,
            education: 8.0,
            health: 10.5,
            gold: 7.8,
            property: 9.0,
        },
    },
    {
        bankName: 'HDFC Bank',
        interestRates: {
            personal: 8.0,
            home: 6.8,
            auto: 9.2,
            education: 7.5,
            health: 9.8,
            gold: 7.5,
            property: 8.5,
        },
    },
    {
        bankName: 'ICICI Bank',
        interestRates: {
            personal: 7.5,
            home: 7.5,
            auto: 8.8,
            education: 7.2,
            health: 9.0,
            gold: 7.7,
            property: 8.2,
        },
    },
    {
        bankName: 'Axis Bank',
        interestRates: {
            personal: 8.2,
            home: 7.2,
            auto: 9.0,
            education: 8.5,
            health: 10.0,
            gold: 7.6,
            property: 8.8,
        },
    },
    {
        bankName: 'Punjab National Bank',
        interestRates: {
            personal: 8.7,
            home: 6.5, // Lowest in home loans
            auto: 9.3,
            education: 7.9,
            health: 10.2,
            gold: 7.9,
            property: 9.2,
        },
    },
    {
        bankName: 'Bank of Baroda',
        interestRates: {
            personal: 8.8,
            home: 6.7,
            auto: 9.1,
            education: 7.8,
            health: 9.7,
            gold: 7.4,
            property: 8.7,
        },
    },
    {
        bankName: 'Kotak Mahindra Bank',
        interestRates: {
            personal: 8.4,
            home: 6.9,
            auto: 9.4,
            education: 7.3,
            health: 9.5,
            gold: 7.2,
            property: 9.1,
        },
    },
    {
        bankName: 'IndusInd Bank',
        interestRates: {
            personal: 8.3,
            home: 7.1,
            auto: 9.6,
            education: 7.4,
            health: 9.3,
            gold: 7.0, // Lowest in gold loans
            property: 8.6,
        },
    },
    {
        bankName: 'Yes Bank',
        interestRates: {
            personal: 8.6,
            home: 7.3,
            auto: 9.4,
            education: 7.6,
            health: 10.4,
            gold: 7.9,
            property: 9.3,
        },
    },
    {
        bankName: 'IDFC First Bank',
        interestRates: {
            personal: 7.9,
            home: 6.6,
            auto: 9.7,
            education: 8.1,
            health: 10.1,
            gold: 7.1,
            property: 8.4,
        },
    },
    {
        bankName: 'Bank of India',
        interestRates: {
            personal: 8.5,
            home: 6.5, // Lowest in home loans
            auto: 9.0,
            education: 7.7,
            health: 9.8,
            gold: 7.3,
            property: 9.5,
        },
    },
    {
        bankName: 'Central Bank of India',
        interestRates: {
            personal: 8.6,
            home: 7.2,
            auto: 9.1,
            education: 7.5,
            health: 10.0,
            gold: 7.6,
            property: 8.9,
        },
    },
    {
        bankName: 'Indian Bank',
        interestRates: {
            personal: 8.7,
            home: 7.4,
            auto: 9.3,
            education: 7.8,
            health: 9.9,
            gold: 7.8,
            property: 8.5,
        },
    },
    {
        bankName: 'Syndicate Bank',
        interestRates: {
            personal: 8.4,
            home: 6.9, // Lowest in home loans
            auto: 9.5,
            education: 7.7,
            health: 10.3,
            gold: 7.4,
            property: 8.6,
        },
    },
    {
        bankName: 'UCO Bank',
        interestRates: {
            personal: 8.5,
            home: 7.0,
            auto: 9.8,
            education: 7.9,
            health: 10.5,
            gold: 7.7,
            property: 8.8,
        },
    },
    {
        bankName: 'Union Bank of India',
        interestRates: {
            personal: 8.1,
            home: 6.8, // Lowest in home loans
            auto: 9.4,
            education: 7.5,
            health: 9.6,
            gold: 7.2,
            property: 9.1,
        },
    },
    {
        bankName: 'Himachal Pradesh Gramin Bank',
        interestRates: {
            personal: 8.3,
            home: 6.4, // Lowest in home loans
            auto: 9.6,
            education: 7.8,
            health: 10.0,
            gold: 7.5,
            property: 8.5,
        },
    },
    {
        bankName: 'Nainital Bank',
        interestRates: {
            personal: 8.2,
            home: 6.7,
            auto: 9.3,
            education: 7.4,
            health: 9.8,
            gold: 7.9,
            property: 8.9,
        },
    },
    {
        bankName: 'Rajasthan Marudhara Gramin Bank',
        interestRates: {
            personal: 8.1,
            home: 6.5, // Lowest in home loans
            auto: 9.1,
            education: 7.6,
            health: 10.1,
            gold: 7.4,
            property: 9.0,
        },
    },
    {
        bankName: 'Madhya Pradesh Gramin Bank',
        interestRates: {
            personal: 8.5,
            home: 6.8,
            auto: 9.2,
            education: 7.5,
            health: 9.7,
            gold: 7.5,
            property: 8.6,
        },
    },
    {
        bankName: 'Chhattisgarh Rajya Gramin Bank',
        interestRates: {
            personal: 8.2,
            home: 6.7,
            auto: 9.4,
            education: 7.3,
            health: 9.9,
            gold: 7.6,
            property: 8.8,
        },
    },
];



// Function to seed data
const seedBanks = async () => {
    await connectDB(); // Connect to the database
    await Bank.deleteMany({}); // Clear existing entries
    const result = await Bank.insertMany(bankData); // Insert new entries
    console.log(`${result.length} banks added`);
    mongoose.connection.close(); // Close the connection
};

// Run the seed function
seedBanks();
