const routes = require('next-routes')();

routes
    // .add('/campaigns/new', '/campaigns/new')
    .add('/metag1/:address', '/metag1')
    // .add('/campaigns/:address/requests', '/campaigns/requests/index')
    // .add('/campaigns/:address/requests/new', 'campaigns/requests/new');

module.exports = routes;