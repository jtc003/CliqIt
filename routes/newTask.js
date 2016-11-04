var data = require('../data.json');

exports.view = function(req, res){
	var name = req.query.name;
	var date = req.query.date;
	var desc = req.query.description;
	var priority = req.query.priority;

	var newTask = {
		"taskName" : name,
		"description" : desc,
		"priority" : priority,
		"date" : date
	};

	data.tasks.push(newTask);

	res.render('group', data);
}