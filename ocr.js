const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const { createWorker } = require('tesseract.js');
const worker = new createWorker();

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, res, cb) => {
    cb(null, req.file);
  }
});

const upload = multer({storage}).single('avatar');
app.set('view engine', "ejs");

// app.get('/upload', (req, res) => {

// })

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));