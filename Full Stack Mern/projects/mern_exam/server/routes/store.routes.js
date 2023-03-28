const StoreController = require('../controllers/store.controller');

module.exports = (app) => {
    app.get('/api/stores', StoreController.getAllStores);
    app.post('/api/stores', StoreController.createStore);
    app.get('/api/stores/:id', StoreController.getStore);
    app.put('/api/stores/:id', StoreController.updateStore);
    app.delete('/api/stores/:id', StoreController.deleteStore);
}