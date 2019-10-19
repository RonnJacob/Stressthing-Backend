const stressModel = require('../models/stresser.model.server');


createStresser = stresser => stressModel.find({
  cause: stresser.cause
}).then(res => {
  if(res === undefined || res.length == 0){
    stressModel.create({cause: stresser.cause, count: 1, ownedBy: stresser.ownedBy});
  }
  else{
    var myQuery = {cause: stresser.cause};
    var newValues = {$inc: {count: 1}};
    stressModel.updateOne(myQuery, newValues, function (err, res){
      if(err) throw err;
      console.log('1 document updated.');
    })
  }
});


findAllStressers = () => stressModel.find();

findStresserById = stresserId => stressModel.findById(stresserId);

findStressCountByCause = stressCause => stressModel.find({cause: stressCause});

findStresserByUser = userId => stressModel.find({ownedBy : userId})

deleteStresser = (stresserId) => stressModel.remove({_id: stresserId});

module.exports = {
    createStresser, findAllStressers, findStresserById,deleteStresser,findStresserByUser,
    findStressCountByCause
};
