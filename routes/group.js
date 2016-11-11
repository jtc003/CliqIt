var data = require('../data.json');

exports.view = function(req, res){
	res.render('group', data);
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