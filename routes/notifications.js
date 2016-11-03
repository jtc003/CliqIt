var data = require('../notifications.json');

exports.view = function(req, res){
	res.render('notifications', data);
}