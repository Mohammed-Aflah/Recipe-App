const express = require("express");
const router = express.Router();
const controller = require("../controllers/allControl");

router.get("/", controller.homePage);
router.get("/categories", controller.CategoryPage);
router.get("/recipe/:id", controller.RecipePage);
router.get("/categories/:name", controller.CategoryWithName);
router.get("/explore", controller.ExploreLatest);
router.get('/random',controller.ExploreRandom)
router.get('/submit-recipe',controller.SubmitRecipe)
router.post('/submit-recipe',controller.RecipeSubmitOnPost)

module.exports = router;
