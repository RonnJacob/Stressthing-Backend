const nutritionistDao= require('../daos/nutritionist.dao.server');

createNutritionist = (req, res) => {
    nutritionistDao.createNutritionist(req.body)
        .then(res.send('Nutritionist Added!'));
};

findAllNutritionist = (req, res) => {
    nutritionistDao.findAllNutritionist()
        .then(nutritionists => res.send(nutritionists));
};

findNutritionistById = (req, res) => {
    nutritionistDao.findNutritionistById(req.params.id)
        .then(nutritionist => res.send(nutritionist));
};

module.exports = function(app) {
    app.post('/api/nutritionist',createNutritionist);
    app.get('/api/nutritionist',findAllNutritionist);
    app.get('/api/nutritionist/:id',findNutritionistById)
};
