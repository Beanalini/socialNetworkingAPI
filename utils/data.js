const usernames = [
  'Sophia',
  'Alex',
  'Costas',
  'Debra',
  'Nicola',
  'John',
  'Steve',
  'Aaryan',
  'Ita',
  'Tahir',
  'Vic',  
];

const thoughtsBodies = [
  'How to disagree with someone',
  'How do you like your eggs done?',
  'Are you a winter or summer person?',
  'Dogs or cats',
  'thoughts on Elon Musk making half of Twitter staff redundant',
  'Your favorite all time band',
  'Glastonbury has to be the best music festival ever!?',
  'Hello world',
  'Snowboarding or skiing',
  'Best way to apologise after a misunderstanding',
  'What is top of your bucket list',
];

const possibleReactions = [
  'Sunny side-up',
  'Definetely snowboarding',
  'This was awesome!',
  'Admit you were in the wrong!',
  'Please check out my video response',
  'Agree Glastonbury is the best!',
  'Has to be winter - wooly jumpers, boots and open fires',
  'Cats, they are more intelligent',
  'Has to be The Doors',
];

const emailChoice = [
  'email1@email.com',
  'email2@email.com',
  'email3@email.com',
  'email4@email.com',
  'email5@email.com',
  'email6@email.com',
  'email7@email.com',
  'email8@email.com',
  'email9@email.com',
  'email10@email.com',
]

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

const getRandomEmail = () =>
  `${getRandomArrItem(emailChoice)}`;

// Function to generate thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({      
      thoughtText: getRandomArrItem(thoughtsBodies),
      //username: getRandomName(),     
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThoughts };
