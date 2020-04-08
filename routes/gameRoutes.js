const { Router } = require('express')
const GameController = require('../controllers/GameController');

const router = Router();

const gameController = new GameController();

router.get('/getScores', gameController.getScores);

router.post('/submitEntry', gameController.submitEntry);

module.exports = router;
