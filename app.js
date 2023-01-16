require("express-async-errors")
const express = require("express");
require("dotenv").config()
require("./src/db/dbConnection")
const app = express()
const port = process.env.PORT || 6001 
const router = require("./src/routers")
const errorHandlerMiddleware = require("./src/middlewares/errorHandler")

// Middlewares
app.use(express.json())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({limit : "50mb" , extended: true , parameterLimit: 50000}))



app.use("/api" , router)


app.get("/" , (req , res) => {
    res.json({
        message : "Hoş Geldiniz"
    })
})


//Hatta yakalama 
app.use(errorHandlerMiddleware)

app.listen(port , () => {
    console.log(`server ${port} portundan çalışıyor ...`)
})