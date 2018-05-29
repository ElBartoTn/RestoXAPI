'use strict';

var mongoose = require('mongoose'),
   Restaurant = mongoose.model('Restaurant');

exports.getAllRestaurants = function(req, res) {
  Restaurant.find({}, function(err, Restaurant) {
    if (err)
      res.send(err);
    res.json(Restaurant);
  });
};

exports.getRestaurantByName = function(req, res) {
    Restaurant.find({'Name': req.params.restaurantName}, function(err, Restaurant) {
    if (err)
      res.send(err);
    res.json(Restaurant);
  });
};

exports.getRestaurantById = function(req, res) {
  Restaurant.findById(req.params.restaurantId, function(err, Restaurant) {
    if (err)s
      res.send(err);
    res.json(Restaurant);
  });
};

exports.addRestaurant = function(req, res) {
  var newRestaurant = new Restaurant(req.body);
  newRestaurant.save(function(err, Restaurant) {
    if (err)
      res.send(err);
    res.json(Restaurant);
  });
};

exports.deleteRestaurant = function(req, res) {
  Restaurant.remove({
    _id: req.params.restaurantId
  }, function(err, Restaurant) {
    if (err)
      res.send(err);
    res.json({ message: 'restaurant successfully deleted' });
  });
};
