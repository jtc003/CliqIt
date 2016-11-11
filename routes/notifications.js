var data = require('../data.json');

exports.view = function(req, res){
	res.render('notifications', data);
}

exports.removeNotif = function(req, res){
	// create a new array to hold the list of task objects
	var newTaskList = [];
	
	//iterate through the current task list 
	data.notifications.map(function(obj){
		if(obj.taskName === req.body.taskName)
			return;	
		// push any task object that doesn't match the one to be
		// deleted into the new list of tasks 
		newTaskList.push(obj);
	});

	console.log(req.body.taskName);

	data.notifications = newTaskList;
}