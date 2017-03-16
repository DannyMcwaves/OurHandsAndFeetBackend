// const express = require('express');
// 
// describe('GET /ping', function () {
//   var app, getBookStub, request, route;
//   
//   beforeEach(function () {
//     getBookStub = sinon.stub();
//     app = express();
//     route = proxyquire('../../model/book/book-router.js', {
//       '../../model/book/book-schema.js': {
//         getall: getBookStub
//       }
//     });
//     route(app);
//     request = supertest(app);
//   });
//   
//   it('should respond with 200 and a book object', function (done) {
//     var bookData = {
//       title: 'nodejs is awesome!'
//     };
//     
//     getBookStub.returns(userData);
//     
//     request
//     .get('/books/getall')
//     .expect('Content-Type', /json/)
//     .expect(200, function (err, res) {
//       expect(res.body).to.deep.equal({
//         status: 'ok',
//         data: userData
//       });
//       done();
//     });
//   });
// });
// 
