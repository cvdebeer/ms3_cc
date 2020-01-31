# ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) carb-cutters

## A recipe collection for those following a low carb lifestyle

This is a collection of recipes that the User can reference when cooking or baking for ideas on low carb meals. The User is able to add recipes, edit recipes and delete recipes they do not want. The recipes are housed in seperate categories and sorted alphabetically for ease of reference. The user can also do a keyword search to find a recipe according to ingredient or rating

---

## Table of Contents

1. ### UX

   - [Project Goals](#project-goals)
   - [User Goals](#user-goals)
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

My colour choices were inspired by the colours of fresh food. The red colour I used as my base colour was taken from a tomato.  

My colour palette was chosen with the help of [paletton.com](http://paletton.com/#uid=7040u0kvopJlEw6rKuG-ul3IgfQ) - this link will take you to the colour wheel selected.

I designed the logo using my primary colour. Most of the text on the web is in this red. Red is a colour of energy and passion, and seemed the most appropriate in a food setting.

#### Fonts

The fonts chosen for this build were Playfair & Display(for the Title and headings) and Open Sans(for all other places). I wanted fonts that were easily readable by the user. As most of the food sites I researched used small letters as standard, even for titles, I chose to follow this trend on my application.

#### Styling

I chose to keep the styling as simple as possible. As there are a lot of cards and collections which will dominate this application, I didn't want it fighting with other elements in the page.  

All links and buttons ie. actions are the same colour except in the recipe page as their are multiple different options to chose from here. This is the place where you can chose to edit or delete the current recipe you are looking at or add another.

#### Images

I chose the images for the categories to be bright and welcoming to the User, with ingredients that are friendly to the low carb lifestyle. These are the only images that the user will not be able to change. All other images are provided by the user. All images are courtesy of [pixabay](https://pixabay.com/).  Images for recipes were taken from the sites where the recipes were loaded from.

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
- User is able to search the site for recipes matching search criteria. They can search for ingredients, names, category or method.  

### Features still to implement

Due to time constraints, and some issues I ran into during my build planned features not yet implemented are:

- Give the user the ability to reset and or delete ingredients and methods from the input screen.
- The ability for the User to share the recipe via social media or email.
- The ability to print the recipe.
- A User dashboard where Users can see recipes by different criteria eg. Author or rating.
- Proper validation needs to be done for the form to create and edit recipes.  
- Flash messages need to done, for warning Users when they are doing things like deleting a recipe or making input errors.

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

Testing was done constantly during the development, with the use of the console, Chrome developer tools and the bash and mongo terminals.  

- The console was used often for Javascript testing to see how the results were coming from the form and to see the way that the information was presented.It was used to test the results of functions and other actions during development.
- Mongo terminal testing was used on numerous occasions to see what and how my information was coming out of the database, and I used this information, especially while trying to communicate betweem Python from Mongo to Javascript.  
- The bash terminal was used a lot for Python testing, especially to see information that was coming from and going to Javascript. Printing to the terminal helped to record what was happening as opposed to console.log which clears once you move to another page.
- Chrome developer tools was the biggest source of testing as it provided an almost live view of what was coming out of development. This helped me to ensure that the structure was coming together as was needed, and to drive down into the elements to see what effect choices were having.
- The Werkzeug dependancy from Flask, was also very helpful for debugging issues that were crashing the application. Whether it was a syntax error a broken link or python programming. This tool was very helpful for quickly getting to the root of a problem.  

This application was tested completely manually. I wish I had more knowledge and experience with automated testing, as it may have helped save time in the long run. I felt with time constraints and my knowledge base that it wasn't a prudent course of action. I definitely hope to learn and practice this more in the future.

#### Testing on Desktop

##### Browser Testing

I tested the following browsers already installed on my computer (all browsers tested were latest versions of these browsers):

- Chrome- worked with full funtionality and all features working as expected.
- Edge -  worked with full funtionality and all features working as expected. Edge did pick up errors with missing tags or whitespace etc, which was not picked up by Chrome
- Mozilla Firefox - Visually everything looked right, but when trying to submit information to Mongo, there was a network error and although it submitted all the form information,the arrays for ingredients and methods were not uploaded. Sometimes it worked, sometimes it didn't. I recieved a 302 error, which I am aware is due to API issues, but all my attempts to fix this were unsuccessful, owing to my lack of knowledge in this area.
- Internet Explorer - none of the functionality or features were working.
- Opera - worked with full funtionality and all features working as expected.
- Safari- I tested this on the Iphone and Ipad, but unfortunately both had the same issues as Firefox, not loading up ingredients and methods. As I don't know a Mac, I was unable to do debugging on these devices so they are not functional.  

##### User Facing

On all devices I did the following tests:

1. Check that all the links work in larger and smaller screen formats.  
   There are a few navigation links, and several buttons that allow the User to navigate around the site. All were checked that they do what they are supposed to and go where they are supposed to.

        This worked across all devices.   

2. Check that I can create a recipe and that all input requests were clearly conveyed to the user.  
   The recipe is created over several sections. As a sections is completed you move onto the next one or back to the previous one. At the end of all the sections is a "review recipe" section. Here the User can choose to go back an edit a section that they might want to change. This is the last place changes can be made before the recipe is submitted to the database.

        I was able to create and recipe in all devices, although some browsers and  
        devices didn't upload the ingredients and methods, this meant that the 
        application is non-functional on these browsers/devices (Firefox and Safari). 
        This seems to be because of the Fetch API I used to  communicate between
        Javasxript and Python.  
        Another issue picked up on smaller devices was that the selection of dropdowns 
        was often tricky and took several tries. This could be very frustrating 
        for the User.
3. Check that I can view the recipe.  
   It can be achieved by selecting a category and selecting the  recipe with the button, which then opens up to a new page where the recipe is displayed.  
   Alternatively the "All Recipes" link takes you through to a collection of all recipes in  
   alphabetical order. From here you can again open the recipe and perform actions on it.  

        This worked well on all devices. 
4. Check that I can edit recipe.  
    The edit fuction is accessed from the recipe page, where the user is then presented with a recipe with sections for editing. All the buttons were checked to make sure that they take the User to the correct section of the form to update the information. Each step brings the User back to the "review" section, before the User then updates the recipe to the database.

       As with the add recipe section, this worked well on most browsers except Mozilla 
       and Safari. Because these two browsers then updated the database with empty code, 
       it caused the site to break as those recipes couldn't be opened again, and there 
       was also no place to then access them or delete them.
5. Check that I can delete a recipe. This is achieved from the recipe page of the site. Options are presented to the User on the bottom of the page to edit/delete or add a recipe. Should the user chose to delete the recipe it will be permanently removed from the database.  

        This worked well on all devices

### Automated Testing

#### Validation Services

The following validation services were used to check the HTML and CSS code:

- [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) was used to check the CSS
The following were used for checking my Javascript code:
- [JSHint](https://jshint.com/) - this did not like most of my code due to arrow functions and Array restructuring from some of my code.

### Bugs

#### Current bugs

- When recipes are edited and the image is not edited as well, the image is deleted. I tried to work around this by seperating the image editing from the rest of the updating, but this caused both to stop working. I believe this also has to do with my handling of API calls.
- On some browsers the ingredients are not loaded to the database when creating a recipe and are also not uploaded when editing a recipe. On Firefox and Safari, sometimes it works and sometimes it doesn't. I was unable to fix this issue at this time.
- Although weblinks can be loaded and edited they cannot be followed to the actual webpage. I believe Jinja is preventing them going to an external website. I haven't had the time to try and resolve this issue.
- Mobile devices can have issues with the drop down lists, either not selecting or incorrectly selecting options. This can be a little frustrating to Users.  
  
#### Resolved bugs

- The biggest challenge I faced was trying to get my languages to communicate in order to share information like my arrays for ingredients and methods, and then when they were talking to get the information out in a way that they languages could use them. This was finally solved with the fetch API, and a clever tutor who reminded me how to iterate over a dictionary but doesn't seem to be compatable with Firefox and Safari for the most part.  
- I was also having issues being able to sort my recipes by category, from the category selection. This was resolved in a roundabout way by a tutorial I was watching to load up images. We had only been taught to push to a url using an id, but the category didn't work the same way. This caused quite a few days of struggle.  
- I had a major issue trying to implement a default image when the User doesn't load an image. As the site is big on displaying images it was crucial for uniformity that there be some kind of representation. I finally solved this with an onerror found on [stackoverflow](https://stackoverflow.com/questions/3984287/how-to-show-alternate-image-if-source-image-is-not-found-onerror-working-in-ie)

## ![logo](https://res.cloudinary.com/dgsqmdssi/image/upload/v1580122637/ccRecipes/cc_logo_emcb07.svg) Deployment

---

This project was developed using Visual Studio Code.  
Throughout the build completed sections were commited to git and then uploaded to my [Github repository](https://github.com/cvdebeer/ms3_cc)

I also created an application on Heroku and the project was deployed  there [Heroku](https://ccrecipes-ms3.herokuapp.com/) where it is available to view by the public.  

1. The deployment method used in Heroku is Github(all pushes to Github are then also built and deployed in Heroku). This makes sure that any changes to the project on Github are also reflected on Heroku.
1. In the Heroku settings for the app I set the Configuration Variables for PORT, IP and Mongobd URI.

### How to run this project locally

#### To clone this project from GitHub

1. Follow the link to the [GitHub repository](https://github.com/cvdebeer/ms3_cc).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type 'git clone', and then paste the URL you copied in Step 3.

        -git clone https://github.com/USERNAME/REPOSITORY

7. Press Enter. Your local clone should be created.

#### To deploy to Heroku

1. Start by creating an account on [Heroku](https://www.heroku.com/)
2. Create a new app (either via the website or command line)
3. login to Heroku in the command line (of your ide)

        heroku login
4. Check your current apps, to check the app has been created

        heroku apps

    *You will also require 3 additional files*

5. Creation of "requirements.txt" file, which displays the additional libraries and requirements to run the project.  
Use the command below to create the requirements.txt:

        sudo pip3 freeze --local > requirements.txt 
6. Creation of a "Procfile", which tells Heroku how to run our app

        echo web: python app.py > Procfile

7. Creation of a "runtime.txt" file, which tells Heroku which version of Python you are running

        echo python (version) > runtime.txt

    *Then add the environmental variables*

8. Go to [Heroku](https://www.heroku.com/)  
    - Go to Settings  
    - Reveal config vars  
    - Set IP: 0.0.0.0 Port: 5000
    - Set you Mongo_URI credentials here

    *Finally, link to Github and deploy!*
Start by using the following commands to create your repository:

    - git init
    - git add .
    - git commit -m "Initial commit"

9. Then link to Heroku:  

      - Go to Heroku
      - Then to deploy
      - Choose "Github" as the Deployment method
      - Login and connect to your Github repository (for the project)
      - Then "enable automatic deploys"

10. If you now go into the command line in your IDE you can push the code to Heroku:

       - git push heroku master

11. Then set up the dynos:

        -heroku ps:scale web=1

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
