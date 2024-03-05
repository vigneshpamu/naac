import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import criteria3 from './routes/criteria3.router.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import cors from 'cors'
import Razorpay from 'razorpay'
import User from './models/user.model.js'
import morgan from 'morgan'
import crypto from 'crypto'
import {
  ThreeOneOne,
  ThreeOneThree,
  ThreeOneTwo,
  ThreeThreeOne,
  ThreeTwoOne,
  ThreeTwoTwo,
} from './models/three.model.js'
import dummyData from './data/dummyData.js'
const razorpay = new Razorpay({
  key_id: 'rzp_test_yoQ3nmI7J3LyOK',
  key_secret: 'V60RDhmjFRpwjNjZp7aOGaDo',
})
dotenv.config()
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

// const __dirname = path.resolve()

const app = express()
app.use(cors())
app.use(express.json())
// app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.listen(3003, () => {
  console.log('Server is Listening to Port 3003')
})

async function insertDummyData() {
  try {
    await ThreeThreeOne.deleteMany({}) // Clear existing data

    await ThreeThreeOne.create(dummyData) // Insert dummy data

    console.log('Dummy data inserted successfully')
  } catch (error) {
    console.error('Error inserting dummy data:', error)
  } finally {
    mongoose.disconnect() // Close the MongoDB connection
  }
}

// insertDummyData()
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/criteria-3', criteria3)

// app.use(express.static(path.join(__dirname, '/client/dist')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// })

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500
//   const message = err.message || 'Internal Server Error'

//   console.log(message)

//   return res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   })
// })
