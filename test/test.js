const { expect } = require('chai');
const chai = require('chai');
//Sender HTTP-request
const chaiHttp = require('chai-http');
//const { describe } = require('mocha');
const server = require('../server')
chai.use(chaiHttp);

describe('login', () => {
    describe('POST /login2', () => {
        it('Test af login', (done) => {
            //sende request til vores express server
            chai
            //Vores variabel
            .request(server)
            //Vores login endpoint
            .post('/login2')
            .send({email:"bob", password:"123"})
            .end((err, res) => {
                //Forventer at der ikke er en fejl, når jeg sender request
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                done();
            });
        });
    });
});

describe('login', () => {
    describe('POST /login2', () => {
        it('Test af login', (done) => {
            //sende request til vores express server
            chai
            //Vores variabel
            .request(server)
            //Vores login endpoint
            .post('/login2')
            .send({email:"bobo", password:"1234"})
            .end((err, res) => {
                //Forventer at der ikke er en fejl, når jeg sender request
                expect(err).to.be.null;
                //Skal retunere vores array
                expect(res.status).to.equal(400);
                done();
            });
        });
    });
});


