const chefModel = require('../models/chef.model.server');


createChef = chef =>
    chefModel.create(chef);

findAllChef = () => chefModel.find();

findChefById = chefId => chefModel.findById(chefId);

updateChef = (userId, updatedChef) =>
    chefModel.update({_id: userId}, {$set: updatedChef});

deleteChef = (chefId) => chefModel.remove({_id: chefId});

findEndorsedRecipesByChef = userId => chefModel.find({_id: userId}, {endorsedRecipes: 1})

findOwnRecipesByChef = userId => chefModel.find({_id: userId}, {ownRecipes: 1})

endorseRecipe = (userId, recipeId) => chefModel.update({_id: userId},
    {$push: {endorsedRecipes: recipeId}});

removeEndorsed = (userId, recipeId) => chefModel.update({_id: userId},
    {$pull: {endorsedRecipes: recipeId}});

findAllEndorsed = (userId) => chefModel.find({_id: userId},
    {endorsedRecipes: 1, _id: 0});


module.exports = {
    createChef, findAllChef, findChefById, updateChef, deleteChef, findEndorsedRecipesByChef, findOwnRecipesByChef,
    endorseRecipe, removeEndorsed, findAllEndorsed
};
