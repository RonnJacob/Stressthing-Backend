const ingredientDao = require('../daos/ingredient.dao.server')
module.exports = app => {
    addIngredient = (req, res) => {
        ingredientDao.createIngredient(req.body).then(ingredient => res.send(ingredient));
    }

    findIngredientsByUser = (req, res) => {
        ingredientDao.findIngredientsByUser(req.params['userId']).then(ingredients => res.send(ingredients));
    }

    findIngredientById = (req, res) => {
        ingredientDao.findIngredientById(req.params['ingredientId']).then(ingredient => res.send(ingredient));
    }

    deleteIngredient = (req, res) => {
        ingredientDao.deleteIngredient(req.params['ingredientId']).then(res.send('Operation completed with status code:' + res.statusCode));
    }

    updateIngredient = (req, res) => {
        ingredientDao.updateIngredient(req.params['ingredientId'], req.body.name).then(res.send('Ingredient with ID' + req.params['ingredientId'] + ' updated from records with status code:' + res.statusCode));
    }

    app.put('/api/ingredients/:ingredientId', updateIngredient)
    app.delete('/api/ingredients/:ingredientId', deleteIngredient)
    app.get('/api/ingredients/:ingredientId', findIngredientById)
    app.get('/api/users/:userId/ingredients', findIngredientsByUser)
    app.post('/api/ingredient', addIngredient)
}
