const nutritionistModel = require('../models/nutritionist.model.server');


createNutritionist = nutritionist =>
    nutritionistModel.create(nutritionist);

findAllNutritionist = () => nutritionistModel.find();

findNutritionistById = nutritionistId => nutritionistModel.find({_id: nutritionistId});

updateNutritionist = (userId, updatedNutritionist) =>
    nutritionistModel.update({_id: userId}, {$set: updatedNutritionist});

deleteNutritionist = (nutritionistId) => nutritionistModel.remove({_id: nutritionistId});

endorseRecipe = (userId, recipeId) => nutritionistModel.update({_id: userId},
    {$push: {endorsedRecipes: recipeId}});

removeEndorsed = (userId, recipeId) => nutritionistModel.update({_id: userId},
    {$pull: {endorsedRecipes: recipeId}});

findAllEndorsed = (userId) => nutritionistModel.find({_id: userId},
    {endorsedRecipes: 1, _id: 0});
findEndorsedRecipesByNutritionist = userId =>
    nutritionistModel.find({_id: userId}, {endorsedRecipes: 1})
module.exports = {
    createNutritionist, findAllNutritionist, findNutritionistById, updateNutritionist, deleteNutritionist,
    endorseRecipe, removeEndorsed, findAllEndorsed,findEndorsedRecipesByNutritionist
};
