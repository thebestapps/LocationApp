var mongoose = require('mongoose');


var userSchemaCircles = mongoose.Schema({
    circles_user_id: String,
    users_type: String,
    user_id:String
}, {
    timestamps: true
});



//create the model for users and expose it to our app
module.exports = mongoose.model('usercircles', userSchemaCircles);
