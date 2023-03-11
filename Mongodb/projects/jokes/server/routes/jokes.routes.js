const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.get('/api/jokes/:id', JokeController.findSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateAnExistingJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}