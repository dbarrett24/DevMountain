import test from 'ava';
import userCtrl from '../userCtrl.js';
import users from '../users';
import {reset} from '../lib/userData';
import _ from 'lodash';
import {getNewUser} from './support/testUsers';


test.afterEach(() => {
  reset();
})


test('readAll', t => {


  let results = userCtrl.readAll();
  t.true(Array.isArray(results));

  let result = results[0];

  t.truthy(result.first_name);
  t.true(typeof result.first_name === 'string');
  t.truthy(result.id);
  t.is(result.id, 1);
})

test('findUserById', t => {
  let result = userCtrl.findUserById(2);

  t.truthy(result);
  t.truthy(result.id);
  t.truthy(result.first_name);
  t.is(result.id, 2);
})

test('getAdmins', t => {
  t.plan(12);
  let result = userCtrl.getAdmins();

  t.truthy(result);
  t.true(Array.isArray(result), "Didn't get back an array...");
  t.is(result.length, 9, 'There should be 9 admins...');

  result.forEach(user => t.is(user.type, 'admin'));
})

test('getNonAdmins', t => {
  let result = userCtrl.getNonAdmins();
  t.truthy(result);
  t.true(Array.isArray(result), "Should have received an array")
  // t.is(result.length, 68);

  result.forEach(user => t.true(
    user.type == 'user' ||
    user.type == 'moderator'
  ));
})

test('getUsersByFavorite', t => {
  let result = userCtrl.getUsersByFavorite('dogs');

  t.truthy(result);
  t.true(Array.isArray(result));

  result.forEach(user => {
    t.true(_.includes(user.favorites, 'dogs'))
  });
})

test('getUsersByAgeLimit', t => {
  let result = userCtrl.getUsersByAgeLimit(50);

  t.truthy(result);
  t.true(Array.isArray(result));

  result.forEach(user => {
    t.true(user.age <= 50);
  })
})

test('findUserByQuery : last_name', t => {
  let result = userCtrl.findUserByQuery('last_name', 'Stone');
  
  t.plan(3);

  t.truthy(result)
  t.true(Array.isArray(result))

  result.forEach(user => [
    t.is(user.last_name, 'Stone')
  ])
})

test('findUserByQuery : state', t => {
  let result = userCtrl.findUserByQuery('state', 'Pennsylvania');

  t.truthy(result)
  t.true(Array.isArray(result))

  result.forEach(user => {
    t.is(user.state, "Pennsylvania")
  })
})

test('findUser By Query : Email', t => {
  let result = userCtrl.findUserByQuery('email', 'sgomeze@wikipedia.org');

  t.truthy(result)
  t.true(Array.isArray(result));

  t.is(result[0].id, 15);
  t.is(result[0].first_name, "Sarah");
})

test('createUser', t => {
  let testUser = getNewUser();
  let result = userCtrl.createUser(testUser);

  t.truthy(result);
  t.truthy(result.id);
  t.is(result.first_name, testUser.first_name);

  result = users.findOne('id', result.id);

  t.truthy(result);
})

test('updateUser', t => {
  userCtrl.updateUser(2, {first_name: 'foo'});

  let result = users.findOne('id', 2);

  t.truthy(result);
  t.is(result.id, 2);
  t.is(result.first_name, 'foo');
})

test.serial('removeUser', t => {
  t.truthy(users.findOne('id', 1));

  userCtrl.removeUser(1);

  t.falsy(users.findOne('id', 1));
})
