const mongoose = require('mongoose');
const Trip = require( './trip');
const tripsData = require('./trips.json');

const mongoURL = 'mongodb://localhost:27017/travlr';

mongoose.connect(mongoURL, {useNewUrlParser:true,useUnifiedTopology: true})
.then(async () => {
    console.log('Connected to MongoDB');

        //clear existing trips
        await Trip.deleteMany({});
        console.log('Deleted existing trips');


        //insert trips from JSON
        await Trip.insertMany(tripsData);
        console.log('Inserted trips');

        mongoose.connection.close();

})

.catch(err => {
    console.error('Error connecting to MongoDB', err);

});