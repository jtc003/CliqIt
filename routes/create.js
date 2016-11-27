var data = require('../data.json');
var group1 = require('../group1.json');
var group2 = require('../group2.json');

exports.newTask = function(req, res){
	var name = req.query.name;
	var date = req.query.date;
	var desc = req.query.description;
	var priority = req.query.priority;
	var groupToShow = req.params.groupName;
	console.log(groupToShow);
	var newTask = {
		"taskName" : name,
		"description" : desc,
		"priority" : priority,
		"date" : date
	};
	if(group1.name1['groupName'] == groupToShow)
	{
		group1.tasks.push(newTask);
		res.render('group', group1);
	}
	else if(data.name1['groupName'] == groupToShow)
	{
		data.tasks.push(newTask);
		res.render('group', data);
	}
	else
	{
		group2.tasks.push(newTask);
		res.render('group', group2);
	}
	
	//render a different data file with new tasks
	// but that's going to be reloaded for every group page

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

exports.deleteTask = function(req, res){

	// create a new array to hold the list of task objects
	var newTaskList = [];
	
	//iterate through the current task list 
	data.tasks.map(function(obj){
		if(obj.taskName === req.body.taskName)
			return;	
		// push any task object that doesn't match the one to be
		// deleted into the new list of task 
		newTaskList.push(obj);
	});

	data.tasks = newTaskList;
}

exports.deleteGroups = function(req, res){
	var newGroupList = [];

	//iterate through the current group list

	// for i in data.groups

	data.groups.map(function(obj){
		if(obj.groupName === req.body.groupName)
			return;

		// push any group object that doesnt match the one to be deleted
		// into the new list of groups
		newGroupList.push(obj);
	});

	data.groups = newGroupList;
}





