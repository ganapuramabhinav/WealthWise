// controllers/BankController.js
const Bank = require('../models/Bank');

exports.getLeastInterestBank = async (req, res) => {
    const { loanType, loanAmount } = req.body;

    try {
        // Find the bank with the lowest interest rate for the specified loan type
        const banks = await Bank.find({});
        let lowestBank = null;

        banks.forEach(bank => {
            const interestRate = bank.interestRates[loanType];
            if (lowestBank === null || interestRate < lowestBank.interestRate) {
                lowestBank = {
                    bankName: bank.bankName,
                    interestRate: interestRate,
                    loanType: loanType,
                    loanAmount: loanAmount,
                    totalAmount: loanAmount * (1 + interestRate / 100), // Example calculation
                };
            }
        });

        if (lowestBank) {
            return res.status(200).json(lowestBank);
        } else {
            return res.status(404).json({ message: "No banks available" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};
