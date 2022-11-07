# NoSQL: Social Networking API [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  ## Table of Contents  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Walk- through Video](#walkthru-video)
  * [Screen Shots](#screen-shots)
  * [Tests](#tests)
  * [Technologies Used](#technologies-used)  
  * [Questions](#questions)
  * [Resources](#resources)
  * [How to Contribute](#How-to-Contribute)   
  * [License](#license)
  
  ## Description



The motivation behind this project was to build an API for a social network web application where users can share their thoughts, react to friends' thoughts and create a friend list. The API has been created using Express JS for the routing, MongoDB database and the Mongoose ODM.
  
       
  ### Functional Requirements

  The functional requirements that Social Network API has been designed to meet are defined by the user story and acceptance criteria listed below.  

  #### User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
 

#### Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

  ## Installation
  
  After cloning the application follow the instructions below to install the application:

    
  Install dependencies:

       npm i

  To run the application:

    npm start
  

 ## Usage

  You can test the API routes and perform CRUD operations using an API REST tool such as Insomnia or Postman. (Insomnia was used in this project).

  Available API routes to test are:

  ### User Routes

  |method| Route| Description|
  | --- | --- | --- |
  |Get | /api/users | Get all users|
  |Get| /api/users/:userId| Get a single user by id|
  |Post| /api/users | Add a new user|
  |Put| /api/users/:userId| Update a user by it s id|
  |Delete| /api/users/:userId| Remove a user and associated thoughts|
  
  ### Friend Routes 

  |method| Route| Description|
  | --- | --- | --- |
 |Post| /api/users/:userId/friends/:friendId| Add a new friend to a user's friend list|
 |Delete| /api/users/:userId/friends/:friendId|Remove a user from a user's friend list|

  ### Thoughts Routes

  |method| Route| Description|
  | --- | --- | --- |
  |Get| /api/thoughts| Get all thoughts|
  |Get| /api/thoughts/:thoughtId| Get a single thought by its id
  |Post| /api/thoughts| Create a new thought and add to a user's thoughts array|
  |Put| /api/thoughts/:thoughtId| Update a thought by its id|
  |Delete| /api/thoughts/:thoughtId| Remove a thought by its id|

  ### Reaction Routes

  |method| Route| Description|
  | --- | --- | --- |
  |Post| /api/thoughts/:thoughtId/reactions| Create a reaction to a thought|
  |Delete| /api/thoughts/:thoughtId/reactions/reactionId| Remove a reaction from a thought|






  
  
 ## Walk-through Video

   Click on the link below to view the walk through video which demonstrates the functionality of the social networking API.

   - [walk through video]()

   

  ## Screen Shots

 ![](./assets/images/)

 

  ## Tests
  No code tests have been implemented.

  ## Technologies Used
  - JavaScript
  - MongodB
  - Mongoose
  - Node Js  
  - express
  
    
 
  ## Questions
  If you have any questions regarding this project or contents of this repository, please contact me via:
  
  - email: dat826@gmail.com
  - GitHub: [Beanalini](https://github.com/Beanalini)  


  
  ## Contributing
  If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through my GitHub account   @[Beanalini](https://github.com/Beanalini).
  

  ## License
  This project is covered under the MIT License  
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
  