// models/Bank.js
const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true, // Bank name is required
    },
    interestRates: {
        personal: { type: Number, required: true },
        home: { type: Number, required: true },
        auto: { type: Number, required: true },
        education: { type: Number, required: true },
        health: { type: Number, required: true },
        gold: { type: Number, required: true },
        property: { type: Number, required: true },
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set to the current date when created
    },
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
