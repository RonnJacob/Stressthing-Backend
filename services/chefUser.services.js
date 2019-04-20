const chefDao= require('../daos/chef.dao.server');

createChef = (req, res) => {
    chefDao.createChef(req.body)
        .then(res.send('Chef Added!'));
};

findAllChef = (req, res) => {
    chefDao.findAllChef()
        .then(chefs => res.send(chefs));
};

findChefById = (req, res) => {
    chefDao.findChefById(req.params.id)
        .then(chef => res.send(chef));
};

module.exports = function(app) {
    app.post('/api/chef',createChef);
    app.get('/api/chef',findAllChef);
    app.get('/api/chef/:id',findChefById)
};
