# User Profiles

Today we will be creating a user profiles page that tracks the current user on the back-end and displays information specific to that user. This app will serve
all of our front end files, preventing the need for `live-server` or `http-server`. By the end of the project you will be comfortable using express sessions,
hiding application secrets, and serving static files from the back-end.

## Step 1: Basic setup

The basics of our `server.js` setup should be familiar to you by now, but we will be installing some new dependencies. Run an `npm init` then `npm install
--save` express, express-session, body-parser, and cors. Don't forget to create a `.gitignore` file ignoring your `node_modules` folder.

* Express-session is what will allow us to track users as they navigate about the site
* CORS lets us avoid having to write custom middleware for headers

Require your dependencies and initialize express. Run the `app.use` method on `bodyParser.json()` and set the app to listen on a port of your choice. Run
`nodemon server.js` and ensure everything is working so far.

--------

Once everything is working we can set up the our the first of our new dependencies: CORS. The most simple usage of CORS is to simply `app.use(cors())`. This
will allow cross-origin requests from any domain, across all of your endpoints. This would accomplish roughly the same thing as our custom `addHeaders`
middleware from yesterday. The primary drawback to this method is the insecurity; any domain can freely make requests to our server. So we will be configuring
CORS to whitelist only a specific origin.

To do this we need to create a new object in our `server.js` containing some simple configuration information. Note that you will need to replace the port
number with your selected port number.

```javascript
var corsOptions = {
	origin: 'http://localhost:8999'
};
```

Now we can call `app.use(cors(corsOptions));` and we will only be accepting requests from our selected origin. It is also worth mentioning that CORS doesn't
have to be used globally, it can be passed to individual routes as middleware.

```javascript
app.get('/example', cors(), function( req, res ) {
  //This route is CORS enabled across all origins
});

app.get('/example-two', function( req, res ) {
  //This route is not CORS enabled
});
```

For our purposes we will be using CORS across all of our routes, so we will use the `app.use` method.

Next we can setup express-session. Express-session lets us create persistent sessions inside of our app so we can send our users information that is specific to
them individually. Before we start using express-session we need to create a `config.js` file and require it in our server. This file should export an object
containing a `sessionSecret` property with a value of a random string. This session secret is what our app uses to sign the sessions ID cookie. For security
reasons **it is important to ensure that this file is added to your `.gitignore`.** You can do this in one line from the terminal using`echo 'config.js' >> .gitignore`, or look into Git filters.

`config.js`:
```javascript
module.exports = {
	sessionSecret: 'keyboard cat'
};
```

Once your `config.js` is created and required in your `server.js` file we can now do:

```javascript
app.use(session({ secret: config.sessionSecret }));
```

This will allow express-session to run on all endpoints with our chosen secret being used to track cookies.

## Step 2: Controllers, endpoints, and data

To keep our app's structure clean, let's create a new folder named `controllers` and add two files: `profileCtrl.js` and `userCtrl.js`. Require these
controllers in your `server.js`, don't forget that you have to provide a file path when requiring your own files!

We'll need some data inside our controllers to check against and send to our users:

```javascript
// userCtrl.js
var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
```

```javascript
// profileCtrl.js
var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];
```

We'll start in `userCtrl.js`. First create your module.exports object. The data from above will live outside of this object.

* Create a method on our exports object named `login`, this method should loop through the users array, find the user that matches `req.body.name` and confirm
  that the `req.body.password` matches the user's password. (If you use .filter instead, be aware that it will always return an array, so you'll need to grab what is in index 0.)
* If we find a match we need to set `req.session.currentUser` equal to to the correct user object and `res.send({ userFound: true });`.
* If we don't find the user, we will need to `res.send({ userFound: false });`.
* This function will need an endpoint, let's create a 'POST' endpoint on the path `'/api/login'` and have it call our newly created login method.

Things to note:

* Because of our `app.use(cors(corsOptions));` we don't need to set headers inside of our login function. The CORS library is handling that for us on every
  request.
* We have set a property on the `req.session` equal to our user. This lets us continue to track which user is currently active.

___
On to `profileCtrl.js`. Again, create your module.exports object.

Here we will need a simple method on our exports object that pushes every profile that is in the current user's (now stored as `req.session.currentUser`) `friends` array. (Hint: You'll need to loop over the currentUser's friends and also loop over (or filter) the profiles array.) Then `res.send`
an object back containing our new array and the current user. The response object should be structured something like this:

```javascript
{
  currentUser: req.session.currentUser,
  friends: yourArrayOfFriendObjects
}
```

This function will need an accompanying endpoint in your `server.js`, so add an `app.get` endpoint with a path of `'/api/profiles'.

## Step 3: Serving static files

Now you may have noticed that there was some front-end code included with the project, but at the beginning of the project it was mentioned that we would no
longer need to use `http-server` or `live-server`. We are going to send all of our static front-end files from our server.

This functionality is built into express with the `express.static()` method. All we need to do to begin sending our static files is add this
line to our `server.js`.

```javascript
app.use(express.static(__dirname + '/public'));
```

What we are doing here is utilizing express's built in `static` method to serve static files from the directory we pass in. `__dirname` is a node built-in, and
is simply the name of the directory our server is being run from. (Try to `console.log(__dirname)` to see exactly what this is).

## Step 4: Hooking up to the front end.

Take a few minutes to browse through the current `.js` files in your public folder, you'll notice there are several areas containing `FIX ME`'s. Let's move
through and set up our front end so it is actually functional!

To start, you'll notice that our `mainCtrl.js` is calling the `login` function inside of our `friendService.js` that contains a `FIX ME`. This function should post to
your `login` endpoint, sending the `user` object we received from our controller.

Next, we need to write the `getFriends` method in `friendService.js` so that it sends a `GET`
request to our `/api/profiles` endpoint.

Lastly, in `profileCtrl.js` you will need to assign the correct values (coming from the `getFriends` method in your service) to `$scope.currentUser` and `$scope.friends`.

--------

Well done! Try logging in as several different users and seeing the different friend lists, all with very minimal front-end code. This was all done simply by
tracking our user's session on the back-end.

## Step 5 (Black Diamond): Make it a bit more interactive

* Allow users to add or remove friends.
* Add a settings view specific to the current user, where they can change their name or password.


## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.
git
