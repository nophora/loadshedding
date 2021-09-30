const mongoose = require('mongoose');



const Country = mongoose.Schema;

const countrySchema = new Country({
    province: String,
    towns:[Object],
});


const country = mongoose.model('country', countrySchema);



module.exports = country;
