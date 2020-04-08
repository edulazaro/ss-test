const fs = require('fs');

/**
 * Manages scores
 */
class ScoreManager {
    /**
     * Constructor
     *
     * @constructor
     */
    constructor() {
        this.scores = this.loadScores();
    }

    /**
     * return array with scores
     *
     * @return {Array}
     */
    getScores = () => {
        return this.scores;
    }

    /**
     * Add a score
     *
     * @var {Object} score Score with name and points
     * @return {ScoreManager} This instance
     */
    addScore = (score) => {
        let scores = [...this.scores];
        scores.push(score);
        scores = scores.sort(function (a, b) { return b.points - a.points });

        if (scores.length > 5) {
            scores.pop();
        }

        this.scores = scores;
        this.saveScores();

        return this;
    }

    /**
     * Configure route files
     *
     * @return {Array} Array of scores
     */
    loadScores = () => {
        try {
            let data = fs.readFileSync('./data/scores.json');
            this.scores = JSON.parse(data);
        } catch (err) {
            console.log('There has been an error parsing your JSON.')
            console.log(err);
        }
        return this.scores;
    }

    /**
     * Save current scores on this
     *
     * @return {boolean} Operation result
     */
    saveScores = () => {
        const data = JSON.stringify(this.scores);

        fs.writeFile('./data/scores.json', data, (err) => {
            if (err) {
                console.log('There has been an error saving your configuration data.');
                console.log(err.message);
                return false;
            }
        });
        return true;
    }
}

module.exports = ScoreManager;