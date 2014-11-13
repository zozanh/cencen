var express = require("express");
var routers = express.Router();

routers.post('/login', passport.authenticate( 'local',
  {successRedirect: '/', failureRedirect: '/login'})
);
