const model = require("../models/config");
const category = require("../models/category");
const Recipe = require("../models/Recipe");
module.exports = {
  homePage: async (req, res) => {
    try {
      const limitNum = 5;
      const categories = await category.find({}).limit(limitNum);
      const latest = await Recipe.find({}).limit(limitNum);
      const American = await Recipe.find({ category: "American" }).limit(
        limitNum
      );
      const Chinese = await Recipe.find({ category: "Chinese" }).limit(
        limitNum
      );
      const Thai = await Recipe.find({ category: "Thai" }).limit(limitNum);
      const indian = await Recipe.find({ category: "indian" }).limit(limitNum);
      const Arabic = await Recipe.find({ category: "Arabic" }).limit(limitNum);
      const Mexican = await Recipe.find({ category: "Mexican" }).limit(
        limitNum
      );
      //   const food={latest}
      res.render("index", {
        categories,
        latest,
        Chinese,
        Thai,
        indian,
        Arabic,
        Mexican,
        American,
        title: "Home",
      });
    } catch (err) {
      console.log(err, "Error FInd");
      res.status(500).send({ message: error.message || "Error OCcured" });
    }
  },
  CategoryPage: async (req, res) => {
    try {
      const limitNum = 20;
      const categories = await category.find({}).limit(limitNum);
      res.render("categories", { categories, title: "All Categories" });
    } catch (err) {
      console.log(err, "Error FInd");
      res.status(500).send({ message: error.message || "Error OCcured" });
    }
  },
  RecipePage: async (req, res) => {
    try {
      const recipeId = req.params.id;
      const recipies = await Recipe.findById(recipeId);
      res.render("recipe", { recipies, title: "Recipies" });
    } catch (err) {
      console.log("Error in Recipe Page", err);
    }
  },
  CategoryWithName: async (req, res) => {
    try {
      const CategoryName = req.params.name;
      const eachCate = await Recipe.find({ category: CategoryName }).limit(5);
      res.render("eachCategory", {
        eachCate,
        CategoryName,
        title: `${CategoryName}Category`,
      });
    } catch (err) {
      console.log("Error in Recipe eachCategory Page", err);
    }
  },
  // Search: async (req, res) => {
  //   try {
  //     console.log(req.body.search);
  //     const searchItem = req.body.search;
  //     let recipe = await Recipe.find({
  //       $text: { $search: searchItem, $diacriticSensitive: true },
  //     });

  //     res.render('serch',{title:'Search'})
  //   } catch (err) {
  //     console.log("Error Occured on Search ->", err);
  //   }
  // },
  ExploreLatest: async (req, res) => {
    const latest = await Recipe.find({}).sort({ _id: -1 }).limit(20);
    res.render("Latest", { title: "Explore", latest });
  },
  ExploreRandom: async (req, res) => {
    const count = await Recipe.find().countDocuments();
    const randomitem = Math.floor(Math.random() * count);
    const result = await Recipe.findOne().skip(randomitem).exec();
    res.render("random", { title: "Show Random", result });
  },
  SubmitRecipe: (req, res) => {
    const infoErrorsObj = req.flash("infoErrors");
    const infoSubmitObj = req.flash("infoSubmit");
    res.render("submit-recipe", {
      title: "Submit Recipe",
      infoErrorsObj,
      infoSubmitObj,
    });
  },
  RecipeSubmitOnPost: async (req, res) => {
    try {
      console.log(req.body, "body");
      console.log(req.files, "file");
      let {name , description , ingredints ,category } =req.body;
      const newRecipe = new Recipe({
        name: "New Cake",
        description: 
        email ,
        ingredints,
        catetegory,
        image:req.files
      });
      await newRecipe.save();

      req.flash("infoSubmit", "Recipe has been added");
      res.redirect("/submit-recipe");
    } catch (err) {
      req.flash("infoErrors", err);
      res.redirect("/submit-recipe");
    }
  },
};
