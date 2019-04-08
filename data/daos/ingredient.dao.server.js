const ingredientModel = require('../models/ingredient.model.server');


createIngredient = ingredient =>
    ingredientModel.create(ingredient);

findAllIngredient = () => ingredientModel.find();

findIngredientById = ingredientId => ingredientModel.findById(ingredientId);

updateIngredient = (userId, updatedIngredient) =>
    ingredientModel.update({_id: userId}, {$set: updatedIngredient});

deleteIngredient = (ingredientId) => ingredientModel.remove({_id: ingredientId});

module.exports = {
    createIngredient, findAllIngredient, findIngredientById, updateIngredient,deleteIngredient
};
