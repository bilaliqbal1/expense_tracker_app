const Transaction = require('../models/Transactions');

//@desc     Get all transactions 
//@route    Get /api/v1/transactions
//@access   Public
exports.getTransactions = async (req, res, next) =>{
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

//@desc     Add transactions 
//@route    POST /api/v1/transactions
//@access   Public
exports.addTransactions = async (req, res, next) =>{
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success: true,
            date: transaction
        });
    } catch (error) {
        if(error.name === 'ValidationError'){
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        }else{
            return res.status(500).json({
                success: false,
                error: 'not added'
            })
        }
    }
    
}
//@desc     DELETE transactions 
//@route    POST /api/v1/transactions/:id
//@access   Public
exports.deleteTransactions = async (req, res, next) =>{
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(transaction){
            transaction.remove();
            return res.status(200).json({
                success: true,
                data: []
            });
        }else{
            return res.status(404).json({
                success: false,
                error: 'No Transaction found'
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}