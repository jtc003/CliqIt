var data = require('../data.json');
var group1 = require('../group1.json');
var group2 = require('../group2.json');

exports.view = function(req, res){
	var groupToShow = req.params.groupName;
	var groupName = {"groupName": groupToShow}
	// var parsed = data.name[0]['groupName'];
	// console.log(parsed);
	
	/* if the group isn't CSE 170 then render an empty page */
	if(groupToShow === "CSE 170"){
		data.name[0] = groupName;
		res.render('group', data);
	}
	// else render the 2nd group page
	else if (data.name[1] == undefined || data.name[1]['groupName'] == groupToShow){
		data.name[1] = groupName;
		group1.name1 = groupName
		res.render('group', group1);
	}
	// else render the third group page
	else{
		group2.name1 = groupName;
		res.render('group', group2);
		
	}
}
