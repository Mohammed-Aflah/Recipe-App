const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

require("dotenv").config();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.use(cookieParser('Cooking Blog Secure'))
app.use(session({
    secret:'CookingBlogSession',
    saveUninitialized:true,
    resave:true
}))
app.use(flash())
app.use(fileUpload())

app.set("view engine", "ejs");
app.set("layout", "./layouts/main");


const routes = require("./server/routes/allRoutes.js");
app.use("/", routes);
app.listen(port, () => console.log(`http://localhost:${port}/`));
