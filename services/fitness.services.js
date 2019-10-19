const fitnessDao = require('../daos/fitness.dao.server')
module.exports = app => {
    addFitness = (req, res) => {
        fitnessDao.createFitness(req.body).then(fitness => res.send(fitness));
    }

    findFitnessByUser = (req, res) => {
        fitnessDao.findFitnessByUser(req.params['userId']).then(fitness => res.send(fitness));
    }

    findFitnessById = (req, res) => {
        fitnessDao.findFitnessById(req.params['fitnessId']).then(fitness => res.send(fitness));
    }

    deleteFitness = (req, res) => {
        fitnessDao.deleteFitness(req.params['fitnessId']).then(res.send('Operation completed with status code:' + res.statusCode));
    }


    app.delete('/api/fitness/:fitnessId', deleteFitness)
    app.get('/api/fitness/:fitnessId', findFitnessById)
    app.get('/api/fitness/:userId/fitnessdata', findFitnessByUser)
    app.post('/api/fitness', addFitness)
}
