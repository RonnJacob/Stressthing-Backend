const recipeModel = require('../models/recipe.model.server');


createRecipe = recipe =>
    recipeModel.create(recipe);

findAllRecipe = () => recipeModel.find();

findRecipeById = recipeId => recipeModel.findById(recipeId);

updateRecipe = (recipeId, updatedRecipe) =>
    recipeModel.update({_id: recipeId}, {
        $set:
            {
                name: updatedRecipe.name,
                steps: updatedRecipe.steps,
                ingredients: updatedRecipe.ingredients,
                image: updatedRecipe.image
            }
    });

deleteRecipe = (recipeId) => recipeModel.remove({_id: recipeId});

findRecipesOwnedByUser = userId => recipeModel.find({ownedBy: userId})

findAllForRecipeIds = recipeIds => recipeModel.find({$in: {_id: recipeIds}})

endorseByChef = (userId, recipeId) => recipeModel.updateOne({_id: recipeId}, {
    // $pull: {endorsedByChef: userId},
    $push: {endorsedByChef: userId}
})

endorseByNutritionist = (userId, recipeId) => recipeModel.updateOne({_id: recipeId}, {
    // $pull: {endorsedByNutritionist: userId},
    $push: {endorsedByNutritionist: userId}
})

removedEndorsementByChef = (userId, recipeId) => recipeModel.update({_id: recipeId}, {$pull: {endorsedByChef: userId}})

removedEndorsementByNutritionist = (userId, recipeId) => recipeModel.update({_id: recipeId}, {$pull: {endorsedByNutritionist: userId}})


//doubtful
findRecipesForIngredients = (givenIngredients) => recipeModel.find({ingredients: {$all: givenIngredients}});

module.exports = {
    createRecipe,
    findAllRecipe,
    findRecipeById,
    updateRecipe,
    deleteRecipe,
    findRecipesOwnedByUser,
    findAllForRecipeIds,
    endorseByChef,
    endorseByNutritionist,
    removedEndorsementByChef,
    removedEndorsementByNutritionist
};
