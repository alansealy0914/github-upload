var customers = require('./controllers/customerController'),
    products = require('./controllers/productController'),
    orders = require('./controllers/orderController');
    sils = require('./controllers/silController');

var fs = require('fs');

module.exports = function(app) {

  app.get('/api/customers/', customers.getCustomers);
  app.get('/api/customers/:id', customers.getCustomerById);
  app.put('/api/customers/:id', customers.getCustomerById);

  app.get('/api/products/', products.getProducts);
  app.get('/api/products/:id', products.getProductById);
  app.put('/api/products/:id', products.getProductById);

  app.get('/api/orders/', orders.getOrders);
  app.get('/api/orders/:id', orders.getOrderById);
  app.put('/api/orders/:id', orders.getOrderById);
  app.post('/api/orders/', orders.createOrder);

  app.get('/api/customers/:id/orders', orders.getOrdersByCustomer);


  /*app.get('/api/sils/', sils.getSils);
  app.get('/api/sils/:id', sils.getSilById);
  app.put('/api/sils/:id', sils.getSilById);*/


  app.get('*', function(req, res) {
    res.sendStatus(404);
  });
}