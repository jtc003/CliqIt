var data = require('../data.json');

// generates the original index page
exports.view = function(req, res){
  data['showAlternate'] = false;
  res.render('index', data);
}

// generates the index 2 page if showAlternate = true
exports.view2 = function(req, res){
  data['showAlternate'] = true;
  res.render('index2', data);
}
