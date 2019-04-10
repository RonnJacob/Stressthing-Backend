const mongoose = require('mongoose');
const userDao = require('../daos/user.dao.server')

const registerUser = (req, res) =>{
    var user = req.body;
    userDao.createUser(user).then(user => {
        req.session.user = user;
        res.send(user);
    });
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

const login = (req, res) => {
    var username = req.body['username'];
    var password = req.body['password'];
    userDao.findUserByCredentials(username,password).then(user =>{
            if (user.length !== 0) {
                req.session.user = user;
                res.send('Logged in as ' + username);
            }
            else{
                res.send('Invalid username or password');
            }
        }
    );
};

const profile = (req, res) => {
    res.send(req.session.user);
};

const logout = (req, res) => {
    req.session.destroy();
    res.send(200);
};

module.exports = function(app) {
    app.get('/api/user', findUsers);
    app.get('/api/user/:id', findUserById);
    app.put('/api/user/:id', updateUser);
    app.post('/api/register', registerUser);
    app.delete('/api/user/:id', deleteUser);
    app.post('/api/logout', logout);
    app.get('/api/profile', profile);
    app.post('/api/login', login);

};
