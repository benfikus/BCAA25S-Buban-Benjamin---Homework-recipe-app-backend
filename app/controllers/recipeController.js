const recipes = [];

exports.create = (req, res) => {
  const recipe = {
    id: "recipe" + (recipes.length + 1),
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  recipes.push(recipe);
  res.json(recipe);
};

exports.list = (req, res) => {
  res.json({ itemList: recipes });
};

exports.get = (req, res) => {
  const recipe = recipes.find(r => r.id === req.body.id);
  if (!recipe) return res.status(404).json({ error: "Recipe not found" });
  res.json(recipe);
};

exports.update = (req, res) => {
  const index = recipes.findIndex(r => r.id === req.body.id);
  if (index === -1) return res.status(404).json({ error: "Recipe not found" });
  recipes[index] = {
    ...recipes[index],
    ...req.body,
    updatedAt: new Date()
  };
  res.json(recipes[index]);
};

exports.remove = (req, res) => {
  const index = recipes.findIndex(r => r.id === req.body.id);
  if (index === -1) return res.status(404).json({ error: "Recipe not found" });
  recipes.splice(index, 1);
  res.json({});
};