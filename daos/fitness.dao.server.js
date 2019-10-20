const fitnessModel = require('../models/fitness.model.server');


createFitness = fitness =>
      fitnessModel.create(fitness);

findAllFitness = () => fitnessModel.find();

findFitnessById = fitnessId => fitnessModel.findById(fitnessId);

findFitnessByUser = userId => fitnessModel.find({ownedBy : userId})

findLatestFitnessData = userId => fitnessModel.find({ownedBy: userId})
                                              .sort({'_id':-1}).limit(1)

deleteFitness = (fitnessId) => fitnessModel.remove({_id: fitnessId});

module.exports = {
    createFitness, findAllFitness, findFitnessById,deleteFitness,findFitnessByUser,
    findLatestFitnessData
};
