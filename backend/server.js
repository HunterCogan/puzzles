const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3002;

// Connect to MongoDB
mongoose.connect('mongodb+srv://hcogan:Hunter8451@sandboxcluster.nocwxyt.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes and middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
