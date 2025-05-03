const express = require("express");
const bodyParser = require("body-parser");

const recipeRoutes = require("./routes/recipe");

const app = express();
app.use(bodyParser.json());

app.use("/recipe", recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});