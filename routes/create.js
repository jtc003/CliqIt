var data = require('../data.json');

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

	data.tasks.push(newTask);

	res.render('group', data);
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
	data.groups.map(function(obj){
		if(obj.groupName === req.body.groupName)
			return;

		// push any group object that doesnt match the one to be deleted
		// into the new list of groups
		newGroupList.push(obj);
	});

	data.groups = newGroupList;
}





