const chai = require('chai');
const { describe, it } = require('mocha');
const app = require('../../index');
const chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

describe('/GET getScores', () => {

    it('It should return the word length', (done) => {
        chai.request(app)
            .get('/api/getScores')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});

describe('/POST submitEntry', () => {
    it('It should return zero', (done) => {
        const data = {
            name: 'Edu',
            word: 'Never odd and even',
        };
        chai.request(app)
            .post('/api/submitEntry')
            .send(data)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.text).to.equal('0');
                done();
            });
    });
});

describe('/POST submitEntry', () => {
    it('It should return the word length', (done) => {
        const data = {
            name: 'Edu',
            word: 'Never odd or even',
        };
        chai.request(app)
            .post('/api/submitEntry')
            .send(data)
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.text).to.equal('14');
                done();
            });
    });
});