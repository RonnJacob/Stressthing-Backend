const regularUserDao= require('../daos/regularUser.dao.server');

//TODO
//1. Add favorite recipe (Only read privilges).
//2. Delete recipe from list of favorites.
//3. Create owning recipe.
//4. Reading owning recipe (By ID and all owned recipes)
//5. Updating owned recipes.
//6. Deleting owned recipes.
//7. Adding an ingredient to list of ingredients.
//8. Updating a list of ingredients.
//9. Deleting an ingredient from a list of ingredients.
//10. Reading a list of ingredients.
createRegularUser = (req, res) => {
    regularUserDao.createRegularUser(req.body)
        .then(res.send('Regular User Added!'));
};

findAllRegularUser = (req, res) => {
    regularUserDao.findAllRegularUser()
        .then(regUsers => res.send(regUsers));
};

findRegularUserById = (req, res) => {
    regularUserDao.findRegularUserById(req.params.id)
        .then(regUser => res.send(regUser));
};

module.exports = function(app) {
    app.post('/api/regular',createRegularUser);
    app.get('/api/regular',findAllRegularUser);
    app.get('/api/regular/:id',findRegularUserById)
};
