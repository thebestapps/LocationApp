var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
const { fileLoader } = require('ejs');

var userSchema = mongoose.Schema({
  
    lat: String,
    long: String,
    type: String,
message: String,
// Pictures:{
//     img:String,
// },
locationName: String,
location_type: String,
State: String,
Country: String,
City: String,
Description:String,
}, {
    timestamps: true
});


//create the model for users and expose it to our app
module.exports = mongoose.model('map_lat_long', userSchema);



