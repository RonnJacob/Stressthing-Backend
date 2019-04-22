// const UserSession = require('../models/usersession.schema.server');
// const usersesh = require('../models/usersession.model.server');
const mongoose = require('mongoose');
const UserSession = require('../models/usersession');
const UserSessionSchema = require('../models/usersession.schema.server');
const userDao = require('../daos/user.dao.server');
var UserSess = mongoose.model('UserSess', UserSessionSchema);

// const registerUser = (req, res) =>{
//     var user = req.body;
//     userDao.createUser(user).then(user => {
//         req.session.user = user;
//         res.send(user);
//     });
// };

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

const login = (req, res, next) => {
    var username = req.body['username'];
    var password = req.body['password'];
    userDao.findUserByCredentials(username,password).then(user =>{
            if (user.length !== 0) {
                // req.session.user = user;
                // res.send('Logged in as ' + username);
                const userSession = new UserSess();
                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if (err) {
                        console.log(err);
                        return res.send({
                            success: false,
                            message: 'Error: server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Valid sign in',
                        token: doc._id,
                        user: user
                    });
                });
            }
            else{
                res.send({message: 'Invalid username or password'});
            }
        }
    );
};

const findUserByUsername = (req, res) => {
    userDao.findUserByUsername(req.params.username).then(user => res.send(user));
};

const profile = (req, res) => {
    res.send(req.session.user);
};

const logout = (req, res) => {
    // req.session.destroy();
    // res.send(200);
    const { query } = req;
    const { token } = query;

    UserSess.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
        $set: {
            isDeleted:true
        }
    }, null, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        console.log('Yay');
        return res.send({
            success: true,
            message: 'Good'
        });
    });
};

const verify = (req, res) => {
    const { query } = req;
    const { token } = query;

    UserSess.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            console.log(err);
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        if (sessions.length !== 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid',
            });
        } else {
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    });
};

module.exports = function(app) {
    app.get('/api/user', findUsers);
    app.get('/api/user/:id', findUserById);
    app.get('/api/username/:username', findUserByUsername);
    app.put('/api/user/:id', updateUser);
    app.delete('/api/user/:id', deleteUser);
    app.get('/api/logout', logout);
    app.get('/api/profile', profile);
    app.post('/api/login', login);
    app.get('/api/account/verify', verify);
};
