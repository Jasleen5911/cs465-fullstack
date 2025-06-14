const Trip = require('../models/trip');

exports.getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getTripById = async (req, res) => {
    try {
        // Fixed method name (findById), fixed 'req.params.id' capitalization and usage
        const trip = await Trip.findById(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });
        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createTrip = async (req, res) => {
    const trip = new Trip({
        name: req.body.name,
        description: req.body.description,  // Fixed typo here
        location: req.body.location,
        date: req.body.date,
    });

    try {
        const newTrip = await trip.save();
        res.status(201).json(newTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });

        trip.name = req.body.name ?? trip.name;
        trip.description = req.body.description ?? trip.description;
        trip.location = req.body.location ?? trip.location;
        trip.date = req.body.date ?? trip.date;

        const updatedTrip = await trip.save();
        res.status(200).json(updatedTrip);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) return res.status(404).json({ message: 'Trip not found' });

        await trip.remove();
        res.status(200).json({ message: 'Trip deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
