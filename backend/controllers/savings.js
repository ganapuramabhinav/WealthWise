// controllers/savings.js
const SavingModel = require("../models/SavingModel");

exports.addSavingGoal = async (req, res) => {
    const { title, targetAmount, description, date,category } = req.body;

    const savingGoal = new SavingModel({
        title,
        targetAmount,
        description,
        date,
        category,
    });

    try {
        // Validations
        if (!title || !targetAmount || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (targetAmount <= 0 || typeof targetAmount !== 'number') {
            return res.status(400).json({ message: "Target Amount must be positive" });
        }

        await savingGoal.save();
        res.status(201).json({ message: "Saving Goal Added", savingGoal });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getSavingGoals = async (req, res) => {
    try {
        const savingGoals = await SavingModel.find().sort({ createdAt: -1 });
        res.status(200).json(savingGoals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteSavingGoal = async (req, res) => {
    const { id } = req.params;
    try {
        await SavingModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Saving Goal Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
};
