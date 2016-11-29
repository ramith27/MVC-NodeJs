module.exports.routes = function(app) {

	app.get('/',function(request, response) {
	  response.render('pages/index');
	});

	app.get('*',function(request, response) {
	  response.render('errors/404');
	});

}
