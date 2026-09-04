const request = require('supertest');
const expect = require('chai').expect;

const url = 'https://fakestoreapi.com';
const productId = '3'
const endpoint = '/products'

const expectedPrice = 55.99

// const string1 = 'undur"'
// const string2 = "fa'jar"
// const string3 = `${string1} ${string2}`
// console.log(string1)
// console.log(string2)
// console.log(string3)

describe('API Testing', () => {
    context('get Product', () => {
      it('success', async () => {

        // let url
        // endpoint yang diexpect untuk jalan adalah /products/31
        let response = await request(url).get(`${endpoint}/${productId}`);
        // console.log(response.body);
        // expect(response.body.price).to.equal(expectedPrice)
        expect(130).to.equal(55.99)
      })  
    //   it('has login with gmail')  
    //   it('has login with facebook')  
    });

    // context('login gagal');
});