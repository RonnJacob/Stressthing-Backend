const mongoose = require('mongoose');
const userDao = require('../daos/user.dao.server')

let userId = 1;

const createUser = (req, res) =>{
    var user = req.body;
    // user['_id'] = userId++;
    userDao.createUser(user).then(user => res.send(user));
};

const findUsers = (req, res) => {
    userDao.findAllUser().then(users => res.send(users));
};


module.exports = function(app) {
    app.post('/api/user', createUser);
    app.get('/api/user', findUsers);
};
