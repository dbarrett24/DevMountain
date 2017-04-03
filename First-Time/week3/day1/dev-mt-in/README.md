## Dev-mt-in

__A note to students and employers__

This is an Intern Project.  What that means is that it is structure to look like what an intern might receive on the job.  You will find in this document:
* Design files of what the project should look like
* Requirements, separated by day, of what the project should be able to do.

That is all.  You will receive no instructions.

Your mentors have been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code.  Similar to how an intern might receive guidance.  This project is a chance for you to combine and showcase the skills you've learned so far.  

With this guidance only structure we believe this project will showcase what you can do as an individual at this point of the program. 
Because of this we feel this project will be worth putting in your portfolio.

Good luck and work hard!

Sincerely,

Jeremy Robertson

Director, Web @ DevMountain

## Application Design

These are located in the images folder in this project.

![Application Design](https://github.com/DevMountain/dev-mt-in/blob/master/images/DevMtn-Social-app.jpg?raw=true, "Application Design")
![Color Palette](https://github.com/DevMountain/dev-mt-in/blob/master/images/ColorPalette.jpg?raw=true, "Color Palette")
![Fonts](https://github.com/DevMountain/dev-mt-in/blob/master/images/Fonts.jpg?raw=true, "Fonts")
![Text Styles](https://github.com/DevMountain/dev-mt-in/blob/master/images/TextStyles.jpg?raw=true, "Text Styles")


## Day 1:
__Bottom Nav__
* Navigation is controlled at the bottom of the screen
* User can navigate between `View Friends` `Find Friends` and `Update Profile`
* Currently focused 'page' is underlined

__Entry View__
* Entry view is seen when the user first enters the application
* User is prompted to add data when the first enter the application
* User can add Full-name, tagline, bio, and profile pic URL
* User can save changes
* After saving changes user is taken to the Landing Page
* Entry View looks like provided screen shots

__Landing Page__
* User sees their name
* User sees their tagline
* User sees their bio

__Update Profile__
* User can change their fullname, tagline, profile pic, and bio


## Day 2:
Use two services for this day.  One to track people and one to track friends.
Use local storage to keep track of the data.

__Friends View__
* User can search for existing friends
    * Friends list updates based on search criteria
* Hovering over a friend displays the friend name and `View Profile` as seen in the design.
* User can select a friend by hovering then selecting View Profile
    * Page navigates to friend profile View when `View Profile` is clicked

__Friend Profile View__
* User can view friend: name, tagline, bio, and profile image
* User can navigate using the back button back to friends view
* Add Friend Button
    * Says `Add Friend` if person is not your friend already
        * Adds that person to your friend list 
    * Says `Remove Friend` if person is your friend
        * Removes that person to your friend list

__Find Friends View__
* User can search people (not friends) by name
* Hovering over a person displays the person name and `View Profile` as seen in the design.
* User can select a person by hovering then selecting View Profile
    * Page navigates to friend profile View when `View Profile` is clicked

## Day 3
There are no new visuals and pages to add, but currently all our data is stored locally. Use the following 
to POST, GET, PUT, and DELETE user profiles and friends:

#### API Urls
Base Url:
`http://connections.devmounta.in/`

`/api/profiles` - POST

`/api/profiles/:id` - GET, DELETE, PUT

`/api/profiles?name=Bob` - GET

`'/api/profiles/:userid/friends/:friendId'` - DELETE, PUT

`'/api/friends/:userId'` - GET

#### API Data structure
All profiles are stored with this structure that you must match when saving:
```javascript
{
    name: ,
    tagline: ,
    bio: ,
    profileUrl: ,
    friends: [friendId]
}
```    

### Day 4 - Black Diamond
This is a 'challenge' item.  To push above and beyond. It is not included in the design specs.

* Add the ability to browse through a friends friends and add them to your friends.

`'/api/friends-friends/:friendId'` - GET
