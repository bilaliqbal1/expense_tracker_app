const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/expensetracker',{
            useNewUrlParser : true,
            useUnifiedTopology: true,
        });      
    console.log(`mongoDb connect in `.cyan.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB;