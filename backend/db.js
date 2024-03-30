const mongoose = require('mongoose')

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("Error connecting to MongoDB")
    }
}

module.exports = { dbConnect }