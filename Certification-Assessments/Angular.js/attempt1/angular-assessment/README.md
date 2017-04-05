# Angular assessment
  This assessment is intended to assess your skills and knowledge of Angular concepts.

  We will be creating the front end for an e-commerce clothing site.

  There are 3 sections to this assessment.

  You are already provided with a few files and folders that you will utilize.

  Let's get started!

## Part 1

### Part 1a - Skeleton

  1. Create a basic angular app that includes:
      - shopCtrl
      - productDetailsCtrl
      - shopService
      - app.js

  2. Setup your routes
      - Setup your routes and states in your app.js file.
      - Setup the routes for the home.html, about.html, blog.html, and shop.html.
      - Setup the ui-view and ensure that the home.html loads first.

  3. Connect Navigation
      - Connect the navigation links that are located in the index.html to point to their corresponding pages.
      - Ensure that the Shop clothing button routes to the shop state as well.


### Part 1b - Bring in data

  1. For this section we will be getting all of the products and displaying them on the shopping page.

  2. For the shop.html view you're going to need to make an api call to http://practiceapi.devmounta.in/products to get all the products. Use your shopService to make this request.

  3. Ensure that the data that comes back from the request is saved in an array on $scope in your shopCtrl. You will be looping over this data and inputting it into your product directive.

  4. Now that we have our data, loop over you data in shop.html   There is some sample html in `product-tmpl.html` for what each product should look like.  

  5. Setup the product-details.html page. You'll need to check the state params for the id being passed along in the route. After you have that id you'll need to make an api call to http://practiceapi.devmounta.in/products/ + the id being passed in the route. This will return the specific product based off the id you passed. Put that product on $scope and display in the view.

  After your data is displaying correctly you'll need to get the product-details view configured. In your routes file add a route called details. This route is going to have to handle the productId correctly.  

  6. Each product needs to :
      - Be clickable on the title and navigate to the product details page passing along the detail of the item clicked on.
      - All the styles are completed for you already so you'll just need to display the data in the right spot. <strong>LOOK FOR COMMENTS.</strong>

  
### Part 1c - Basic logo directive

  1. Every good company needs a logo. Your job is to create a logo using a Directive.

  2. Name the directive 'logo' and restrict it to an element.

  3. Create a templateUrl for your directive called 'logo.html' in your views. Use the image found in the img folder for the logo.

  4. Place your logo directive in the index.html file right above the opening nav tag.

  5. Give your directive element a class and use position absolute and additional css to place the logo in the upper right corner and resize the image to make it look good. Write your css in the app.css file in the styles folder.


## Part 2

  1. Create a directive that shows an individual product. Move all the styling and data for a specific product into a directive. (The template already exists in `product-tmpl.html`).

  1b. Add in new functionality to your directive.  Each product should now:  
      - Be clickable on the image and collapse the image and show a link that says "show image" instead.   
      - Be clickable on "show image" and hide the "show image" link and show the actual image.

  2. Update your ng-repeat of products (on shop.html) to use the directive to display the product.

  3. Move your all of your click logic into the directive for collapsing and routing.

  Result:  Your page will work almost identical to how it did before Section 2, but your product code will now be found in a directive.


# Congratulations! You have finished the assessment.  Show your mentor and make sure they record your score!

## Contributions

### Contributions

#### 
 
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

### Copyright

#### 

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
