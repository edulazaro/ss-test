const chai = require('chai');
const { describe, it } = require ('mocha');
const GameManager = require('../../services/GameManager');

const expect = chai.expect;

describe('GameManager isPalindrome', () => {

    it('It should return zero points for an invalid palindrome', (done) => {
        const gameManager = new GameManager();
        const result = gameManager.isPalindrome('La vel');
        expect(result).to.be.equal(0);
        done();
    });


    it('It should return zero points for an empty string', (done) => {
        const gameManager = new GameManager();
        const result = gameManager.isPalindrome('');
        expect(result).to.be.equal(0);
        done();
    });

    it('It should return the length of a palindrome', (done) => {
        const gameManager = new GameManager();
        const result = gameManager.isPalindrome('Le vel');
        expect(result).to.be.equal(5);
        done();
    });
});