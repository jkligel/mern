const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/', ProductController.index);
    app.get('/api');
    app.post('/api/products', ProductController.createProduct);
}