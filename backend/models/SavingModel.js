// models/SavingModel.js
const mongoose = require('mongoose');

const SavingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    targetAmount: {
        type: Number,
        required: true,
    },
    savedAmount: {
        type: Number,
        default: 0, // Default to 0 if not specified
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Saving', SavingSchema);
