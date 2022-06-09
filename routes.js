const routes = require('next-routes')();

routes.add('/qrcode/:address', '/qrcode/show');

module.exports = routes;