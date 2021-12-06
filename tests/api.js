
const { expect } = require('chai');
const chai = require('chai');
//Sender HTTP-request
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const app = require('../test')
chai.use(chaiHttp);

describe('API', () => {
    describe('GET /', () => {
        it('Skal ikke retunere et array', (done) => {
            /*const user = {
                username: 'bob',
                password: '123'
            }
            */
            //sende request til vores express server
            chai
            //Vores variabel
            .request(app)
            //Vores login endpoint
            .get('/')
            .end((err, res) => {
                //Forventer at der ikke er en fejl, når jeg sender request
                expect(err).to.be.null;
                //Skal retunere vores array
                expect(res.status).to.equal(200);
                expect(res.body).to.not.be.an('array');

                expect(user).to.have.property('username').eq('bob')
                //Skal
                done();
            });
        });
    });
});

//Skal retunere vores array
            /*
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body.length).to.equal(2);
                */

/*
describe("POST /all", () => {
    it("Det skal vise user info", (done) => {
        const bruger = {
            username: "bob",
            password: "123"
        }
        chai
        .request(server)
        .post("/all")
        .send(bruger)
        .end((err, res) => {
            expect(err).to.be.null;
    
        }
        )
    })
})
*/