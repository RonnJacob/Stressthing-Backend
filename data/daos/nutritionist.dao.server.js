const nutritionistModel = require('../models/nutritionist.model.server');


createNutritionist = nutritionist =>
    nutritionistModel.create(nutritionist);

findAllNutritionist = () => nutritionistModel.find();

findNutritionistById = nutritionistId => nutritionistModel.findById(nutritionistId);

updateNutritionist = (userId, updatedNutritionist) =>
    nutritionistModel.update({_id: userId}, {$set: updatedNutritionist});

deleteNutritionist = (nutritionistId) => nutritionistModel.remove({_id: nutritionistId});

module.exports = {
    createNutritionist, findAllNutritionist, findNutritionistById, updateNutritionist,deleteNutritionist
};
