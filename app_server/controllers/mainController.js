// File: app_server/controllers/mainController.js

const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.render('index'); // Render the 'index.hbs' view when the root is accessed
});

module.exports = router;
