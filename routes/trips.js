const express = require ('express');
const router = express.Router();
const Trip = require('../app_server/models/trip');


router.get('/', async (req, res) => {

    try {
        const trips = await Trip.find({});
        res.json(trips);
    } catch (err) {
        console.error("ERROR fetching trips:", err);
        res.status(500).json({error:'Failed to fetch trips'});


    }
    });
        module.exports = router;