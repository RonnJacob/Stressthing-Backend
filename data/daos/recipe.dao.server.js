const recipeModel = require('../models/recipe.model.server');


createRecipe = recipe =>
    recipeModel.create(recipe);

findAllRecipe = () => recipeModel.find();

findRecipeById = recipeId => recipeModel.findById(recipeId);

updateRecipe = (userId, updatedRecipe) =>
    recipeModel.update({_id: userId}, {$set: updatedRecipe});

deleteRecipe = (recipeId) => recipeModel.remove({_id: recipeId});

//doubtful
findRecipesForIngredients = (givenIngredients) => recipeModel.find( { ingredients: { $all: givenIngredients } } );

module.exports = {
    createRecipe, findAllRecipe, findRecipeById, updateRecipe,deleteRecipe
};
