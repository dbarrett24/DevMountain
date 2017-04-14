import test from 'ava';
import request from 'supertest';
import app from '../server';
import sinon from 'sinon';
import userCtrl from '../userCtrl';

var sandbox = sinon;
test.before(() => {
  let stub = sandbox.stub(userCtrl, 'readAll')

  stub.withArgs().returns([{id: 1, first_name: 'foo'}]);

  stub = sandbox.stub(userCtrl, 'findUserById')

  stub.withArgs(1).returns({id: 1, first_name: 'foo'})
  stub.withArgs('1').returns({id: 1, first_name: 'foo'})

  stub = sandbox.stub(userCtrl, 'getUsersByFavorite')

  stub.withArgs('chocolate').returns([{id:1, favorites: ['chocolate']}])

  stub = sandbox.stub(userCtrl, 'getAdmins')

  stub.withArgs().returns([{id: 2, first_name: 'foo', type: 'admin'}])

  stub = sandbox.stub(userCtrl, 'getNonAdmins')

  stub.withArgs().returns([{id: 1, first_name: 'bar', type: 'user'}])

  stub = sandbox.stub(userCtrl, 'updateUser')

  stub.withArgs(1, {first_name: 'foo'}).returns({id: 1, first_name: 'foo'})
  stub.withArgs('1', {first_name: 'foo'}).returns({id: 1, first_name: 'foo'})

  stub = sandbox.stub(userCtrl, 'createUser')

  stub.withArgs(
    {
      first_name:'foo',
      last_name: 'bar',
      email: 'an@email.com',
      gender: 'unknown',
      language: 'english',
      age: 12,
      city: 'Amsterdam',
      state: 'Nebraska',
      type: 'admin',
      favorites: ['chocolate']
    }).returns(
      {
        id: 1,
        first_name:'foo',
        last_name: 'bar',
        email: 'an@email.com',
        gender: 'unknown',
        language: 'english',
        age: 12,
        city: 'Amsterdam',
        state: 'Nebraska',
        type: 'admin',
        favorites: ['chocolate']
      }
    )

    stub = sandbox.stub(userCtrl, 'removeUser')

    stub.withArgs(1).returns({id: 1, first_name: 'foo', type: 'admin'})
    stub.withArgs('1').returns({id: 1, first_name: 'foo', type: 'admin'})

})

test.after.always(() => sandbox.restore())

test('GET: /api/users', async t => {
  let res = await request(app)
    .get('/api/users')
    .expect(200)

  t.true(Array.isArray(res.body), "Didn't get back an array");

  res = res.body[0];

  t.is(res.id, 1);
  t.is(res.first_name, 'foo');
})

test('GET: /api/users/ + userId', async t => {
  let res = await request(app)
    .get('/api/users/1')
    .expect(200)

  t.true(typeof res.body === 'object', "Should return the user object");
  t.true(!Array.isArray(res.body), "Shouldn't be an array");

  res = res.body;
  t.is(res.id, 1, "Should return the correct user");
  t.is(res.first_name, "foo", "Should return the entire user object");
})

test('GET: /api/admins', async t => {
  let res = await request(app)
    .get('/api/admins')
    .expect(200)

  t.true(Array.isArray(res.body), "Didn't receive an array");

  res = res.body[0];

  t.is(res.id, 2);
  t.is(res.first_name, "foo");
  t.is(res.type, "admin", "Should return only admins");
})

test('GET: /api/nonadmins', async t => {
  let res = await request(app)
    .get('/api/nonadmins')
    .expect(200)

  t.true(Array.isArray(res.body), "Didn't receive an array");

  res = res.body[0];

  t.is(res.id, 1);
  t.is(res.first_name, "bar");
  t.is(res.type, "user");
})

test('PUT: /api/users/ + userId', async t => {
  let res = await request(app)
    .put('/api/users/1')
    .send({'first_name': 'foo'})
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)

    t.true(typeof res.body === 'object', "Should return the user object");
    t.true(!Array.isArray(res.body));

  res = res.body;

  t.is(res.id, 1, "Should return the entire updated user. Make sure you are using bodyParser");
  t.is(res.first_name, "foo", "Should return the entire updated user");
})

test('POST: /api/users', async t => {
  let res = await request(app)
    .post('/api/users')
    .send({
      first_name:'foo',
      last_name: 'bar',
      email: 'an@email.com',
      gender: 'unknown',
      language: 'english',
      age: 12,
      city: 'Amsterdam',
      state: 'Nebraska',
      type: 'admin',
      favorites: ['chocolate']
    })
    .expect(200)

    t.true(typeof res.body === 'object', "Should return the updated user object");
    t.true(!Array.isArray(res.body), "Shouldn't be an array");


  res = res.body;

  t.is(res.id, 1, "Should return the entire updated user. Make sure you are using bodyParser");
  t.is(res.first_name, "foo", "Should return the entire updated user");
  t.is(res.type, "admin", "Should return the entire updated user");
})

test('DELETE: /api/users/ + userId', async t => {
  let res = await request(app)
    .delete('/api/users/1')
    .expect(200)

    t.true(typeof res.body === 'object', "Should return the deleted user.");
    t.true(!Array.isArray(res.body), "Shouldn't be an array.");


  res = res.body;

  t.is(res.id, 1, "Should return the entire deleted user. Make sure you are using bodyParser");
  t.is(res.first_name, "foo", "Should return the entire deleted user.");
  t.is(res.type, "admin", "Should return the entire deleted user.");
})
