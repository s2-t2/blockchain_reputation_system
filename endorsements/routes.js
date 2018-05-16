const routes = require('next-routes')();

routes
	.add('/participants/new','/participants/new')
	.add('/participants/:address','/participants/show' );

module.exports = routes;
