const _ = require('lodash');

const newUser = {
  "first_name": "Foo",
  "last_name": "Bar",
  "email": "brett.caudill@brett.com",
  "gender": "male",
  "language": "klingon",
  "age": 60,
  "city": "Oceanside",
  "state": "California",
  "type": "admin",
  "favorites": [
    "angular",
    "node",
    "react"
  ]
}

exports.getNewUser = function() {
  return _.cloneDeep(newUser);
}