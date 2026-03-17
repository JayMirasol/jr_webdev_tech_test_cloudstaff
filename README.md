# Junior Web Developer Technical Assessment

Hi, i'm Eduardo R. Mirasol Jr, one of the applicants for this role.

## Overview
This repository contains my solutions for the Junior Web Developer technical assessment.
It covers frontend, JavaScript logic, backend API development, and asynchronous programming.

### Project Structure
`jr-webdev-tech-test-cloudstaff`/<br> 
│<br> 
├── `task-1-responsive-profile-card/          # HTML + CSS responsive profile card`<br>
├── `task-2-javaScript-data-transformation/   # JavaScript data transformation`<br> 
├── `task-3-node-rest-api/                    # REST API using Node.js + Express`<br> 
├── `task-4-async-challenge-fetch-aggregate/  # Async/await + API fetching`<br> 
└── `README.md`                                

### Setup Instructions
1. Clone the repository <br>
- `git clone https://github.com/JayMirasol/jr_webdev_tech_test_cloudstaff.git` <br>
- `cd jr-webdev-tech-test-cloudstaff`

### Task 1 Responsive Profile Card

Using the Live Server Extension (Recommended) <br>
If you are on VSCode, go to Extension tab, search 'Live Server' by Ritwick Dey, and install
<br>
Go to bash terminal: <br>
`cd task-1-responsive-profile-card/` <br>

Run: <br>
Right click `index.html` file, and select `Open with Live Server` <br>
Stop:<br>
Click the Port: 5500 button in the status bar to stop the server. <br>

Features: <br>
- Responsive layout <br>
- Circular avatar <br>
- Social links with hover effects <br>
- Clean and minimal design

### Task 2 JavaScript: Data Transformation
Go to directory <br>
`cd task-2-javaScript-data-transformation` <br>

Run all tests: <br>
`node transforms.js --test` <br>

Run specific tasks: <br>
- Filter to active listings only, <br>
`node -e "const t=require('./transforms.js'); console.log(t.filterActiveListings(t.listings));"` <br>
- Sort them by price in ascending order, <br>
`node -e "const t=require('./transforms.js'); const a=t.filterActiveListings(t.listings); console.log(t.sortByPriceAscending(a).map(x=>x.price));"` <br>
- Return a new array of objects containing only id, address, and a formatted price string — e.g. "$450,000", <br>
`node -e "const t=require('./transforms.js'); const a=t.sortByPriceAscending(t.filterActiveListings(t.listings)); console.log(t.mapListingSummary(a));"` <br>
- Calculate and return the average price of the active listings (rounded to nearest dollar), <br>
`node -e "const t=require('./transforms.js'); const a=t.filterActiveListings(t.listings); console.log(t.calculateAveragePrice(a));"`

### Task 3 Node.js REST API
I personally suggest to use POSTMAN as the tool to test all created API endpoints, <br>
if you prefer other, kindly visit `https://github.com/JayMirasol/jr_webdev_tech_test_cloudstaff/blob/8fef882749148b8ad105f353bfd91f27559fee81/task-3-node-rest-api/README.md` for other ways to test it. <br>

How to run: <br>

Open terminal, type `cd task-3-node-rest-api/` <br>
then `npm install` <br>
then `npm start` <br>

The API will be available at:
`http://localhost:3000`

For testing:
The Step by step (POSTMAN) is too long, kindly go to `README.md file on task 3 folder`.

### Task 4 Async Challenge: Fetch & Aggregate

Go to directory, `cd task-4-async-challenge-fetch-aggregate` <br>
type `npm install` <br>

How to run: <br>

Test full dataset, `node fetch.js` <br>
Test bonus flag, `node fetch.js --limit 3` <br>
Test invalid flag input, `node fetch.js --limit abc` <br>

### Reflection Questions:

1. What was the most challenging part of this test, and how did you approach it? <br>

- The most challenging part for me was handling async behavior correctly while still keeping the script readable and safe. In Task 4, I first made it work, then I checked the requirements one by one and noticed I needed to improve error handling so one failed request would not break everything. My approach was to break the problem into small parts: fetch users, fetch posts concurrently, summarize results, then add validation for the limit flag.

2. If you had another 2 hours, what would you improve or add? <br>

- If I had another 2 hours, I would add automated tests and polish. I would add unit tests for helper functions and maybe integration tests for the API endpoints, so I can prove behavior quickly after changes. I would also improve project consistency by adding better npm scripts, clearer README examples, and maybe small refactors for cleaner structure like separating route logic and utilities.

3. What does "good" Node.js code mean to you? Name one principle you always try to follow.<br>

- For me, good Node.js code means clear, reliable, and easy to maintain by other developers. Since I am still a junior, I focus on code that is simple to follow and handles errors properly instead of trying to be too clever. One principle I always try to follow is fail clearly and handle errors gracefully, because users should get useful responses and the app should not crash from one bad input or one failed request.

### Final Notes

- All tasks are implemented using simple and readable approaches
- Focus was placed on clarity, correctness, and maintainability
- No external databases or complex frameworks were used

Best Regards, <br>
Eduardo