const chefModel = require('../models/chef.model.server');


createChef = chef =>
    chefModel.create(chef);

findAllChef = () => chefModel.find();

findChefById = chefId => chefModel.findById(chefId);

updateChef = (userId, updatedChef) =>
    chefModel.update({_id: userId}, {$set: updatedChef});

deleteChef = (chefId) => chefModel.remove({_id: chefId});

module.exports = {
    createChef, findAllChef, findChefById, updateChef,deleteChef
};
