# Intermediate Node Assessment

## Set up your node server

* The file must be called server.js
* There is a package.json included with dependencies in it, you should know what to do.
* It must use express, and body parser (Set up the app and use the body parser)
* You will want to require the included `accounts.json` file  `var accounts = require('./accounts.json');`
* At the bottom of the file you must `module.exports` your express app.
* Listen on port 3000.


## Setup your endpoints
Create the following endpoints in `server.js` using express.

* Every endpoint will be using the accounts collection, found in `accounts.json`.
* Each endpoint in this readme is followed by the path that will be tested. For example, 'Get all accounts.' will be tested by doing a `GET` request to `/api/accounts`.
* You can test your work by running `npm test` in your CLI.
* When you are finished, you should have `9 tests passed`.
* Be sure to use the correct method (GET, POST, PUT, or DELETE) and the correct path (i.e. `/api/accounts`).
* All responses must return a status of 200, unless otherwise specified

##### Make the following endpoints.

1.  Get all accounts. Return all accounts from the accounts array.
   `GET: /api/accounts`

2.  Get all accounts by `card_type`. You will receive the `card_type` as a query (visa, mastercard, etc).  Return an array of all accounts that have the same type specified in the query. Query params are case sensitive, so '?cardtype=VISA' will not match a 'visa' in accounts.
   `GET: /api/accounts?cardtype=visa`

3. Find one account by id. Use the url params to get the id. Make sure that a get request for an account that does not exists returns a 404 status and a message that says 'account could not be found'.
    `GET: /api/accounts/` + accountId

4. Create an new account.  `POST: /api/accounts`

* You will receive the data on the body.  
* All accounts will need an id property, but it will not be provided to you.  Manage a value so that it increments each time.  
* The 'approved_states' property should be initialized as a collection (array) containing the approved state sent in the body.
* Return a valid status code and the new account object you created (with the id on it).  

6.  Change an account's card type. The card type will be sent in the body `{card_type: "New card type"}`. Update the account in your array and then return a valid status code and the updated account object.
   `POST: /api/accounts/cardtype/` + accountId

7.  Add to an accounts approved states. Use params to get an account by id. You will receive the data on the body `{add: 'New state'}`. Return a valid status code.
   `POST: /api/accounts/approvedstates/:accountId/`

8. Remove from an accounts approved states. Use delete REST method. You will receive the account id in the url params. You will receive the state to delete in the query. You will need to search your array and splice it out. Note, this will not work unless #5 is working correctly.
   `DELETE: /api/accounts/approvedstates/:accountId/` + `?state=` + statename.

9.  Ban (delete) an account. Use REST method delete and the query params to delete an account by their id number.
   `DELETE: /api/accounts/` + accountId

10. Change your get all accounts (#1) endpoint so that it uses queries. Allow queries for firstname, lastname, balance, cardtype.

11. Update one account by id.  (You'll need to find your account then use a for in loop to update properties).
   `PUT: /api/accounts/` + accountId
