var admin = require("firebase-admin");
const user = require("../models/user.model");
const method = {}
const serviceAccount = require("./serviceAccountKey.json");
const common = require("./functions");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mapchat-cbc40.firebaseio.com"
});

method.sendNotification = (userId, msg_id, msg) =>{
    var payload = {
        notification: {
            title: msg.title,
            body: msg.body
        }
    }
    var options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
    }
    user.findById(userId, 'device_token device_os', function(err, data){
        if(err){
            console.log(err);
        } else if(data){
            console.log(data);
            if(data.device_token){
                admin.messaging().sendToDevice(data.device_token, payload, options)
                .then(function(response){
                    if(data.device_os){
                        admin.messaging().sendToDevice(data.device_os, payload, options)
                    }
                    console.log("Successfully send message: ", response);
                    if(data && response.successCount){
                        console.log(data);
                        found = {
                          status: '9999',
                          message: msg.body,
                          route: '',
                          type: msg.title,
                          actions: '',
                        }
                        common.AddPushNotificationId(data.id, found);
                      }

                })
                .catch(function(error){
                    console.log("Error sending message: ", error);
                });
            } else {
                console.log("device_token is not available");
            }
        }
    });
}

module.exports = method;