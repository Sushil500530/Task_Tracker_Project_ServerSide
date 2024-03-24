const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors({
    origin: [
      "https://sushil-portfolio.surge.sh",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  }));
  app.use(express.json());














  app.get('/', (req, res) => {
    res.send("Server is Running Now.....")
  })
  app.listen(port, () => {
    console.log(`Server Running on port: ${port}`);
  })