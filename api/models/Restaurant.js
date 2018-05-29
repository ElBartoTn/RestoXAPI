'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var RestaurantSchema = new Schema({
  _id: {
    type: ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Name: {
   type : String,
  },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);