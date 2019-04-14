const ingredientModel = require('../models/ingredient.model.server');


createIngredient = ingredient =>
    ingredientModel.create(ingredient);

findAllIngredient = () => ingredientModel.find();

findIngredientById = ingredientId => ingredientModel.findById(ingredientId);

findIngredientsByUser = userId => ingredientModel.find({ownedBy : userId})

updateIngredient = (userId, updatedIngredient) =>
    ingredientModel.update({_id: userId}, {$set: updatedIngredient});

deleteIngredient = (ingredientId) => ingredientModel.remove({_id: ingredientId});

module.exports = {
    createIngredient, findAllIngredient, findIngredientById, updateIngredient,deleteIngredient
};
