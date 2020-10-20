const express = require('express')
const multer = require('multer');

const apis = require('../controller/controller');
var router = express.Router();

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './public/upload');
   },
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});
var upload = multer({ storage: storage }).single('profile_pick')


// module.exports = (app, passport) => {

    // Verify Token
    function verifyToken(req, res, next) {
        // Get auth header value
        const bearerHeader = req.headers['authorization'];
        // Check if bearer is undefined
        if(typeof bearerHeader !== 'undefined') {
          // Split at the space
          const bearer = bearerHeader.split(' ');
          // Get token from array
          const bearerToken = bearer[1];
          // Set the token
          req.token = bearerToken;
          // Next middleware
            next();
        } else {
          // Forbidden
          res.status(401).send({
            code:401,
            success: false,
            message: 'Authentication Token is not valid'
        });
        }
      }

    //  var type = upload.single('file');

        router.post('/api/login', apis.login);
        router.post('/api/signup',upload,apis.signup);
        router.post('/api/lat_long', verifyToken, apis.lat_long)
        router.post('/api/add_new_pin_point', apis.addNewPinPoint);

        

        router.get('/api/getLocations',  apis.getLocations);
router.get('/api/profile-info', verifyToken, apis.getProfileInfo);


        // router.post('/api/get_all_pin_points',apis.getAllPinPoints);
        // router.post('/api/filter_pin_points',apis.getAllFilterdPinPoints);
        // router.post('/api/add_users_circle',apis.addUsersInCircle);
        // router.post("/api/get_all_circles_users",apis.get_all_cicles_users);

        // router.post('/api/chat_box', verifyToken, apis.findOrCreate);
        // router.get('/api/chat_list', verifyToken, apis.getOldChatList);
        // router.get('/api/notification/:id', apis.getNotificationHistory);

        
        // // ======================== chat group ===========================
        // router.post('/api/chat_group_box', verifyToken, apis.join_group_find);
        // router.post('/api/chat_group_list', verifyToken, apis.group_chat_list);
        // ===============================================================
        // ====================== testing only ========================
        router.post('/api/testing', apis.testing);
        // ============================================================
    // }

    module.exports = router;