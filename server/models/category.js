const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: "This is Field is Required",
  },
  image: {
    type: String,
    required: "This is Field is Required",
  },
  category:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("Category", categorySchema);
