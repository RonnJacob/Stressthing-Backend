const regularUserModel = require('../models/regularUser.model.server');


createRegularUser = regularUser =>
    regularUserModel.create(regularUser);

findAllRegularUser = () => regularUserModel.find();

findRegularUserById = regularUserId => regularUserModel.findById(regularUserId);

findOwnedRecipesForRegularUser = regularUserId => regularUserModel.find( { _id: regularUserId }, { ownRecipes: 1 } )

updateRegularUser = (userId, updatedRegularUser) =>
    regularUserModel.update({_id: userId}, {$set: updatedRegularUser});

updateUserRating = (userId, rating) =>
    regularUserModel.update({_id: userId}, {$set: {rating:rating}});

updateUserIngredients = (userId, rating) =>
    regularUserModel.update({_id: userId}, {$set: {rating:rating}});

deleteRegularUser = (regularUserId) => regularUserModel.remove({_id: regularUserId});

module.exports = {
    createRegularUser, findAllRegularUser, findRegularUserById, updateRegularUser,deleteRegularUser,updateUserRating
};
