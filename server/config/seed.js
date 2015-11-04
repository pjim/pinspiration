/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');



User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test',
    pins:[{
      title:'Test Pin',
      link:'http://lorempixel.com/400/200'
    },
    {
      title:'Another Test Pin',
      link:'http://lorempixel.com/600/200'

    },
    {
      title:'test 3',
      link:'http://lorempixel.com/400/200'
    }

   ]
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
