const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: "This is Field is Required",
  },
  description: {
    type: String,
    required: "This is Field is Required",
  },
  email: {
    type: String,
    required: "This is Field is Required",
  },
  ingrediants: {
    type: Array,
    required: "This is Field is Required",
  },
  category: {
    type: String,
    enum: [
      "Thai",
      "American",
      "Chinese",
      "indian",
      "Arabic",
      "Turkish",
      "Mexican",
    ],
    required: "This is Field is Required",
  },
  image: {
    type: String,
    require: true,
  },
});

recipeSchema.index({ name: "text", description: "text" });
// wild card indexing
// recipeSchema.index({"$**":"text"});

module.exports = mongoose.model("Recipe", recipeSchema);
