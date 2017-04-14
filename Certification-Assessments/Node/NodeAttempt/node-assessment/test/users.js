import test from 'ava';
import users from '../users';
import userDataCtrl from '../lib/userData';
import testUsers from './support/testUsers';
import _ from 'lodash';

let userData;
userDataCtrl.subscribe(_userData => {
  userData = _userData;
})

test.afterEach(t => {
  userDataCtrl.reset();
})

test('will get all users if find is invoked without any arguments', t => {
  t.plan(2);

  let result = users.find();

  t.true(Array.isArray(result));
  t.deepEqual(result[0], userData[0]);
})

test('will find a user by key and value', t => {
  t.plan(5);


  let result = users.findOne('id', 3);

  t.false(Array.isArray(result));
  t.true(typeof result === 'object');

  t.deepEqual(
    _.find(userData, user => user.id == 3), 
    result
  );

  result = users.findOne('id', 2);

  t.deepEqual(
    _.find(userData, user => user.id == 2), 
    result
  );

  result = users.findOne('id', 1);

  t.deepEqual(
    _.find(userData, user => user.id == 1), 
    result
  );

})

test('will return null if nothing is found', t => {
  t.plan(1);
  let result = users.findOne('foo', 'bar');

  t.falsy(result);
})

test.serial('will add a user', t => {
  let testUser = testUsers.getNewUser();

  let result = users.add(testUser);


  t.truthy(result.id);

  result = users.findOne('id', result.id);

  t.is(result.first_name, testUser.first_name);
})

test('will reject an invalid user with an invalid key', t => {
  let testUser = testUsers.getNewUser();

  testUser.foo = 'bar';

  let result = t.throws(() => {
    users.add(testUser);
  })


  t.regex(result, /^Error/);
  t.regex(result, /User should not have foo/);
})

test('will reject an invalid user missing a key', t => {
  let testUser = testUsers.getNewUser();

  delete testUser.first_name;

  let result = t.throws(() => {
    users.add(testUser)
  })

  t.regex(result, /^Error/)
  t.regex(result, /Expected user to have first_name\./)
})

test.serial('will remove user by id', t => {
  t.plan(2);

  t.truthy(users.findOne('id', 1));
  users.remove('id', 1);

  let result = users.findOne('id', 1);

  t.falsy(result);
})

test.serial('will not remove any users if none match', t => {
  let l = users.find.length;

  users.remove('foo', 'bar');
  t.is(users.find.length, l);

})

test('find will match all users', t => {
  t.plan(11);
  t.truthy(users.find);

  let result = users.find('language', 'klingon');

  result.forEach(user => {
    t.is(user.language, 'klingon');
  })
})

test('find will return null if no users match', t => {
  let result = users.find('foo', 'bar');

  t.falsy(result);
})

test.serial('ids will not conflict', t => {
  let ids = users.find().map(user => user.id);

  let newUser = users.add(testUsers.getNewUser());

  ids.forEach(id => {
    if (id == newUser.id) {
      t.fail();
    }
  })

  t.pass();
})

test.serial('will update a user record', t => {
  users.update('id', 1, {first_name: 'billy-bob'});

  let result = users.findOne('id', 1);

  t.truthy(result);
  t.is(result.first_name, 'billy-bob');

  users.update('id', 2, {email: 'foo@bar.com'});

  result = users.findOne('id', 2);

  t.truthy(result);
  t.is(result.email, 'foo@bar.com');
})