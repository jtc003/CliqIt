var data = require('../data.json');

exports.view = function(req, res){
  
  res.render('index2', data);
}
