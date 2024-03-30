const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const { dbConnect } = require("./db")
const userRouter = require("./routes/user")
dotenv.config()

dbConnect()

const app = express()


// /user/login /user/signup /user/logout
// /expense/add/ expense/delete /expense/update

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
