# ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) carb-cutters


## A recipe collection for those following a low carb lifestyle

This is a collection of recipes that the User can reference when cooking or baking for ideas on low carb meals. The User is able to add recipes, edit recipes and delete recipes they do not want. The recipes are housed in seperate categories and sorted alphabetically for ease of reference. The user can also do a keyword search to find a recipe according to ingredient or rating

---

## Table of Contents

1. ### UX

   - [Project Goals](#project-goals)
   - [Player Goals](#player-goals)
   - [Developer Goals](#developer-goals)
   - [User Stories](#user-stories)
   - [Design choices](#design-choices)
   - [Wireframes](#wireframes)

2. ### Features

      - [Existing Features](#existing-features)
      - [Features still to implement](#features-still-to-implement)
  
3. ### Technologies Used

4. ### Testing

   - [Manual Testing](#manual-testing)
   - [Automated Testing](#automated-testing)
   - [Bugs](#bugs)

5. ### Deployment

6. ### Credits

   - [Content](#content)
   - [Media](#media)
   - [Code](#code)
   - [Acknowledgements](#acknowledgements)
  
## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) UX

---

### Project Goals

As a person, who is myself on a journey of low carb living, and having the frustrations of not being able to properly store all these new recipes to try, I was inspired to create and app that I would enjoy using.

The main goal of this app is to provide the User with a place to store any tried or untried recipes. These recipes are often found on different sites all over the web, but when you want to save them you inveriably save it to a folder that you have to search through over and over again. This app allows the user to store the information in one place, and then be able to reference them in a variety of ways.

The User is able to search the site by category and recipe index, or alternatively search via a keyword. The difficulty rating is indicated and can be changed to the user's preference. What is easy to make for some, is not always easy for someone else! 

This application has been designed for users one all devices, allowing them to easily log recipes from anywhere, anytime.

### User goals

The target audience is adults who are following a low carb lifestyle to add recipes that them may find from other locations. A

User goals are:

- Have one location to create and control their own "Recipe Book".
- The ability to categorize their recipes for ease of reference.
- The ability to adjust the recipe to suit their tastes- Users can change every askpect of the recipe, from the name to the ingredients.
- The ability to delete the recipes they don't like, so that they only have the recipes that work for them.
- The ability to access the recipes easily and view them in an easy to read fashion.
- The ability to follow the recipe back to its original source and author, so that they can try other recipes from there.  
  
### Developer Goals

- To develop an application that I myself, will enjoy using on my low carb journey and have as a reference tool.
- To use previous skills learned with HTML, CSS and Javascript and incorporate these with Python and MongoDb to create a dynamic application that the user can control.
- To better understand the way that all the languages work together to achieve the final result.
- To improve my knowledge on the new information learned about Python and MongoDb

### User Stories

As a User I would want:

1. To have an application where I can easily create a new recipe, with all the information that may be relevant to me.
2. To easily find these recipes, either by category, name or search.
3. To be able to delete recipes I don't like.
4. I want to be able to see where the recipe originally came from, either to avoid that site in future or to go back there and look for more recipes I might enjoy.
5. I want to be able to change a recipe- either because I mistakenly loaded up incorrect information, or I found an alternative ingredient/method that I want to add to make it my own. I may even want to change the picture to one showing the dish I have prepared myself.

### Design Choices

I chose to keep the design of the application as simple as possible so as not to visually overpower the user. I used [materialize](https://materializecss.com/) as my building blocks.

Recipes are categorised and sorted alphabetically. Pictures help the user visually find what they are looking. The use of cards and avatar content collections, I felt were a great way to provide the user with welcoming and easy access database.

#### Colours

I chose bright colours to compliment the vibrant colours of the pictures that are and would be loaded onto the site.

My colour palette was chosen with the help of [paletton.com](http://paletton.com/#uid=7040u0kvopJlEw6rKuG-ul3IgfQ) - this link will take you to the colour wheel selected.

I designed the logo using my primary colour. Most of the text on the web is in this red. Red is a colour of energy and passion, and seemed the most appropriate in a food setting.

#### Fonts

The fonts chosen for this build were Playfair & Display(for the Title and headings) and Open Sans(for all other places). I wanted fonts that were easily readable by the user. As most of the food sites I researched used small letters as standard, even for titles, I chose to follow this trend on my application.

#### Styling

I chose to keep the styling as simple as possible. As there are a lot of cards and collections which will dominate this application, I didn't want it fighting with other elements in the page. 

All links and buttons ie. actions are the same colour except in the recipe page as their are multiple different options to chose from here. This is the place where you can chose to edit or delete the current recipe you are looking at or add another.

#### Images

I chose the images for the categories to be bright and welcoming to the User, with ingredients that are friendly to the low carb lifestyle. These are the only images that the user will not be able to change. All other images are provided by the user. All images are courtesy of [pixabay](https://pixabay.com/). 

#### Wireframes
My wireframes were created using [Balsamiq](https://balsamiq.com/) during the Scope plane as part of my design and planning process.

[Click here to go to my Mockup](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580126512/ccRecipes/ccRecipes_spsbog.pdf)

Although some elements of my original design did not come to fruition due mainly to lack of time, the core of what I wanted to achieve has been realised. 

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Features
---

### Existing Features

- User has the ability to achieve all CRUD(Create/Read/Update/Delete) operations required by the project scope.
- Users can 'Create' Recipes, through a various sections- Recipe info, add ingredients, add methods and image. As you move through the sections, the previous section is removed so that the User is not overloaded with visual information. Any information left blank will not cause the recipe to break and can be updated at a later stage using the Update function.
- Once all the recipe information is inputed the User is taken to a 'review' screen where they can check that everything has been inputed correctly. At this stage the User can click the relevant button and go back and edit a section. When the User is satisfied, they can submit the Recipe to be inserted into the database.
- Users can 'Read' recipes, either by accessing them through the 'Home Page' selection of categories, or by going through the 'All Recipes' option.
- Once a recipe is selected, it opens on it's own page and options are presented to the User to edit or delete the recipe. The User is also able to select adding a recipe at this time.
- Should a User choose to edit a recipe they are taken to a 'Review section' where all the information is drawn from the database and presented to them of their recipe. There they can select what part of the recipe they want to edit. Once they are happy with all the information being updated they select the 'Update' button and this then updates the recipe on the database.
- Should a User chose to 'Delete' a recipe, the User will be returned to the 'Home Page' and the recipe will be removed from the database.

### Features still to implement

Due to time constraints, and some issues I ran into during my build planned features not yet implemented are:
- The search functionality allowing to search the database by ingredient, name etc
- The ability for the User to share the recipe via social media or email.
- A User dashboard where Users can see recipes by different criteria eg. Author or rating.

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Technologies Used

---

- HTML5, CSS3, JavaScript, and Python were used as the programming languages for this project.
- [MongoDb Atlas](https://www.mongodb.com/cloud/atlas) was used as the database for this project as per the project requirements.
- [Flask Framework](https://palletsprojects.com/p/flask/) an application run within Python. It uses applications like Jinja and Werkzeug to build the framework and templates used in the project.
- [Pymongo](https://api.mongodb.com/python/current/) is an API application allowing python to communicate with MongoDb
- [Json](https://www.json.org/json-en.html) is a data-interchange format. This allowed me to send and receive information between Javascript and Python.
- [Visual Studio Code](https://code.visualstudio.com/) was used as the IDE for this project.
- [Materialize](https://materializecss.com/) Framework was used to help create the structure of the application and make the layout more responsive to different sized screens. [jQuery](https://jquery.com/) was used as part of the Materialize Framework.  
- [GoogleFonts](https://fonts.google.com/) provided the fonts used in the application.
- [Material Icons](https://material.io/resources/icons/?style=baseline) was used to provide the icons used on the buttons.
- [Cloudinary](https://cloudinary.com) all external images for this project are stored at this cloud location.
- [git](https://git-scm.com/) was used to commit saved sections as they were completed.
- [Github](https://github.com/) was used to store and share all project code remotely.
- [Heroku](http://heroku.com/) was used to deploy the application.
- [CorelDraw X8](https://www.coreldraw.com/) used to create the icon and logo for this project.

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Testing

---

### Manual Testing

<!-- This game has been specifically written for desktops at this time, as the number of cards on the medium and difficult levels translate poorly onto smaller devices. The minimum width of the game board on the hard level is 960px wide and 850px high, which is larger than most tablet sizes. -->

#### Testing on Desktop

<!-- Manual testing on each part of the game was done while building it. When a feature was built I tested it to see that it was doing what was required. Most of the testing was done with Chrome developer tools and checked over other browsers. Below is a breakdown of what was tested in each section: -->

##### Browser Testing
<!-- 
I tested the following browsers already installed on my computer (all browsers tested were latest versions of these browsers):

- Chrome- worked with full funtionality and all features working as expected.
- Edge -  Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned. It was also noted that the Konami code did not work on this browser.
- Mozilla Firefox -  Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned.
- Internet Explorer - none of the functionality or features were working.
- Opera - Game pages and boards worked as looked as expected. The index page buttons were not styled as expected but still functioned.

I tested the game on my Ipad in Safari - the index page looked and worked as expected, but the game board did not. When the cards "flipped" over the face cards were not visible. I eventually found the solution on Stackoverflow and made the background colour transparent. This made the face-card visible, so I assume that it is working on all Safari browsers too. -->

##### User Facing
<!-- 
###### How to play

- The "How to play" button was button was designed with a tooltip that appears when you hover over it.
- The tooltip had been styled with CSS so I needed to check that the tooltip appeared beneath the button styled as expected.:arrow_right: This was done by hovering over the tooltip with the mouse.

###### "Reset" button

- The reset button is designed to show a tooltip when hovered letting the User know what happens if they press the button.
- The tooltip had been styled with CSS and was checked manually by hovering over it with a mouse to check that this behaved as expected.
- On pressing the button several Javascript functions take over and do the following:
  1. "Unflips" all the cards ie. only the back of the cards are visible :arrow_right: this was checked visually when clicking the reset button.
  2. The "Moves" counter is reset to zero :arrow_right: this was tested by making a few matches and then pressing the reset button and making sure that the counter had reverted to zero.
  3. The button stops the clock. :arrow_right: this was again tested by making a few moves and then pressing the reset button and checking that the clock stops counting upwards.
  4. The button restarts the clock once a new game is started :arrow_right: this was tested by playing a few moves, pressing the reset button to stop the clock and then turning a card of a new game to confirm that the clock started again from zero.
  5. Shuffles all the cards into a new random sequence :arrow_right: this was tested by playing a few cards, resetting and checking that the cards were at a different location. Also, full games were played and reset to check that cards were randomly arranged.

###### Sound button

- The sound button toggles between off and on using JavaScript, allowing the User to switch off the sound and switch it on again. :arrow_right: This was checked by starting a game and flipping a card to hear the sound, then pushing the button and:
  1. Visually checking that the word had changed from "On" to "Off" and back again if pressed again.
  2. Comparing the "On" to be with sound and then the "Off" to be with no sound.

###### "Moves" Counter

- This is an information point for the User that counts the number of moves it is taking the User to complete the game board.
- The counter "counts" every pair of cards that are flipped by the User. ie two cards need to be flipped in order to count as one move.
- This was a bit of JavaScript and was visually tested on the User side :arrow_right: by selecting one card and then another and making sure that it only went up by an increment of one for every pair turned over whether they were matching or not.
- :arrow_right: Also clicked multiple cards in a row to make sure that it was only counting the flipped cards and not accidental clicks as well.

###### "Change level"

- This is a simple dropdown menu that allows the User to navigate at any time before, during or after a game to a different level.
- As the dropdown list was hidden from view a little JavaScript was used to make it visible again when hovering over the change level button.
- Also the dropdown menu also had to be hidden again if the User did not make a selection and  moved the mouse off the button.
- :arrow_right: Functionality was tested visually by hovering over the dropdown menu, moving the mouse away to check that the menu became hidden again,
- :arrow_right: Links were tested to make sure that they were working and took the User to the selected game board when a selection was made.

###### Timer

- The timer is designed that it only starts the clock once the first card in a new game has been selected. :arrow_right: This was checked by waiting before turning the first card to make sure that the clock wasn't running and then checking that it started running as soon as the first card was turned.
- The timer is designed to stop running if the game has been successfully completed. :arrow_right: This was checked by playing several games to completion and checking that the counter stopped every time it was successfully completed.
- The timer is designed to stop running when the game is reset. :arrow_right: This was checked by reseting the game at various stages in the game and ensuring that the clock was stoped and no longer running.

###### Konami Code

This was added to the game as a bit of hidden fun for the User. :arrow_right: This was tested by entering the secret code: "halloween" at random junctures to see that it popped up and closeable again. Try it yourself :stuck_out_tongue_winking_eye:

##### JavaScript

I used the console a lot while writing the JavaScript to make sure:

- that functions were being called
- that the correct information was being pulled from the DOM.
- for debugging when code wasn't working to start off with or had suddenly stopped working due to something else that I was added onto the code that was breaking it.

I did attempt to start my project using Test Driven Development by writing tests with Jasmine, but my inexperience and minimal understanding of this tool led to frustration and I was unable to write a passing test. I was informed that Jasmine is not the best tool to test DOM manipulation, which, for the most part what my game does. -->

### Automated Testing

#### Validation Services
<!-- 
The following validation services were used to check the HTML and CSS code:

- [W3C Validator](https://validator.w3.org/) was used for the HTML.
- [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to check the CSS

The following were used for checking my Javascript code:

- [JSHint](https://jshint.com/) - this did not like most of my code due to arrow functions and Array restructuring from some of my code.
- [Babel](https://babeljs.io/)- this helped me convert my code into simpler versions that earlier browsers would understand as a some of my code was using ES2016 and 2017 functions (arrow functions and destructuring assignments) -->

#### Jasmine
<!-- 
I did attempt to start my project using Test Driven Development by writing tests with Jasmine, but my inexperience and minimal understanding of this tool led to frustration and I was unable to write a passing test. I was informed that Jasmine is not the best tool to test DOM manipulation, which, for the most part what my game does. -->

### Bugs

#### Current bugs

<!-- - If the sound is switched off on the game and you change levels the sound comes back on.
- If you drag the card while clicking the card the card will not flip over. Only allows flip on still click- this was a problem for my son who is not as controlled on a mouse as some.
- Overclicking on cards does not stop the flip sound.
- The timer does not go back to zero when the game is reset, however it does start counting again from zero, so does not impact game play. -->
  
#### Resolved bugs

<!-- - There was a bug on the hard level that caused the cards to stay flipped even when they weren't matched. This was resolved when I moved all my code into one JS file.
- When navigating to the easy level, the start modal kept popping up. This was resolved by seperating the html and making the modal the index page.
- When moving the mouse after hovering over the dropdown list, the list would not go away if nothing was selected. This was resolved with a click function allowing the User to close the dropdown list again.
- There was a bug on playing the game on my Ipad. When the card flipped I only got a black card and didn't see that face-card. This was solved by making the background colour transparent. -->

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Deployment

---

This project was developed using Visual Studio Code. 
Throughout the build completed sections were commited to git and then uploaded to my [Github repository](https://github.com/cvdebeer/ms3_cc)

I also created an application on Heroku and the project was deployed  there [Heroku](https://ccrecipes-ms3.herokuapp.com/) where it is available to view by the public. 
1. The deployment method used in Heroku is Github(all pushes to Github are then also built and deployed in Heroku). This makes sure that any changes to the project on Github are also reflected on Heroku.
2. In the Heroku settings for the app I set the Configuration Variables for PORT, IP and Mongobd URI.

### How to run this project locally

#### To clone this project from GitHub:

1. Follow the link to the [GitHub repository](https://github.com/cvdebeer/ms3_cc).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type 'git clone', and then paste the URL you copied in Step 3.
    ~~~
    git clone https://github.com/USERNAME/REPOSITORY
    ~~~
7. Press Enter. Your local clone should be created.


##### To deploy to Heroku:
1. Start by creating an account on [Heroku](https://www.heroku.com/)
2. Create a new app (either via the website or command line)
3. login to Heroku in the command line (of your ide)
    ~~~
    heroku login
    ~~~
4. Check your current apps, to check the app has been created
    ~~~
    heroku apps
    ~~~

##### You will also require 3 additional files: 
    
5. Creation of "requirements.txt" file, which displays the additional libraries and requirements to run the project.

Use the command below to create the requirements.txt:
~~~
sudo pip3 freeze --local > requirements.txt 
~~~

6. Creation of a "Procfile", which tells Heroku how to run our app
~~~
echo web: python app.py > Procfile
~~~

7. Creation of a "runtime.txt" file, which tells Heroku which version of Python you are running
~~~
echo python (version) > runtime.txt
~~~

##### Then add the environmental variables 

8. Go to [Heroku](https://www.heroku.com/)
-  Go to Settings
-  Reveal config vars
-  Set IP: 0.0.0.0 Port: 5000
-  Set you Mongo_URI credentials here

##### Finally, link to Github and deploy!
Start by using the following commands to create your repository:
    ~~~
    git init
    git add .
    git commit -m "Initial commit"
    ~~~
 9. Then link to Heroku:
-  Go to Heroku
-  Then to deploy
-  Choose "Github" as the Deployment method
-  Login and connect to your Github repository (for the project)
-  Then "enable automatic deploys"

10. If you now go into the command line in your IDE you can push the code to Heroku:
~~~
git push heroku master
~~~

11. Then set up the dynos: 
~~~
heroku ps:scale web=1
~~~

You can now view your project either via the "open app" button on Heroku, or by using the generated url in Heroku.

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Credits

---

### Content

[All Day I Dream About Food](https://alldayidreamaboutfood.com/)- This is a blog by Carolyn Ketchum. I used some of her recipes as the building blocks for recipes. I used her images for the loaded recipes.  
[Diet Doctor](https://www.dietdoctor.com/) - Some of the recipes loaded onto the app were taken from this site.

### Media

[pixabay](https://pixabay.com/) - All food images for the category section used on the cards were downloaded from this site.  
[freesvg](https://freesvg.org/) and [svgsilh](https://svgsilh.com/) for the images used in my ratings and logo.  
[All Day I Dream About Food](https://alldayidreamaboutfood.com/) - I used her pictures for the associated recipes used on the application.  
[Diet Doctor](https://www.dietdoctor.com/) - Recipe images related to the recipes I uploaded were used from their site.

### Code

[Andrew Healey](https://healeycodes.com/javascript/python/beginners/webdev/2019/04/11/talking-between-languages.html) this tutorial helped me to get python and Javascript talking to each other. This had been a major stumbling block in my project.  
[Pretty Printed](https://www.youtube.com/watch?v=DsgAuceHha4) -this tutorial and code was instrumental being able to allow Users to upload images onto the database. It also helped me solve another issue that I was having redirecting my webage using something other than the _id which we had learned in the tutorials. This had been another unforseen stumbling block in my project.  
[Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) This was a big help with the functionality I wanted to create in my application, allowing the user to see their input and keep adding to it.
[Materialize](https://materializecss.com/) was used to copy basic layouts for navbar, collections and cards and then adjusted to make it fit for purpose.

### Acknowledgements

- Thanks to my family , who have spent long hours without my company while I studied and wrote this app. 
- Thanks to my tutor Rahul, who handled my misery and frustration and who believed that I could create the picture in my head on the screen. 
- Thanks to tutors that have always tried to point me in the right direction, with special thanks to Xavier, who put the final cog in the wheel to make the info from Javascript to Python work. I was at the point of giving up and at second 99 he saved the day!
- Thanks to A Greaves, who provided a beautiful template for writing this Readme - you are a master!