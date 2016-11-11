var data = require('../data.json');

exports.newTask = function(req, res){
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

exports.newGroup = function(req, res){
	var name1 = req.query.member1;
	var name2 = req.query.member2;
	var name3 = req.query.member3;
	var groupName = req.query.groupName;

	var newGroup = {
		"groupName" : groupName
	};

	data.groups.push(newGroup);
	res.render('index', data);
}