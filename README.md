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

