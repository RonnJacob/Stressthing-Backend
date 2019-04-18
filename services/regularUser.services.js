const regularUserModel = require('../daos/regularUser.dao.server');
const userDao= require('../daos/user.dao.server');
const recipeModel = require('../daos/recipe.dao.server');

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

module.exports = function (app) {

    registerRegularUser = (req, resp) =>{
        var user = req.body;
        u = {
            username: user["username"],
            password: user["password"],
            firstName: user["firstName"],
            lastName: user["lastName"],
            userType: "REGULAR"
        };

        return userDao.createUser(u).then(
            res => {
                regUser = {
                    _id: res["_id"]
                }
                return regularUserModel.createRegularUser(regUser).then(newUser => {
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

    favoriteARecipe = (req, res) => {
        regularUserModel.favoriteARecipe(req.params['userId'], req.params['recipeId'])
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been added to favorites of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    removeAFavorite = (req, res) => {
        regularUserModel.removeAFavorite(req.params['userId'], req.params['recipeId'])
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been removed from favorites of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    findAllFavorites = (req, res) => {
        regularUserModel.findAllFavoriteRecipes(req.params['userID'])
            .then(recipeIds => recipeModel.findAllForRecipeIds(recipeIds))
            .then(recipes => res.send(recipes));
    }
    app.post('/api/registerUser', registerRegularUser);
    app.post('/api/users/:userId/recipes/:recipeId', favoriteARecipe)
    app.get('/api/users/:userId/recipes', findAllFavorites)
    app.delete('/api/users/:userId/recipes/:recipeId', removeAFavorite)

};
