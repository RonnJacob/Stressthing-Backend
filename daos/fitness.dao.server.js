const fitnessModel = require('../models/fitness.model.server');


createFitness = fitness =>
      fitnessModel.create(fitness);

findAllFitness = () => fitnessModel.find();

findFitnessById = fitnessId => fitnessModel.findById(fitnessId);

findFitnessByUser = userId => fitnessModel.find({ownedBy : userId})

deleteFitness = (fitnessId) => fitnessModel.remove({_id: fitnessId});

module.exports = {
    createFitness, findAllFitness, findFitnessById,deleteFitness,findFitnessByUser
};
