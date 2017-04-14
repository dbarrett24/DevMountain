import test from 'ava';
import userData from '../lib/userData.js';

test('will reset users', t => {

  let users;
  userData.subscribe(newUserData => {
    users = newUserData
  })

  users[0].foo = 'bar';

  t.is(users[0].foo, 'bar');

  userData.reset();

  t.falsy(users[0].foo);

  t.is(users[0].id, 1);

  users.splice(0, 1);

  t.is(users[0].id, 2);

  userData.reset();

  t.is(users[0].id, 1);
})