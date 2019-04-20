const recipeDao = require('../daos/recipe.dao.server')
module.exports = app => {
    addOwnedRecipe = (req, res) => {
        recipeDao.createRecipe(req.body).then(recipe => res.send(recipe));
    }

    findOwnedRecipes = (req, res) => {
        recipeDao.findRecipesOwnedByUser(req.params['userId']).then(recipes => res.send(recipes));
    }

    findRecipeById = (req, res) => {
        recipeDao.findRecipeById(req.params['recipeId']).then(recipe => res.send(recipe));
    }

    updateOwnedRecipe = (req, res) => {
        recipeDao.updateRecipe(req.params['recipeId'], req.body).then(res.send('Operation completed with status code:' + res.statusCode));
    }

    deleteOwnedRecipe = (req, res) => {
        recipeDao.deleteRecipe(req.params['recipeId'], req.body).then(res.send('Recipe with ID ' + req.params['recipeId'] + ' deleted from records with status code:' + res.statusCode));
    }

    findAllRecipes = (req, res) => {
        recipeDao.findAllRecipe().then(recipes => res.send(recipes));
    }

    app.put('/api/recipes/:recipeId', updateOwnedRecipe)
    app.delete('/api/recipes/:recipeId', deleteOwnedRecipe)
    app.get('/api/recipes/:recipeId', findRecipeById)
    app.get('/api/users/:userId/recipes', findOwnedRecipes)
    app.post('/api/recipes', addOwnedRecipe)
    app.get('/api/recipes', findAllRecipes)
}
