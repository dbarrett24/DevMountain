exports.validateUser = function(user) {
  let valid = true;
  let errorMessage = '';


  let keys = [
    'first_name', 
    'last_name', 
    'email', 
    'gender', 
    'language',
    'age',
    'city',
    'state',
    'type',
    'favorites'
    ];

  keys.forEach(key => {
    if (!user[key]) {
      valid = false;
      errorMessage += `Expected user to have ${key}.\n`
    }
  })

  Object.keys(user).forEach(key => {
    if (keys.indexOf(key) < 0) {
      valid = false;
      errorMessage += `User should not have ${key}.\n`
    }
  })

  if (!Array.isArray(user.favorites)) {
    valid = false;
    errorMessage += `User favorites should be an array.
Instead got ${typeof user.favorites}.\n`
  }

  if (!valid) {
    errorMessage = `User is invalid!\n ${errorMessage}`;
    throw new Error(errorMessage);
  }

  return valid;
}