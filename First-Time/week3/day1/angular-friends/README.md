## Angular Friends

### 1) Introduction

#### 
<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

##### Fork and Clone this Repo

https://github.com/DevMountain/angular-friends

##### Objective 

Learn Basic Angular Concepts by creating a searchable, filterable list of friends

![alt text](https://github.com/DevMountain/angular-friends/blob/master/preview.png?raw=true, "Preview Image")

### 2) Install Angular

#### 

Setup your app and test it by displaying something from your controller's scope using double mustache brackets `{{ }}`


#### 

The angular script has already been included in the project.
In step one you will create an app variable and your FriendController. We have already provided the appropriate files and outlined a structure for you.
* Create an app for your angular app in app.js (this should be one line). You can name your app whatever your want.
* Create a FriendController in the FriendController.js file.
* Add the ng-app and ng-controller attributes to index.html in order to attach your controller to your html.
* Test your controller by adding a scope variable called 'test' with the value 'Hello World' and then bind the variable in index.html with `{{test}}` to see if your controller is working.

#### 
__app.js__
```
angular.module('app', []);
```

__FriendController.js__
```
angular.module("app").controller('FriendController', function($scope){
    $scope.test = "Hello World";
})
```

__index.html__
```
<!DOCTYPE html>
<html ng-app="app">
<head>
  <title>Angular Friends</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body ng-controller="FriendController">
    {{test}}
```


### 3) Load the friend Information

#### 

In step two we will paste the fake data into our application
* In the FriendController copy the data from friend-data.json into a scope variable called 'friends' in your FriendController
* Add a {{friends}} to the html page and refresh so that you can see all of your friend data show up.
* Delete {{friends}} from your html

#### 
__friendController.js__
```
angular.module("app").controller('FriendController', function($scope){
    $scope.friends = [
        {
            "name": "Preston McNeil",
            .....
        }, 
            ......
        ]
})
```


### 4) Display friend information

#### 

You now have a list of friends on your scope.  Display that list of friends on the screen.  There is some html code already in the index.html to help you get the look right.

Your data contains a url for an image for each person.  Make sure the image shows up as well!

#### 

* Use ng-repeat on the ul to create a new li for each person in the person array.

* Use `{{}}` bindings to fill the user's picture and data into the li content.
When doing this you can walk down objects using dot notation.

* For the images use ng-src not src. This prevents the browser from trying to load the image before angular has a chance to load it.

#### 
__index.html__
```
<ul>
    <li class='friend' ng-repeat="friend in friends">
        <img class="profile-pic" ng-src='{{friend.pic_square}}'>

        <h3>{{friend.name}}</h3>

        <div class="location">
            Location: {{friend.current_location.city}}, {{friend.current_location.state}}, {{friend.current_location.country}}, 
        </div>

        <div class="status">
            Status: {{friend.status.message}}
        </div>

        <div class="num-friends">
            Friends: {{friend.friend_count}}
        </div>
    </li>
</ul>
```



### 5) Add a search filter on the friends

#### 
A filter that will take a user-inputted string and only display models that contain that string.

#### 
Note that the filter searches all attributes of the model recursively.
* Use ng-model (on the input) to add an attribute called `searchTerm` to your FriendController scope to store the value of the search term inputted by the user.
* Add a filter to your ng-repeat attribute to filter on the search term.

#### 
__index.html__
```
 <input class="form-control" placeholder="Search Anything About Your Friends"
               ng-model="friendFilter">
               
 <li ng-repeat="friend in friends | filter: friendFilter">
 ```           

### 6) Split the filters into 2: name and location

#### 

Uncomment the block in step 5 in the index.html. Change your filter so that you are filtering by name or location specifically instead of by all fields.

#### 

Let's make our search more specific. Our input from Step 4 will now search only the name.
We will also create a location search input.
* Create a filter object and use two properties on that object.  One for the name and one for the location.
* Refactor the search you implemented in Step 4 to only search on a friend's name.
* Use our uncommented second input to add a friend's location to our filter object.
* Use our filter object in our ng-repeat filter.

Filtering works by matching the exact structure of the data you're searching. This includes both the property name and the value of that property.  This can also be nested and include child objects.  Searching on nested objects would mean your filter needs to be nested as well.

#### 
__index.html__
```
 <input class="form-control" placeholder="Search Name" ng-model="friendFilter.name">
 <input class="form-control" placeholder="Search Location" ng-model="friendFilter.current_location.name">
  
  ...
  
 <ul ng-repeat="friend in friends | filter: friendFilter">
  
```

### 7) Make the list sortable

#### 

Make your list sortable using the provided sort drop-down.

#### 

* Create two variables in your friend controller, `sortProp` for the attribute to sort on and `sortDirection` for an ascending vs descending sort.
* Add a value attribute (```value="something"```) to each item in the list of options. This value needs to equal the value of the property, on each friend object in your array, that you want to sort by.
* Bind the variables to their respective \<select> elements using ng-model.
* Add the ordering logic to your filter. 
** Sample syntax      | orderBy: isReversed + propertyName 
** See https://docs.angularjs.org/api/ng/filter/orderBy

#### 

__index.html__

```
<select class="input-medium" ng-model="sortProp">
    <option value="name">Name</option>
    <option value="friend_count">#Friends</option>
    <option value="current_location.city">City</option>
    <option value="current_location.state">State</option>
    <option value="current_location.country">Country</option>
</select>

<select class="input-medium" ng-model="sortDirection">
    <option value="+">Descending</option>
    <option value="-">Ascending</option>
</select>


....

<ul ng-repeat="friend in friends | filter: friendFilter | orderBy: sortDirection + sortProp ">
```



### 8) Black Diamond

#### 

* Use ng-options and an array to create the filter options


    

## Resources
### Resources
#### 
* Controller scopes http://jsfiddle.net/8pX7p/
* ng-repeat http://jsfiddle.net/PhCUk/1/
* Filter http://jsfiddle.net/WS8gS/1/
* http://docs.angularjs.org/guide/concepts


## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
