const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"; // include DB name here

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
};

module.exports = connectToMongo;
