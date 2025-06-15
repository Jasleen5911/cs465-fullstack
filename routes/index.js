const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripsController');

//get home page
router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});

});

router.get('/api/trips', tripController.getAllTrips);
router.get('/api/trips/:id', tripController.getTripById);
router.post('/api/trips', tripController.createTrip);
router.put('/api/trips/:id', tripController.updateTrip);
router.delete('/api/trips/:id', tripController.deleteTrip);
router.put('/api/trips/code/:code', tripController.updateTripByCode);

module.exports = router;