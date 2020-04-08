const GameManager = require('../services/GameManager.js');

/**
 * Main game controller
 */
class GameController {
    /**
     * Constructor
     *
     * @constructor
     */
    constructor() {
        this.gameManager = new GameManager();
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @param {function} next The callback to the next program handler
     * @return {Object} res The response object
     */
    getScores = async (req, res, next) => {
        try {
            const scores = this.gameManager.getScores();
            res.send(scores)
        } catch (e) {
            console.log(e);
            res.status(500).json({
                error: true,
                message: e.toString()
            });
        }
    }

    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @param {function} next The callback to the next program handler
     * @return {Object} res The response object
     */
    submitEntry = async (req, res, next) => {
        const name = req.body.name;
        const word = req.body.word;

        try {
            const score = this.gameManager.addWord(name, word);
            return res.status(200).send(score.toString());
        } catch (e) {
            res.status(500).json({
                error: true,
                message: e.toString()
            });
        }
    }

}

module.exports = GameController;