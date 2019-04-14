const userModel = require('../models/user.model.server');


createUser = user =>
    userModel.create(user);

findAllUser = () => userModel.find();

findUserByRole = (role) => userModel.find({role: role});

findUserById = userId => userModel.findById(userId);

findUserByUsername = username => userModel.find({username: username});

findUserByCredentials = (username, password) =>
    userModel.find({username: username, password: password});

updateUser = (userId, updatedUser) =>
    userModel.update({_id: userId}, {$set: updatedUser});

deleteUser = (userId) => userModel.remove({_id: userId});

module.exports = {
    createUser, findAllUser, findUserById, findUserByCredentials, findUserByUsername, findUserByRole, updateUser,deleteUser
};
