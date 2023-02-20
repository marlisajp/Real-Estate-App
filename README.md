# Real-Estate-App

## General Code
The real-estate app is written so that it manipulates an array of objects.
The design choices are explained and documented in comments.
DOM elements are styled via CSS.

## Adding and Removing
Users can add and remove objects from an array by creating input elements, entering data into those elements, and then selecting a SUBMIT button.
The array is both responsive and accurately rendered in the browser window.
Users can enter a street address, a property type (such as house, apartment, or loft), a city, and a state in input elements.

## Navigation
A navigation bar that spans the top of the web app and/or a footer across the bottom is added.
The elements have links to other parts of the app, such as "About" and "Contact."
The app can use dummy data or lorum ipsum text. Real information is not required

## Comments
Users can leave comments no longer than a tweet—that is, 280 characters—on any home they want.
Users can select a Comment button that reveals a text input element. They can then enter their comment and select Send to add it to the home card.
Data is stored either locally or in state memory. Neither a database nor persistence is required.
 
## Optional: Registration
A user can access the book data only if they have registered a new username and password.
After registering, a user gets redirected to the real-estate web app, where they can observe some property data, add properties to the app, and so on.
The credentials are not stored in a database and encrypted for later sign-in. This is just an exercise to make the app more like a real-world web app.