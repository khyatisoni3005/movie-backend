const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

mongoose.connect("mongodb+srv://khyati:soni123@cluster0.98hfdnl.mongodb.net/movie")

app.use(cors())
app.use(express.json())


app.use("/api/movie", require("./routes/movie"))
app.use("/api/product", require("./routes/movie"))
app.use("/api/admin", require("./routes/admin"))

app.listen(process.env.PORT || 5000, () => {
    console.log("SERVER STARTED");
})