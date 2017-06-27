import test from 'ava';
import request from 'supertest-as-promised';
import app from './server';
import Faker from 'faker';
import accounts from './accounts.json';

test('Get all accounts', async t=> {
  t.plan(3)
  const res = await request(app)
    .get('/api/accounts')
    .expect(200)

  t.is(res.status, 200, 'Status is not 200');
  t.deepEqual(res.body[0], accounts[0], "No account returned");
  t.truthy(res.body, 'Something is wrong with the response body');
})

test('Get account by card type', async t => {
  let req = await request(app)
    .get('/api/accounts?cardtype=jcb')
    .expect(200)

  t.truthy(req.body, 'Request body not found');

  req.body.forEach(function(account) {
    t.is(account.card_type, 'jcb')
  })

  req = await request(app)
    .get('/api/accounts?cardtype=visa')
    .expect(200)

  t.truthy(req.body);

  req.body.forEach(account => {
    t.is(account.card_type, 'visa');
  })

  req = await request(app)
    .get('/api/accounts?cardtype=foo')

  t.is(req.status, 200);
  t.falsy(req.body[0])
})

test('Create new account', async t => {
  let colLength = accounts.length;
  let newaccount = fakeaccount();
  const req = await request(app)
    .post('/api/accounts')
    .send(newaccount)

  t.is(req.status, 200, 'Make sure you are using bodyParser');
  t.truthy(Array.isArray(req.body.approved_states))
  t.is(true, accounts.length > colLength, 'account was not added correctly');

})

test('Change an accounts card type', async t => {
  let newaccount = fakeaccount();
  let id;
  let req = await request(app)
    .post('/api/accounts')
    .send(newaccount)

  t.is(req.status, 200);
  t.truthy(req.body.id);
  id = req.body.id;

  req = await request(app)
    .post('/api/accounts/cardtype/' + id)
    .send({card_type: 'bluecard'})

  t.is(req.status, 200, 'error changing card_type to bluecard');

  req = await request(app)
    .get('/api/accounts/' + id)

  t.is(req.status, 200);
  t.truthy(req.body.card_type);
  t.is(req.body.card_type, 'bluecard');

  req = await request(app)
    .post('/api/accounts/cardtype/' + id)
    .send({card_type: 'greencard'})

  t.is(req.status, 200, 'error changing card_type to greencard')

  req = await request(app)
    .get('/api/accounts/' + id)

  t.is(req.status, 200);
  t.truthy(req.body.card_type);
  t.is(req.body.card_type, 'greencard');
})

test('add to an accounts approved states', async t => {
  let newaccount = fakeaccount();
  let id;

  // CREATE A NEW account
  let res = await request(app)
    .post('/api/accounts')
    .send(newaccount)

  t.is(res.status, 200);
  t.truthy(res.body.id);
  id = res.body.id;

  // ADD TO approved_states
  res = await request(app)
    .post('/api/accounts/approvedstates/' + id)
    .send({add: 'foo'})

  t.is(res.status, 200);

  // CHECK IF account HAS NEW FORUM
  res = await request(app)
    .get('/api/accounts/' + id)

  t.is(res.status, 200);
  t.is(true, Array.isArray(res.body.approved_states));

  t.is(
    true,
    res.body.approved_states.reduce((a, b) => {
      if (b === 'foo') return true;
      else return false;
    }, false)
  )

})

test('remove from an accounts approved_states', async t => {
  let newaccount = fakeaccount();
  let id;

  // CREATE NEW FORUM
  let res = await request(app)
    .post('/api/accounts')
    .send(newaccount)


  t.is(res.status, 200);
  t.truthy(res.body.id);
  id = res.body.id;

  // ADD TO account approved_states
  res = await request(app)
    .post('/api/accounts/approvedstates/' + id)
    .send({add: 'foo'})

  t.is(res.status, 200);

  // Remove from account approved_states
  res = await request(app)
    .delete('/api/accounts/approvedstates/' + id + '?state=foo')

  t.is(res.status, 200);

  // Check that forum has been deleted
  res = await request(app)
    .get('/api/accounts/' + id);

  t.is(res.status, 200);
  t.true(Array.isArray(res.body.approved_states));

  res.body.approved_states.reduce((a,b) => {
    return b !== 'foo';
  }, false)
})

test('ban(delete) an account', async t => {
  let account = fakeaccount();

  // Create a new account
  let res = await request(app)
    .post('/api/accounts')
    .send(account)

  t.is(res.status, 200);
  t.truthy(res.body.id);
  account.id = res.body.id;
  // Delete that account
  res = await request(app)
    .delete('/api/accounts/' + account.id)

  t.is(res.status, 200);

  // Make sure account does not exist
  res = await request(app)
    .get('/api/accounts/' + account.id)

  t.is(res.status, 404, 'Make sure that when an account is not found that the server returns 404');
  t.truthy(res.body);
  t.falsy(res.body[0], 'account still exists, delete endpoint is not working');

})

test('Use queries for get all accounts', async t => {
  // first name
  let res = await request(app)
    .get('/api/accounts?firstname=Jack')

  t.is(res.status, 200);
  t.truthy(res.body);
  res.body.forEach(account => {
    t.true(account.first_name == "Jack", 'first name query failed')
  })

  // last name
  res = await request(app)
    .get('/api/accounts?lastname=Morgan')

  t.is(res.status, 200);
  t.truthy(res.body);
  t.truthy(res.body[0], 'Nothing returned from last name query');
  res.body.forEach(account => {
    t.true(account.last_name === 'Morgan', 'last name query failed');
  })

  // balance
  res = await request(app)
    .get('/api/accounts?balance=978.52')

  t.is(res.status, 200);
  t.truthy(res.body);
  t.truthy(res.body[0], 'Nothing returned from balance query');

  res.body.forEach(account => {
    t.true(account.balance == '978.52', 'balance query failed')
  })


})

test('Update one account', async t => {
  let account = fakeaccount();

  let res = await request(app)
    .post('/api/accounts')
    .send(account)

  t.is(res.status, 200);
  t.truthy(res.body.id);
  account.id = res.body.id;

  // Update account
  res = await request(app)
    .put('/api/accounts/' + account.id)
    .send({
      first_name: 'foo',
      last_name: 'bar'
    })

  t.is(res.status, 200, 'Check that put endpoint exists');

  // Check that update was successful
  res = await request(app)
    .get('/api/accounts/' + account.id)

  t.is(res.status, 200);
  t.truthy(res.body);
  t.is(res.body.first_name, 'foo', 'account was not changed');
  t.is(res.body.last_name, 'bar', 'account was not changed');

})






function fakeaccount() {
  let cardtypes = ['visa', 'jcb', 'bluecard', 'orangecard'];
  let states = ['Utah', 'Arizona', 'Texas'];
  function getRand(l) {
    return Math.floor(Math.random() * l);
  }
  return {
    first_name: Faker.name.firstName(),
    last_name: Faker.name.lastName(),
    card_type: cardtypes[getRand(cardtypes.length)],
    card_number: Math.floor(Math.random() * 70) + 20,
    balance: Math.floor(Math.random() * 70) + 20,
    approved_states: states[getRand(states.length)]
  }
}
