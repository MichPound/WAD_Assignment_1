# Assignment 1 - ReactJS app.

Name: Michael Pound, 20085540

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 = Popular movies view, this displays a list of popular movies on a new view.
 + Feature 2 = Now playing movies view, this displays a list of now playing movies on a new view.
 + Feature 3 = Similar movies view, this displays a list of similar movies on a new view for either popular movies or now playing movies.
 + Feature 4 = Watchlist view, displays movies added to watchlist in a new view.
 + Feature 5 = Movie credits, used to display cast members on movies details page.
 + Feature 6 = Movie budget, displays the movie budget on movies details page.
 + Feature 7 = Authentication using Firebase. Using this third party authentication I added in the functionality that only logged in users can see any of the movie pages. Added two new views, one for registration of a new user and one for logging in.

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

For use with the third party authentication using Firebase I had to create an account with Firebase, this is free. I then added a new project, this was name appriopriatly and then created. Because this was for euthentication I enabled the email and password sign in method for the project. I then added a web app to the project and this generated all the configuration information I needed to connect my local react assignment to my project on Firebase. This configuration information I then placed along with my TMDB key in my .env file so I could exclude it easily from version control.

Here is a list of a few extra commands I ran to install extra addons:
+ npm i firebase
+ npm i @react-firebase/auth
+ npm i bootstrap react-bootstrap

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/popular - Gets popular movies
+ https://api.themoviedb.org/3/movie/now_playing - Gets now playing movies
+ https://api.themoviedb.org/3/movie/${id}/similar - Gets similar movies of a selected movie
+ https://api.themoviedb.org/3/movie/${id}/credits - Gets credits of a selected movie

For getting the credits, I used json.cast instead of json.results, to get the cast of the credits.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /login (public) - Displays login page for existing users to log in.
+ /signup (public) - Displays signup page for users who do not have accounts yet.
+ /movies/:id/similar (private) - Displays similar movies for a selected movie if user is logged in.
+ /movies/popular (private) - Displays popular movies if user is logged in.
+ /movies/now_playing (private) - Displays now playing movies if user is logged in.

All routes except for the login and signup routes are private. This is because unless the user is logged in they wont be able to see any of the information the site displays about movies. To better implement this the user would be able to see the basic views without being logged in but would have to login to see views with their personal collections, unfortunitly I ran low on time so I settled for the basic approach of having everything private.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png