const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongodb://localhost:27017/
        await mongoose.connect('mongodb://localhost:27017/internshipwebdev');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
};

module.exports = connectDB;