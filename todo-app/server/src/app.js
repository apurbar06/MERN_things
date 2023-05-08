import express, { Express } from "express"
// import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.bcmffzk.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log("error occured: ", error.message)
    throw error
  })
