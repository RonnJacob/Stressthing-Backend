const stresserDao = require('../daos/stressers.dao.server')
module.exports = app => {
    addStresser = (req, res) => {
        stresserDao.createStresser(req.body).then(stresser => res.send(stresser));
    }

    findStresserByUser = (req, res) => {
        stresserDao.findStresserByUser(req.params['userId']).then(stresser => res.send(stresser));
    }

    findStresserById = (req, res) => {
        stresserDao.findStresserById(req.params['stresserId']).then(stresser => res.send(stresser));
    }

    deleteStresser = (req, res) => {
        stresserDao.deleteStresser(req.params['stresserId']).then(res.send('Operation completed with status code:' + res.statusCode));
    }


    app.delete('/api/stresser/:stresserId', deleteStresser)
    app.get('/api/stresser/:stresserId', findStresserById)
    app.get('/api/stresser/:userId/stressdata', findStresserByUser)
    app.post('/api/stresser', addStresser)
}
