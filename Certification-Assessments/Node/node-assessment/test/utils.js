import test from 'ava';
import {validateUser} from '../lib/utils';
import users from '../lib/userData.json';
import {getNewUser} from './support/testUsers';
import _ from 'lodash';

test('will validate a good user', t => {
  t.plan(1);
  let testUser = getNewUser();
  
  t.true(validateUser(testUser));
})

test('will invalidate improper users', t => {
  t.plan(1);
  let testUser = getNewUser();

  testUser.favorites = '';

  t.throws(() => {
    validateUser(testUser)
  });

})

test('Will invalidate if there is an id', t => {
  t.plan(1);

  t.throws(() => {
    validateUser(users[0])
  })
})