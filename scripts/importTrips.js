const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Trip = require('../app_server/models/trip');

const dbURI = 'mongodb://127.0.0.1/travlr';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');

  const filePath = path.join(__dirname, 'trips.json');
  const tripsData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Ensure perPerson is a number
  tripsData.forEach(trip => {
    trip.perPerson = parseFloat(trip.perPerson);
  });

  await Trip.insertMany(tripsData);
  console.log('Trips imported successfully');
  mongoose.connection.close();
})
.catch(err => {
  console.error('Failed to import trips:', err);
  mongoose.connection.close();
});
