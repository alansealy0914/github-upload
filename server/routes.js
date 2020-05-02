var customers = require('./controllers/customerController'),
    products = require('./controllers/productController'),
    orders = require('./controllers/orderController');
    sils = require('./controllers/productsilController');

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


  app.get('/api/productsils/', sils.getProductsils);
  app.get('/api/productsils/:id', sils.getProductsilById);
  app.put('/api/productsils/:id', sils.getProductsilById);


  app.get('*', function(req, res) {
    res.sendStatus(404);
  });
}