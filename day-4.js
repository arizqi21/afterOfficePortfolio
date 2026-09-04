require('dotenv').config();

const { beforeEach } = require('mocha');
const request = require('supertest');
const expect = require('chai').expect;

const expectedData = require('./expectedData.json');

let url = 'https://restful-booker.herokuapp.com';
let endpoint = '/booking';
let id = '3'
let newBookingId
let header = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

describe('day 4 - api testing', function(){
    // before(function(){
    //     console.log('ini before1');
    // });

    // beforeEach(function(){
    //     console.log('ini beforeEach');
    // })

    // after(function(){
    //     console.log('ini after1');
    // });

    // afterEach(function(){
    //     console.log('ini afterEach');
    // })
    
    context('sukses', function (){
        it('api testing dengan header', async function(){
            this.timeout(600000);
            
            let header = {
                'Accept': 'application/json'
            }
            
            let response = await request(url).get(`${endpoint}/${id}`).set(header);
            
            // console.log(response.body)
            expect(response.body.totalprice).to.eq(expectedData.expectedPrice);
        });

        it('bisa manggil variable env', async function(){
            let variableEnv = process.env;
            console.log(`dapetnya ini guys => ${variableEnv}`)
            // console.log(process.env)
        })
    })

    context('gagal', function(){  
        it('api testing dengan parameter query', async function(){
            this.timeout(600000);
            
            let response = await request(url).get(`${endpoint}`);
            // console.log(response.body);
        });
    })

    it('object ke string, terus ke object lagi', function(){
        let dataString = JSON.stringify(expectedData);
        let dataObject = JSON.parse(dataString)
        
        console.log(typeof dataString)
        console.log(typeof dataObject)
        console.log(typeof expectedData)
        console.log(dataObject)
    })

    it('manggil json', async function(){
        // let body = expectedData.body;
        // let body = {...expectedData}
        let body = JSON.parse(JSON.stringify(expectedData))
        body.expectedPrice = 2000
        body.body.firstname = 'maulia'

        // response.body

        console.log(body)
        console.log(expectedData)
    });

    context('e2e api testing', function(){
        it.only('createBooking', async function () {
            this.timeout(600000);

            // let header = {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // }

            let body = {
                "firstname" : "Cypress",
                "lastname" : "Ngoding",
                "totalprice" : 2022,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" :'2050-01-01',
                    "checkout" : '2050-03-01'
                },
                "additionalneeds" : "Dinner"
            }

            let response = await request(url).post(`${endpoint}`).set(header).send(body)
            console.log(response.body);
            // for (const key in response.body.booking) {
            //     const element = response.body.booking[key];

            //     console.log('element')
            //     console.log(element)
            //     console.log('body[key]')
            //     console.log(body[key])
            //     expect(element).to.eq(body[key])
            //     // console.log(key)
            //     // console.log(element)
            // }

            newBookingId = response.body.bookingid
            console.log(`booking id yg ke bikin itu >>>> ${newBookingId}`)


        });

        it.only('getBooking', async function(){
            this.timeout(600000)
            let responseGetId = await request(url).get(`${endpoint}/${newBookingId}`).set(header);
            console.log(responseGetId.body);
        })
        
        // it.only('terakhir', async function(){
        // })
    })
});

/*
describe1
before
beforeEach
it1
afterEach
beforeEach
it2
afterEach
after

describe2
before
*/

