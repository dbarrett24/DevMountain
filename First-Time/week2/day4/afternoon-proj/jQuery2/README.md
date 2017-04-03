<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

Listo with jQuery
=================

#Objective

Create an interactive "to-do" list with jQuery

With this to-do app, users will be able to:

* Create new todo items.

* Move the items from 'New' to 'In Progress' to 'Archived' to deleted
* Save list items to our browser's local storage so that it persists, even if we close the browser

![alt text](https://github.com/DevMountain/jQuery2/blob/master/jQuery2%20Example.png?raw=true, "Title Text")


##Step 1

###Our Environment

First, fork and clone this repo, so that we can access this README during our development. For the sake of simplicity, we have created the index.html file and added some markup for the ui. So, no need to change it yet.

Now, let's create a folder called 'app.' This is where we will store the guts of our app. Inside the app folder let's make a folder called 'scripts.' This is where we will store all our Javascript.

Inside the js folder we will create our main Javascript named 'scripts.js'.

Now that we've made our basic files, we want to get them all hooked together in our index.html file.

*Remember: a lot of times errors in the beginning of a project are because the files are not properly linked.

*Remember: your browser will read your index.html from top-to-bottom, left-to-right. This means if you put your jQuery under your scripts.js file you will end up with an error.*


#Step 2
###Time For jQuery

Now that we have our environment set up and our markup written, it's time to use some jQuery. 

The first thing we want to do is go into our scripts.js file and create our document ready function:

*scripts.js*

```javascript

$(document).ready(function() {
  //ALL CODE GOES IN HERE
});

```

This allows us to initialize our jQuery code when the document loads. It might look a bit weird, but it's what we do when we're working with jQuery. Remember, all of the code in our scripts.js will go within the curly braces of the above function.

###Basic Architecture

We are going to be creating a todo list. So the easiest way to store a list of things is to create an array!

*scripts.js*
```javascript
var listo = [];
```

Listo will be our main array for storing tasks.

Now, we don't want to just store strings. Instead, we will store Task objects into our array. Because our users are going to be making a lot of Tasks we should perhaps streamline the object creating process with a **constructor**

*scripts.js*
```javascript
var Task = function(task) {
	this.task = task;
	this.id = 'new';
}
```


We now have an array to push our tasks onto and a task constructor so our users can create object tasks for their lists.

The next thing we want is the ability for a user to write a todo task into our index.html and save it to the array.

Let's hop over to our index.html and create a space for them to type in their list items.

*index.html*
```html
<section id="newTaskForm">
	<h3 class="todo-form-title">New To Do </h3>
	<div  class="form-input-container">
		<img id="cancel" src="./img/icons/cross.png" alt="close form icon">
		<input id="newItemInput" class="todo-title-input form-input" type="text" placeholder="To-Do Title">
		<button  id="saveNewItem" class="complete-todo-button">Add To Do</button>
	</div>
</section>
```

This will create a form with a save and cancel button. We want to give the save and cancel buttons IDs so that we can call them with jQuery. We also want to give the form an ID so it can be accessed as well.

You will come to see that most elements in our html will have an ID. That is so that jQuery has a lot of hooks to make contact with what it is looking to manipulate.

One more thing we should do is add a script tag at the bottom of our page that will load our jQuery into the index.html page for us.

*index.html*
```html
<script
src="./app/scripts/scripts.js">
</script>
```

###Making our addTask function

When we enter something into the input field and hit save, we want to create an object and push it to our array.

Let's make a function to do that for us.

*scripts.js*

```javascript
var addTask = function(task) {};
```

We don't want people to be able to create blank tasks, that would be a little frustrating. Let's put a conditional in the function so that it only runs if our task is there.

*scripts.js*
```javascript
var addTask = function(task) {
	if(task) {
	}
};
```

Now our code will only run if 'task' is "truthy". Empty tasks are not truthy since they're just empty strings.

Next, we want to call our task constructor and fill it with the new task, then we will push the new task to listo, and save it.

*scripts.js*
```javascript
var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);
	}
};
```

There are a few things we should add to this function to make it work correctly. First, we want the input form to clear after we submit it, which currently isn't happening. Then we want to make it so we can show our new list item in our index.html.

*scripts.js*

```javascript
var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('#newItemInput').val('');
		  $('#newList').append(
                        '<a href="#finish" class="" id="item">' +
                        '<li class="list-group-item">' +
                        '<h3>' + task.task + '</h3>'+
                        '<span class="arrow pull-right">' +
                        '<i class="glyphicon glyphicon-arrow-right">' +
                        '</span>' +
                        '</li>' +
                        '</a>'
                    );

	}
};
```


First, we should make it so that our newTaskForm is hidden when the document loads. Let's put this near the top of our document so that it loads correctly.

*scripts.js*
```javascript
	$('#newTaskForm').hide();
```

Then, let's add the fade toggle so that our New button will hide and show the input form at the same time.

*scripts.js*
```javascript
var addTask = function(task) {
	if(task) {
		task = new Task(task);
		listo.push(task);

		$('#newItemInput').val('');

		 $('#newList').append(
                        '<a href="#finish" class="" id="item">' +
                        '<li class="list-group-item">' +
                        '<h3>' + task.task + '</h3>' +
                        '<span class="arrow pull-right">' +
                        '<i class="glyphicon glyphicon-arrow-right">' +
                        '</span>' +
                        '</li>' +
                        '</a>'
                    );

	}
	 $('#newTaskForm').slideToggle('fast', 'linear');

};
```

We will now call a jQuery event that calls the addTask function when we click the saveNewItem button.

*scripts.js*
```javascript
$('#saveNewItem').on('click', function (e) {
    e.preventDefault();
    var task = $('#newItemInput').val().trim();
    addTask(task);
});
```

Finally, let's make it so that we can open and close the new task form with the newListItem and Cancel button.

*scripts.js*
```javascript
//Opens form
  $('#add-todo').on('click', function () {
      $('#newTaskForm').fadeToggle('fast', 'linear');
  });
  //closes form
  $('#cancel').on('click', function (e) {
      e.preventDefault();
      $('#newTaskForm').fadeToggle('fast', 'linear');
  });
```


##Step 3

###Task Progression HTML

Before we make it possible to move our tasks from in progress to archived, we want create a space for them to exist in our HTML. We will do this in a very minimalist way in order to get things in a way they make sense.

All we really need to do is create divs with ULs within them that contain the IDs our jQuery will look for. Or in other words, let's make some hooks for our jQuery to find and manipulate!

Inside the todo-main-container add this html markup:

*index.html*
```

<div class="progress-box">
<h3>In Progress</h3>
<ul class="list-group" id="currentList"></ul>
</div>
<div>
</div>

<div class="progress-box">
<h3>Complete</h3>
<ul class="list-group" id="archivedList"></ul>
</div>
```

The css is already done for the progress-box class



##Step 4
###Starting, Finishing, and Deleting Tasks

We need to include this function in our code. We will refer to this function in a minute, so for now, just include the function at the top of your app.

*scripts.js*
```javascript
var advanceTask = function(task) {
  var modified = task.innerText.trim()
  for (var i = 0; i < listo.length; i++) {
    if (listo[i].task === modified) {
      if (listo[i].id === 'new') {
        listo[i].id = 'inProgress';
      } else if (listo[i].id === 'inProgress') {
        listo[i].id = 'archived';
      } else {
        listo.splice(i, 1);
      }
      break;
    }
  }
  task.remove();
};
```

The next thing we want is to create a way for our tasks to be moved from **new**, to **in progress**, to **archived**, and eventually deleted.

If you remember, when we created our task constructor we took in the argument for task, and we also created an ID that was automatically set to 'new'. In order to transition a task from 'new' to 'inProgress' all we really need to do is update the object's ID so that it says 'inProgress'.

First let's make a function that allows us to change the status of an item from 'new' to 'inProgress'.

*scripts.js*
```javascript
$(document).on('click', '#item', function(e) {
	e.preventDefault();
});
```

From the beginning this function looks a little different than our other functions. For one, we call the *document* as the hook. Why are we doing that?

Remember, with jQuery the DOM doesn't really do anything. It's just there. That means all of the heavy lifting happens in jQuery. For this, and the next couple of functions, we will need to call the document so that as we create and manipulate html elements, the DOM realizes that they're there.

Another weird thing is `e.preventDefault();` All this is saying is that we are preventing the default action for the event from being triggered. If we want an anchor tag so we can click on list items, but we don't want all of the baggage that comes with an anchor tag (like refreshing the page, or trying to take us to a new page) then this line of code will allow us to do that.

**It's similar to when we use normalize.css to remove default HTML styles.**

The last weird thing is that we are listing '#item' near our 'click' event. This is just so we can specify what we are affecting when we click.

Now let's set a variable called task so that we can access the 'this' keyword to pass it into another function.

We are also going to change it's ID to the string 'inProgress'.

*scripts.js*
```javascript
$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;		
  advanceTask(task);
  this.id = 'inProgress';
});
```

The last thing this function needs is the ability to move the actual list item. We do that by pulling all of the html around the item itself.

*scripts.js*
```javascript
$(document).on('click', '#item', function(e) {
	e.preventDefault();
  var task = this;		
  advanceTask(task);
  this.id = 'inProgress';
  $('#currentList').append(this.outerHTML);
});
```

We can also move the items from 'inProgress' to 'archived' with a similar function:

*scripts.js*
```javascript
$(document).on('click', '#inProgress', function (e) {
  e.preventDefault();
  var task = this;
  task.id = "archived";
  var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
  advanceTask(task);
  $('#archivedList').append(changeIcon);
});
```

Finally, in a similar fashion we want to create a way to delete the items on the list. All we have to do is pass a task into the advanceTask function without a new id. You can study the advanceTask function we built to understand how it works.

*scripts.js*
```javascript
$(document).on('click', '#archived', function (e) {
  e.preventDefault();
  var task = this;
  advanceTask(task);
});
```


*A note on archiving*
A lot of times when writing software we don't necessarily want to delete things all out. Sometimes a user will accidently delete something, and if we are actually obliterating things then that deleted thing is now gone forever. Doing what is called a "soft delete" is often a good thing to do.

Think of our archived ID like a soft delete. We could make it disappear to the user, but if there is a case where they made a mistake it's still accessible.

Perhaps it's not so important with a todolist, but it's good to start thinking about.


## Black Diamond: Local Storage
###Our Browser's Brain

The final step for the todo list is to save our list items on local storage. Local storage allows our app to access the browsers built in storage. We can save a limited amount of data in cool ways. This means if we close our browser our list items will still be there!

Here are some resources:

http://diveintohtml5.info/storage.html

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Good luck!


## Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2015. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
