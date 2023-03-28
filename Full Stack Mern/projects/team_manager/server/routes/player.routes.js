const PlayerController = require('../controllers/Player.controller');

module.exports = (app) => {
    app.get('/api/players', PlayerController.getAllPlayers);
    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}