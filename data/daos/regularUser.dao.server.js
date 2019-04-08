const regularUserModel = require('../models/regularUser.model.server');


createRegularUser = regularUser =>
    regularUserModel.create(regularUser);

findAllRegularUser = () => regularUserModel.find();

findRegularUserById = regularUserId => regularUserModel.findById(regularUserId);

updateRegularUser = (userId, updatedRegularUser) =>
    regularUserModel.update({_id: userId}, {$set: updatedRegularUser});

deleteRegularUser = (regularUserId) => regularUserModel.remove({_id: regularUserId});

module.exports = {
    createRegularUser, findAllRegularUser, findRegularUserById, updateRegularUser,deleteRegularUser
};
