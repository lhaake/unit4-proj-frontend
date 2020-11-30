# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Thursday, Nov. 19 | Planning, Work on backend, Deploy backend | Done
|Day 2 - Friday, Nov. 20 | Auth, Frontend | Done
|Day 3 - Monday, Nov. 23 | Frontend, CRUD | Done
|Day 4 - Tuesday, Nov. 24 | Frontend, CRUD | Done
|Day 5 - Wednesday, Nov. 25 | Frontend, Filter Component | Done
|Day 6 - Thursday, Nov. 26 | - | Day Off
|Day 7 - Friday, Nov. 27  | Frontend, Styling | Done
|Day 8,9 - Weekend  | Deploy to Netlify, Frontend, Styling | -
|Day 10 - Monday, Nov. 30  | Project Due, Submit Links, Finalize Worksheet | -

## Project Links

- [My github repo - frontend](https://github.com/lhaake/unit4-proj-frontend)
- [My github repo - backend](https://github.com/lhaake/unit4-proj-backend)
- [Netlify Deployment - frontend](https://lhaake-unit4proj.netlify.app/)
- [Heroku Deployment - backend](https://lh-training-log-backend.herokuapp.com)

## Project Description

For my project, I plan to create a training log dashboard for a user to log their workouts with CRUD functionality. I'd like to use Strava as an example app to guide my design. 
- Using React and Rails 
- Incorporating User Authentication
- New tech: React Bootstrap and [react-icons](https://react-icons.github.io/)

## User Stories
- A user can create an account 
- A user can log in to their account
- A user can add workouts
- A user can edit their workouts
- A user can delete their workouts
- A user can view their workouts in 3 places: Dashboard (some details), Search table (some details), Workout (full details)
- A user can search through their list of workouts added by title

## Wireframes
Screenshots of Strava application for inspiration:

- [DASHBOARD](https://res.cloudinary.com/lhaake/image/upload/v1605761293/Capstone/Dashboard.png)
- [DASHBOARD](https://res.cloudinary.com/lhaake/image/upload/v1605761293/Capstone/Dashboard%202.png)
- [FORM](https://res.cloudinary.com/lhaake/image/upload/v1605762106/Capstone/Screen_Shot_2020-11-18_at_10.42.11_PM_uirnkw.png)
- [FORM 2](https://res.cloudinary.com/lhaake/image/upload/v1605761294/Capstone/Form%20dropdown.png)
- [WORKOUT](https://res.cloudinary.com/lhaake/image/upload/v1605761293/Capstone/Workout%20View.png)
- [CALENDAR](https://res.cloudinary.com/lhaake/image/upload/v1605761632/Capstone/Calendar.png)
- [SEARCH](https://res.cloudinary.com/lhaake/image/upload/v1605761292/Capstone/Search%20by%20Title%2C%20keyword%2C%20sport.png)

- [React architecture](https://docs.google.com/drawings/d/1CVjWoqG1d2YgeEK_uGywdlIm9kWPPRkem8lyZxed0Ag/edit?usp=sharing)


## Components

| Component | Description | 
| --- | :---: |  
| App | The parent Component | 
| Nav | Navbar | 
| Home | Home page | 
| LoginForm | Form for user to Sign up or to Login | 
| Dash | Full list of workouts with some details  | 
| WorkoutForm | Form for user to add and update a workout | 
| Workout | 1 workout with full details | 
| FilterForm | Search bar that filters workouts based on the title | 
| Filter | Displays the filtered workouts in table format | 


## MVP

Front End 
- Set up VS Code for React App
- Installs
- Set up file structure
- Build Components
- Make API Calls
- Build CRUD Functionality
- Key Features:
	- User Authentication 
	- Display all workouts on Dashboard - listing title, date, time, type of workout
	- Add/Edit/Delete workouts
	- Display one workout view with full details 
	- Workout Form
		- Drop down of Sports to select 
		- Hide distance field on form when "crossfit", "yoga" are selected
		- Exertion - use a slider (like on Strava)
	- Filter - Search all for workouts by title
- Style
- Deployment

Back End 
- Set up project with Rails
- 2 tables: Users and Workouts
	- One to many relationship --> USER can have many workouts
	- Users
		- Username - string
		- Password - string
	- Workouts
		- Date - string 
		- Title - string
		- Time - float
		- Sport - string
		- Description - text
		- Distance - float
		- Exertion - integer 
		- Url (if video) - string
		- isFavorite - boolean 
		- user_id - integer (foreign key of user)
- Edit Controllers
- Testing in Postman
- Deployment


## PostMVP 
- For running/biking: calculate pace based on distance and time
- Calendar that would display the workouts entered by date (API research needed for this)
- Add additional functionality to filter data by date, time, distance, keyword 


## MVP Timeline

| Component | Priority | Estimated Time | Actual Time | Status |
| --- | :---: |  :---: | :---: | :---: |
| Meetings | H | 3hrs| 1hr | |
| Backend: Rails set up, building structure, relationships, seeding data | H | 3hrs| 2.5hrs | |
| Backend: Authentication + Research | H | 4hrs| 3hrs |  
| Backend: Testing CRUD | H | 2hrs| 1hr |  |
| Backend: Heroku Deployment | H | 2hr | 0.5hr |  |
| Frontend: Create React App + Installs | H | 1hr| 0.5hr |  |
| Frontend: Build Components | H | 8hrs| 4hrs | |
| Frontend: Authentication + Research | H | 4hrs| 3hrs |  |
| Frontend: Testing CRUD | H | 4hrs| 1hr | |
| Frontend: Netlify Deployment| H | 1hr| 0.25hr |
| Frontend: New tech - React Bootstrap | H | 5hrs| 2hrs |
| Styling | M | 5hrs| 5hrs |  |
| Research | M | 4hrs| 4hrs|  |
| Troubleshooting | H | 5hrs| 5hrs | |
| Total |  | 51hrs|  | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Calculate pace | M | 5hrs| - |  |
| Calendar | M | 6hrs| - |  |
| Additional functionality to filter data | M | 6hrs| - |  |
| Total |  | 17hrs| - | |


### Project Notes

| Thursday, November 19 | 
|---|
1. Met with Alex for project approval. 
2. Backend: Rails app is set up. 2 tables in database - users and workouts. Researched Authentication. Set up Auth on backend. Tested CRUD routes, Auth on Postman. Deployed to Heroku. Tested on postman after deployment with Heroku url. 
3. Goal for rest of the day: watch Alex's videos about setting up Auth on front end, think through & write notes for react Architecture 


| Friday, November 20 | 
|---|
1. Worked on Authentication
	- Research
	- Troubleshooting the sign up, login, log out functionality
	- The sign up and log in forms are working. 
	- Can see the token being saved in local storage in the "Application" section of Developer Tools 
	- Have been able to fetch workout data for user that is logged in. 
	- Log out button is working. 
2. Goal for rest of the day: map over user's data on dashboard component
3. Created Dash component and Workout component. Added routes and links so that when a user clicks the title of a workout on the Dashboard that they are brought to the Workout component, "/workout/:id" with the 1 workout they clicked on and full details. 

| Monday, November 23 | 
|---|
1. Create Form that allows user to Add a Workout 
2. Test Form - see that is it added to Dashboard list of all workouts
3. 'Add Workout' Link on Dashboard and App 
4. Troubleshooting my useEffect in App. I realized that things weren't working correctly because the useEffect was calling getWorkouts() before the login() had stored the login values (token) in state (which is needed in the getWorkouts()). I ended up passing a function to useEffect that is an if statement to check if the userLogin state had the token. if it did, then the getWorkouts() would run
5. React Bootstrap Form, confirmed the form is working. 
6. On Form, hid the distance field when selected a sport that is not Run, Walk, Hike, or Bike. 
7. On Form, hid the URL field when selected a sport that is not Yoga, pilates, Workout..etc


| Tuesday, November 24 | 
|---|
1. Added and Tested CRUD Functionality --> Create, Update, Delete 
	- Edit a workout
	- Delete a workout 
2. Research icons for edit and delete - React-icons
3. Decided to not use Atomize for the project
4. Researched form validation, added "required" to Login, Sign Up and Workout form fields


| Wednesday, November 25 | 
|---|
1. Created Filter and FilterForm Components
2. FilterForm is filtering based on title entered. I spent a lot of time troubleshooting how I could filter titles that include a word included in the title, without a === strict match of every letter being the same as the title. I opted to use a for loop and conditional statement that checks the titles stored in state with the input from the form using a string method .includes(). Due to case sensitivity,  I converted the input string and title string to be lowercase to compare more effectively. 
3. Created function that converts Date to read "Fri Nov 27 2020" - In Dash component


| Thursday, November 26 | 
|---|
DAY OFF 

| Friday, November 27 | 
|---|
1. Favorites switch is working !! (This was challenging to figure out the toggle between true and false, because the form is used for 2 different situations -- 1) empty form 2) selected item.
2. Added Thumbs Up Icon (Favorite) to Dash, Filter, Workout Components 
3. Added Range Slider for Exertion on Workout Form. I used the npm package "react-bootstrap-range-slider". Different colors for numbers
4. Workouts are now ordered by most recent date (descending order) in the Dash and Filter Components
5. Search bar and Filter are now on the same page!!


| Saturday, November 28 | 
|---|
1. Deployed to Netlify!
2. CSS Done: Styled Login, Sign up, Workout Form, Filter, FilterForm


| Sunday, November 29 | 
|---|
1. Styling Done: Nav (links change from blue to black), Dashboard edited the mobile css, Workout - style, date format, icons for edit and delete, Google Fonts


Next up:
1. In App, userLogged Out message 
2. Log in Error 
  - Error message on screen when Logging In - Invalid Username or Password. The username or password did not match. Please try again. 
 

- Push master branch to github
- Check netlify
- Test site after updated on netlify
- Update times on worksheet 
- Update Unit Project Spreadsheet - with my link


## Additional Libraries
## Code Snippet
## Challenges 
## Takeaways

## Future Direction & Ideas
- PostMVP items - Pace, Calendar, Filter Options
- Add form validation that shows up before pressing save
- When Logged In change the nav to show a username / Icon. When Logged out - remove this
- Message confirming you are logged in 
- Message confirming you have signed up - created an Account
- Pagination on Filter 
- Workout Form  make the "Sport" field required 
- Issues: Log out in nav - can't style it correctly 
- Name ideas? 
