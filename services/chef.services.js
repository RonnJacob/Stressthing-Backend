const chefDao = require('../daos/chef.dao.server');
const userDao= require('../daos/user.dao.server');
const recipeModel = require('../daos/recipe.dao.server');

module.exports = function (app) {

    registerChef = (req, resp) =>{
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
                chef = {
                    _id: res["_id"],
                    blogPost:user.chef["blogPost"]
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


    app.post('/api/registerChef', registerChef);

};
