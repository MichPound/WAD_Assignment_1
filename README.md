# Assignment 1 - ReactJS app.

Name: Michael Pound, 20085540

## Features.
 
 + Feature 1 = Popular movies view, this displays a list of popular movies in a new view.
 + Feature 2 = Now playing movies view, this displays a list of now playing movies in a new view.
 + Feature 3 = Similar movies view, this displays a list of similar movies in a new view for either popular movies or now playing movies.
 + Feature 4 = Watchlist view, displays movies added to watchlist in a new view.
 + Feature 5 = Movie credits, used to display cast members on movies details page.
 + Feature 6 = Added movie credits to Story Book.
 + Feature 7 = Movie budget, displays the movie budget on movies details page.
 + Feature 8 = Authentication using Firebase. Using this third party authentication I added in the functionality that only logged in users can see any of the movie pages. Added two new views, one for registration of a new user and one for logging in.

## Setup requirements (If required).

For use with the third party authentication using Firebase I had to create an account with Firebase, this is free. I then added a new project, this was name appriopriatly and then created. Because this was for euthentication I enabled the email and password sign in method for the project. I then added a web app to the project and this generated all the configuration information I needed to connect my local react assignment to my project on Firebase. This configuration information I then placed along with my TMDB key in my .env file so I could exclude it easily from version control.

Here is a list of a few extra commands I ran to install extra addons:
+ npm i firebase
+ npm i @react-firebase/auth
+ npm i bootstrap react-bootstrap

## API Data Model.

+ https://api.themoviedb.org/3/movie/popular - Gets popular movies
+ https://api.themoviedb.org/3/movie/now_playing - Gets now playing movies
+ https://api.themoviedb.org/3/movie/${id}/similar - Gets similar movies of a selected movie
+ https://api.themoviedb.org/3/movie/${id}/credits - Gets credits of a selected movie

For getting the credits, I used json.cast instead of json.results, to get the cast of the credits.

## App Design.

### Component catalogue.

I added my movie credits to the storybook which shows a list of the cast for the selected movie. There is only one piece which I added into the storybook which was new, I had more views made but could not add them to the storybook as they were not built up of different components.

![][stories]

### UI Design.

+ I have included all views in this section because I have changed to look of the entire application and wanted to present that.

![][movies]
>The main page which shows a list of movies, the user can click on a movie to load that movies details or they can click add to favorites to add that movie to the favorites list.


![][popular]
>Shows a list of popular movies, the user can click on a movie to load that movies details or they can click similar movies to display a list of similar movies to the selected movie.


![][similar]
>Shows a list of similar movies for the selected movie, the user can click on a movie to load that movies details.


![][upcoming]
>Shows a list of upcoming movies, the user can click on a movie to load that movies details or they can click add to watchlist to add that movie to the watchlist.


![][nowPlaying]
>Shows a list of nowplaying movies, the user can click on a movie to load that movies details or they can click similar movies to display a list of similar movies to the selected movie.


![][favourites]
>Show a list of all movies added to favorites, the user can click on a movie to load that movies details or they can click write a review to open the write a review view.


![][watchList]
>Show a list of all movies added to the watchlist, the user can click on a movie to load that movies details.


![][details]
![][cast]
>Shows a detailed view of the selected movie, shows the movies reviews and the user can click full review to see the full review in a seperate view. Also displays a list of all the movies cast and their character.


![][fullReview]
>Shows the full review for the selected movie.


![][writeReview]
>Allows the user to write a custom a review for the selected movie.


![][login]
>Shows the login form for logging into an existing account, clicking register will switch to the register view.


![][register]
>Shows the register form for creating an account, clicking login will switch to the login view.

## Routing.

+ /login (public) - Displays login page for existing users to log in.
+ /signup (public) - Displays signup page for users who do not have accounts yet.
+ /movies/:id/similar (private) - Displays similar movies for a selected movie if user is logged in.
+ /movies/popular (private) - Displays popular movies if user is logged in.
+ /movies/now_playing (private) - Displays now playing movies if user is logged in.

All routes except for the login and signup routes are private. This is because unless the user is logged in they wont be able to see any of the information the site displays about movies. To better implement this the user would be able to see the basic views without being logged in but would have to login to see views with their personal collections, unfortunitly I ran low on time so I settled for the basic approach of having everything private.

### Data hyperlinking.

![][card]
> Click a movie card to show the movies details.


![][clickReview]
> Click 'Full Review' to load the movies full text review.


![][clickSimilar]
> Click 'Similar Moives' button to load a list of similar movies.


![][clickHeader]
> Click one of the pieces of text on the header to load relevant view. Clicking 'logout' will log out the user and load the login view.


![][clickWrite]
> Click 'Write a Review' to be able to write a review for the movie.


![][clickLogin]
> Click 'Register' to change to the register view.


![][clickRegister]
> Click 'Login' to change to the login view.


## Independent learning.

The only content in this assingment that was not covered in the labs is the authentication using Firebase. This means user have to sign up to be able to access any view besides the signup and register views. Firebase handles the data for all users signed up to the movie app.

![][fireBase]

### Sites used for implementing authentication using Firebase: 
+ https://react-firebase-js.com/docs/react-firebase-auth/getting-started
+ https://blog.logrocket.com/user-authentication-firebase-react-apps/
+ https://www.youtube.com/watch?v=PKwu15ldZ7k
+ https://levelup.gitconnected.com/authentication-using-firebase-and-react-js-99392c6fa58b

---------------------------------

[stories]: ./public/story.png
[movies]: ./public/movies.png
[popular]: ./public/popular.png
[similar]: ./public/similar.png
[upcoming]: ./public/upcoming.png
[nowPlaying]: ./public/nowPlaying.png
[favourites]: ./public/favourites.png
[watchList]: ./public/watchList.png
[details]: ./public/details.png
[cast]: ./public/cast.png

[fullReview]: ./public/fullReview.png
[writeReview]: ./public/writeReview.png

[login]: ./public/login.png
[register]: ./public/register.png

[card]: ./public/card.png
[clickReview]: ./public/clickReview.png
[clickSimilar]: ./public/clickSimilar.png
[clickHeader]: ./public/clickHeader.png
[clickWrite]: ./public/clickWrite.png
[clickLogin]: ./public/clickLogin.png
[clickRegister]: ./public/clickRegister.png

[fireBase]: ./public/fireBase.png