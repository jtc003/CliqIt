var data = require('../data.json');

exports.view = function(req, res){
	var groupToShow = req.params.groupName;
	/* if the group isn't CSE 170 then render an empty page */
	if(groupToShow === "CSE 170")
		res.render('group', data);
	else
		res.render('group',{
			'groupName':groupToShow,
		});
}
