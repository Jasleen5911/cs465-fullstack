const express = require('express');
const router = express.Router();
const ctrlTravel = require('../controllers/travel');

// route to display the travel page with trips

router.get('/travel', ctrlTravel.travelList);

module.exports = router;

