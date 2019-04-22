const chefDao = require('../daos/chef.dao.server');
const userDao = require('../daos/user.dao.server');
const recipeModel = require('../daos/recipe.dao.server');

module.exports = function (app) {

    registerChef = (req, resp) => {
        var user = req.body;
        u = {
            username: user["username"],
            password: user["password"],
            firstName: user["firstName"],
            lastName: user["lastName"],
            userType: "CHEF"
        };

        return userDao.createUser(u).then(
            res => {
                chef = {
                    _id: res["_id"],
                    blogPost:user["blogPost"]
                }
                return chefDao.createChef(chef).then(newUser => {
                    req.session.user = newUser;
                    resp.send(newUser);
                });
            }
        );
        // userDao.createUser(user).then(user => {
        //     req.session.user = user;
        //     res.send(user);
        // });
    };

    endorseRecipe = (req, res) => {
        chefDao.endorseRecipe(req.params['userId'], req.params['recipeId'])
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been added to endorsed of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    removeEndorsed = (req, res) => {
        chefDao.removeEndorsed(req.params['userId'], req.params['recipeId'])
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been removed from endorsed of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    findAllEndorsed = (req, res) => {
        chefDao.findAllEndorsed(req.params['userID'])
            .then(recipeIds => recipeModel.findAllForRecipeIds(recipeIds))
            .then(recipes => res.send(recipes));
    }


    app.post('/api/registerChef', registerChef);
    app.post('/api/chef/:userId/recipes/:recipeId', endorseRecipe)
    app.get('/api/chef/:userId/recipes', findAllEndorsed)
    app.delete('/api/chef/:userId/recipes/:recipeId', removeEndorsed)

};
