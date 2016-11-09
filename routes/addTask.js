var data = require('../data.json');

exports.view = function(req, res){
	res.render('addTask');
}
// we can make the task turn red and be marked as "Completed" and then move it 
// to the bottom of the list of tasks

