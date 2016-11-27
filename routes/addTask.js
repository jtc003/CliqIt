var data = require('../data.json');

/* renders the addTask handlebars page */
exports.view = function(req, res){
	var name = req.params.groupName;
	console.log(name)
	res.render('addTask');
}

