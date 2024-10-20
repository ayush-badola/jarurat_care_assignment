const mongoose = require("mongoose");

//schema for the services
const service_schema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("service",service_schema);