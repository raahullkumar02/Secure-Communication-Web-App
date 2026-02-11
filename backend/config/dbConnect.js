const mongoose = require("mongoose");

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDb Connected Successfully");
    } catch (error) {
        console.error("error connecting Database",error.message);
        process.exit(1);        
    }
}

module.exports = connectDb;