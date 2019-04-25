const nutritionistDao = require('../daos/nutritionist.dao.server');
const userDao = require('../daos/user.dao.server');
const recipeModel = require('../daos/recipe.dao.server');

module.exports = function (app) {

    registerNutritionist = (req, resp) => {
        var user = req.body;
        u = {
            username: user["username"],
            password: user["password"],
            firstName: user["firstName"],
            lastName: user["lastName"],
            userType: "NUTRITIONIST"
        };

        return userDao.createUser(u).then(
            res => {
                nutritionist = {
                    _id: res["_id"],
                    appointmentLink: user["appointmentLink"]
                }
                return nutritionistDao.createNutritionist(nutritionist).then(newUser => {
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

    findById = (req, res) => {
        nutritionistDao.findNutritionistById(req.params['userId']).then(user => res.send(user));
    };

    endorseRecipe = (req, res) => {
        nutritionistDao.endorseRecipe(req.params['userId'], req.params['recipeId'])
            .then(() => recipeModel.endorseByNutritionist(req.params['userId'], req.params['recipeId']))
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been added to endorsed of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    removeEndorsed = (req, res) => {
        nutritionistDao.removeEndorsed(req.params['userId'], req.params['recipeId'])
            .then(() => recipeModel.removedEndorsementByNutritionist(req.params['userId'], req.params['recipeId']))
            .then(res.send('Recipe with ID ' + req.params['recipeId'] + ' ' +
                'has been removed from endorsed of user with ID ' + req.params['userId'] + ": " + +res.statusCode));
    }

    // findAllEndorsed = (req, res) => {
    //     nutritionistDao.findAllEndorsed(req.params['userID'])
    //         .then(recipeIds => recipeModel.findAllForRecipeIds(recipeIds))
    //         .then(recipes => res.send(recipes));
    // }

    findAllEndorsed = (req, res) => {

        nutritionistDao.findEndorsedRecipesByNutritionist(req.params['userId'])
        // .then(recipeIds => res.send(recipeIds[0].favoriteRecipes))
            .then(recipeIds => {
                var filtered=[]
                if(recipeIds[0].endorsedRecipes){
                    filtered = recipeIds[0].endorsedRecipes.filter(function(value){

                        return value.length>5;

                    });}
                return recipeModel.findAllForRecipeIds(filtered)})
            .then(recipes => res.send(recipes))
    }

    findEndorsedRecipeId = (req, res) => {

        nutritionistDao.findEndorsedRecipesByNutritionist(req.params['userId'])
            .then(recipeIds => res.send(recipeIds[0].endorsedRecipes))

    }

    const updateNutritionist = (req, res) => {
        nutritionistDao.updateNutritionist(req.params.id, req.body).then(nutritionist => res.send(nutritionist));
    };
    app.post('/api/registerNutritionist', registerNutritionist);
    app.post('/api/nutritionist/:userId/recipes/:recipeId', endorseRecipe)
    app.get('/api/nutritionist/:userId/recipes', findAllEndorsed)
    app.get('/api/nutritionist/:userId/recipeId', findEndorsedRecipeId)
    app.put('/api/nutritionist/:id', updateNutritionist);
    app.get('/api/nutritionist/:userId', findById)
    app.delete('/api/nutritionist/:userId/recipes/:recipeId', removeEndorsed)

};
