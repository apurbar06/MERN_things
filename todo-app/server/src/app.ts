import express, { Express } from "express"
// import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(cors())
app.use(todoRoutes)

const mongoose = require('mongoose')
const uri: string = 'mongodb+srv://apurba:mongodb@cluster0.bcmffzk.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error:Error) => {
    console.log("error occured: ", error.message)
    throw error
  })
