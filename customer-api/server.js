
const express = require('express');
const connectDB = require('./config/database');
const routes = require('./routes/route');
require('dotenv').config();
//enable cors
const cors=require('cors');
// Create Express app
const app = express();
app.use(cors());
app.use(
  cors({
    origin: '*'
  })
);

app.use(express.json());

const port = process.env.PORT || 3000;
// Connect to MongoDB
connectDB();

// Define routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


