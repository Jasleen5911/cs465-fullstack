const fs = require ('fs');
const path = require('path');

module.exports.travelList = function(req, res) {
    //path to trips.json file

    const dataPath = path.join(__dirname, '../../data/trips.json');
    const trips = JSON.parse(fs.readFileSync(dataPath, 'utf8'));


    //render the travel page with trips data

    res.render('travel', {
        title: 'Travel Getaways',
        trips: trips

    });

    };
    