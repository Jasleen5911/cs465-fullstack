const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  // your schema fields...
});

module.exports = mongoose.models.Trip || mongoose.model('Trip', tripSchema);
