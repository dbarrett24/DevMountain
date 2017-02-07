# User Profiles
### Understanding Services

## Objective
### To better understand the relationship between Angular controllers and services.

## Step 1 - Review setup
You have some starting files to work with.  Spend a couple minutes looking through them and understanding what's going on.
You have an app, a controller, an index file, and a stylesheet.

## Step 2 - Our service
- Create an angular service file and an angular service inside it.  You can call in `mainService`.
- Make sure the app names match or it won't work.
- Test it by making sure there are no errors in your console.
- If Angular is broken you probably didn't add it to the index.html file.
- We will also want to load some data into our service. Copy the following data into the service:
``` json
[{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
},
{
    "id": 1,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
},
{
    "id": 2,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
}]
```

So now our service should look like this:

``` javascript
angular.module('userProfiles').service('mainService', function() {
  var data = 
  [
    {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ]
});
```

## Step 3 - Our Service
Our Service will do most of the app's heavy lifting. We want to keep our controllers as slim as possible. To do that we will need to create a function that delivers our data to our controller.
- Write a function in your service called "getUsers" that will `return` all of our user data to the controller.
  - Remember: functions made in a service can be tied to the service object via the "this" keyword. 

## Step 4 - Our Controller
The next thing we need to do is to create a function in our controller that retrieves the data from the service and prepares it to be sent to the view.

- In the controller.js file, create a function on the $scope object named "getUsers".
- Then, inject the mainService in the controller.
- Now, within the new getUsers function, we can access the mainService's getUsers function.
  - Let's set a variable called $scope.users equal to the result of the mainService's function.
  - Also, we should invoke our $scope.getUsers function after we have declared it or it won't run.

Now we have an object named "$scope.users" which represents our data. Because it is on the $scope object we can access it in our view by placing this within the body of our index.html, using `{{}}` binding.


# Step 5 - The View
Now we have our data in our view, but it's a little ugly. Let's do some simple configuration to make it a bit more user-friendly. Typically when you have an array of data, it's a good idea to use `ng-repeat` to organize it.

Now we should have some awesome user profiles! 

# Step 6 - Returning to the service
We want to be able to 'favorite' each user and have that saved and reflected.

* In the service, make a new function called `toggleFavorite`. It takes in an index number and uses it to modify the data at that index to change an 'isFavorite' property back and forth between true and false.
* In the controller, add that function to your controller's $scope (Don't invoke it, just assign it).
* In the html, Add a button inside the `ng-repeat` to each user that invokes the toggleFunction and passes in the user id.
`ng-click="toggleFavorite(user.id)`
Note: This only works because the user.id's match their index in the array of profiles.

* Last, we're going to use `ng-class` to style the html conditionally.  The format looks like this `ng-class="{class-name: javascriptExpression }`
Our code is going to look like this : `ng-class="{favorite: user.isFavorite}"`.  We're telling angular that when user.isFavorite is true to apply the .favorite class.  And when it's false to remove it.

# Final Code

```javascript
//controller
angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.getUsers = function(){
        $scope.users = mainService.getUsers();
    }
    
    $scope.getUsers();
    
    $scope.toggleFavorite = mainService.toggleFavorite;
})
```

```javascript
//service

angular.module('userProfiles').service('mainService', function(){
    var data =  [{
    "id": 0,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
    "isFavorite": true
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }];

    this.getUsers = function(){
        return data;   
    }
    
    this.toggleFavorite = function(userIndex){
        data[userIndex].isFavorite = !data[userIndex].isFavorite;
    }
})
```

```html
<!--index-->
<!DOCTYPE html>
<html ng-app="userProfiles">
<head>
    <meta charset="utf-8">
    <title>mini-userProfiles</title>
    <link rel="stylesheet" href="styles.css"></link>
</head>
<body ng-controller="MainController">
    
    <div ng-repeat="user in users" ng-class="{favorite: user.isFavorite}">
        <img ng-src="{{user.avatar}}"></img>
        <span>{{user.first_name}}</span>
        <span>{{user.last_name}}</span>
        <button ng-click="toggleFavorite(user.id)">+</button>
    </div>
    
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.js"></script>
     <script src="app.js"></script>
     <script src="controller.js"></script>
     <script src="service.js"></script>
</body>
</html>
```

## Copyright
© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

