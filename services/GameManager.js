const ScoreManager = require('./ScoreManager.js');

/**
 * Manages game logic
 */
class GameManager {
    /**
     * Constructor
     *
     * @constructor
     */
    constructor() {
        this.scoreManager = new ScoreManager();
    }
    /**
     * Check if a reversed word is equal to the original
     *
     * @return {number} The length if the palindrome, zero if not palindrome
     */
    isPalindrome = (word) => {
        if (word.length < 2) return 0;

        const string = word.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
        const reversedString = string.split('').reverse().join('');

        if (string == reversedString) {
            return string.length;
        }

        return 0;
    }

    /**
     * Get the scores in memory
     *
     * @return {Array} The current scores
     */
    getScores = () => {
        return this.scoreManager.getScores();
    }

    /**
     * Add a new word
     *
     * @var {string} name The player name
     * @var {string} word The word to check
     * @return {number} The word length
     */
    addWord = (name, word) => {
        const points = this.isPalindrome(word);
        const score = { name, points };

        if (points) {
            this.scoreManager.addScore(score);
        }

        return score.points;
    }
}

module.exports = GameManager;