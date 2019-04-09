const mongoose = require('mongoose');
const userDao = require('../daos/user.dao.server')

const createUser = (req, res) =>{
    var user = req.body;
    userDao.createUser(user).then(user => res.send(user));
};

const findUsers = (req, res) => {
    userDao.findAllUser().then(users => res.send(users));
};

const findUserById = (req, res) => {
    userDao.findUserById(req.params.id).then(user => res.send(user));
};

const updateUser = (req, res) => {
    userDao.updateUser(req.params.id, req.body).then(user => res.send(user));
};

const deleteUser = (req, res) => {
    userDao.deleteUser(req.params.id).then(res.send('User deleted from the user database.'));
};


module.exports = function(app) {
    app.post('/api/user', createUser);
    app.get('/api/user', findUsers);
    app.get('/api/user/:id', findUserById);
    app.put('/api/user/:id', updateUser);
    app.delete('/api/user/:id', deleteUser);
};
