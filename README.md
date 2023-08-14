LightBnB

Introduction:

Welcome to LighthBnB, a revolutionary application that transforms the travel industry by allowing homeowners to rent out their homes to travelers. LighthBnB offers an innovative alternative to hotels and bed and breakfasts, giving users the ability to view property details, make reservations, manage bookings, and write reviews. This project combines the power of complex SQL queries, database design, and server-side JavaScript to create an immersive and user-friendly experience.




Functional Requirements:

 * Create an entity relationship diagram (ERD) illustrating the database structure.
 * Set up the project directory and create a schema file within the migrations subdirectory.
 * Define the database schema using appropriate data fields.
 * Seed the database with sample data using a provided seed file.
 * Write SQL queries for various interactions, such as user login validation and reservations analysis.
 * Connect the frontend Express server to the database and test data retrieval.
 * Refactor server-side JavaScript functions to utilize the database for user management and reservations.
 * Implement dynamic property filtering through the getAllProperties function.
 * Update the addProperty function to add new property listings to the database.
 * Submit the completed Lighthouse BnB assignment for grading.

Project Structure

* db contains all the database interaction code.
  json is a directory that contains a bunch of dummy data in .json files.
  database.js is responsible for all queries to the database. It doesn't currently connect to any database, all it does is return data from .json files.
* public contains all of the HTML, CSS, and client side   JavaScript.
    index.html is the entry point to the application. It's the only html page because this is a single page application.
    javascript contains all of the client side javascript files.
      * index.js starts up the application by rendering the listings.
      * components contains all of the individual html components. They are all created using jQuery.
* routes contains the router files which are responsible for any HTTP   
  requests to /users/something or /api/something.
* styles contains all of the sass files.
* server.js is the entry point to the application. This connects the routes to the database.




