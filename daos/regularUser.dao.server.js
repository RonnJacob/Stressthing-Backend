const regularUserModel = require('../models/regularUser.model.server');

createRegularUser = regularUser =>
    regularUserModel.create(regularUser);

findAllRegularUser = () => regularUserModel.find();

findRegularUserById = regularUserId => regularUserModel.find({_id: regularUserId});

findOwnedRecipesForRegularUser = regularUserId => regularUserModel.find({_id: regularUserId}, {ownRecipes: 1})

updateRegularUser = (userId, updatedRegularUser) =>
    regularUserModel.update({_id: userId}, {$set: updatedRegularUser});

updateUserRating = (userId, rating) =>
    regularUserModel.update({_id: userId}, {$set: {rating: rating}});

updateUserIngredients = (userId, rating) =>
    regularUserModel.update({_id: userId}, {$set: {rating: rating}});

deleteRegularUser = (regularUserId) => regularUserModel.remove({_id: regularUserId});

favoriteARecipe = (userId, recipeId) => regularUserModel.update({_id: userId},
    {$push: {favoriteRecipes: recipeId}});

removeAFavorite = (userId, recipeId) => regularUserModel.update({_id: userId},
    {$pull: {favoriteRecipes: recipeId}});

findAllFavoriteRecipes = (userId) => regularUserModel.find({_id: userId},
    {favoriteRecipes: 1, _id: 0});

module.exports = {
    createRegularUser, findAllRegularUser, findRegularUserById, updateRegularUser, deleteRegularUser, updateUserRating,
    favoriteARecipe, removeAFavorite, findAllFavoriteRecipes
};
