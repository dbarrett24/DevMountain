## Overview
### Objective
####

<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

ChatRoom
========

Build a simple chatroom using Angular, services, and the $http service

We're going to be dealing with a 'back-end' and now all of our data is going to persist. For example when you refresh, the data will still be there.

We're going to be building a basic chatroom so by the end of class, you'll all be able to chat with each other. Feel free to get creative with the styling once you finish the core project.

![alt text](https://github.com/DevMountain/chatroom/blob/master/preview.png?raw=true)


The concepts this project will cover are

1. Angular Services
2. $http
3. Injecting a service into a controller

## Instructions

### Clone and Dissect the Repo
####
* Fork and clone this repository.
* You should only touch mainCtrl.js and messageService.js, everything else is already set up for you.
* Although very convenient, because other parts of the application are already set for you, you need to understand what that code is doing in order to work with it.
* Go and check out the index.html page. You'll notice that in the message-container class there's an `ng-repeat` looping over messages. This means that somehow, you need to have 'messages' on the scope.  Each message should have a 'message' property.


### Build your messageService
####
* In Angular we use 'services' to outsource some of our heavy lifting. That's exactly what we're going to do with this app.
* Open up messageService.js and read the instructions. The bigger picture is that this service is going to have two methods, `getMessages` and `postMessage`. `getMessages` will get the chats from our backend, and `postMessage` will be able to post new messages to the backend.


### Tie in your Controller
####
* Now that your messageService is finished, we somehow need a way to tie the data we're getting from messageService.getMessages to our scope to show in our view. This sounds like the perfect use case for a controller.
* Open up mainCtrl.js and follow the instructions. The bigger picture here is that we're going to utilize the methods that we added to messageService to do some of the 'heavy' lifting, then just add what we get back from those methods to the $scope.


### Review
####
* If all went well you should be able to open up your index.html page and chat with those who also finished. If you got this far, great job! Review angular promises and $http. They're fundamental to any apps built with Angular.

### Additional HTTP calls
####
* The server also allows users to send and receive cookies from HTTP requests.
* Add a new POST request method to your service called postCookie URL:"https://practiceapi.devmounta.in/api/cookies" to share a new cookie with your fellow coders.
* Add a new GET request method to your service called getCookies URL:"https://practiceapi.devmounta.in/api/cookies" to see what cookies have been shared.


### Add Some Flavor
####
* Right now it just shows the message. The object you get back from the server also has a createdAt property. Change the UI to show the message, and what time it was created at in normal, human readable formats.  The server also assigns each user a Cookie type.  Change the UI to display which type of cookie each message came from.
* Make the Chatroom filterable by message.
* Be able to order the chatroom by date posted. Right now the default behavior placing new messages at the bottom, but we want the newest one at the top. Check out the 3rd example [here](http://www.w3schools.com/angular/ng_filter_orderby.asp).
* Make the styling look more...professional.

## Contributions
###
####
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright
###
####
© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
