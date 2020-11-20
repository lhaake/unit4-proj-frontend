# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Thursday, Nov. 19 | Planning, Work on backend, Deploy backend | Complete
|Day 2 - Friday, Nov. 20 | Authorization, Frontend | -
|Day 3 - Monday, Nov. 23 | Frontend | -
|Day 4 - Tuesday, Nov. 24 | Frontend | -
|Day 5 - Wednesday, Nov. 25 | Frontend, Style  | -
|Day 6 - Thursday, Nov. 26 | | -
|Day 7 - Friday, Nov. 27 | Style | -

## Project Links

- [My github repo - frontend](https://github.com/lhaake/unit4-proj-frontend)
- [My github repo - backend](https://github.com/lhaake/unit4-proj-backend)
- [Netlify Deployment - frontend]()
- [Heroku Deployment - backend](https://lh-training-log-backend.herokuapp.com)

## Project Description

For my project, I plan to create a training log dashboard for a user to log their workouts with CRUD functionality. I'd like to use Strava as an example app to guide my design. 
- Using React and Rails 
- Incorporating User Authentication
- New tech -- Libraries: React Bootstrap Or Atomize (TBD)


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
| App | parent Component | 
| Nav | Navbar | 
| About | About page | 
| LoginForm | Form for user to Sign up or to Login | 
| Dashboard | Full list of workouts with some details  | 
| WorkoutForm | Form for user to add and update a workout | 
| Workout | 1 workout with full details | 
| Filter | Search bar that filters workouts based on the title | 


## MVP/PostMVP 

#### MVP 
- Front End 
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
		- Filter - Search all for workouts by title, date, favorites 
	- Style
	- Deployment

- Back End 
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

#### PostMVP 
- For running: calculate pace based on distance and time
- Calendar that would display the workouts entered by date (API research needed for this)
- Add additional functionality to filter data by date, time, distance, keyword 


## MVP Timeline

| Component | Priority | Estimated Time | Actual Time | Status |
| --- | :---: |  :---: | :---: | :---: |
| Meetings | H | 3hrs| 0.5 | |
| Backend: Rails set up, building structure, relationships, seeding data | H | 3hrs| 2.5hrs | |
| Backend: Authentication + Research | H | 4hrs| 3hrs |  |
| Backend: Testing CRUD | H | 2hrs| 1hr |  |
| Backend: Heroku Deployment | H | 2hr | 0.5hr |  |
| Frontend: Create React App | H | 1hr|  |  |
| Frontend: Build Components | H | 8hrs|  | |
| Frontend: Authentication + Research | H | 4hr| 3hr |  |
| Frontend: Testing CRUD | H | 4hrs|  | |
| Frontend: Netlify Deployment| H | 1hr| |
| Frontend: new tech | H | 5hr| |
| Styling | M | 5hrs| |  |
| Research | M | 4hr| |  |
| Troubleshooting | H | 5hrs| 1hr | |
| Total |  | 51hrs|  | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Calculate pace | M | 5hr| |  |
| Calendar | M | 6hr| |  |
| Additional functionality to filter data | M | 6hr| |  |
| Total |  | 17hrs| hrs | |


### Project Notes


| Thursday, November 19 | 
|---|
- Met with Alex for project approval. 
- Backend: Rails app is set up. 2 tables in database - users and workouts. Researched Authentication. Set up Auth on backend. Tested CRUD routes, Auth on Postman. Deployed to Heroku. Tested on postman after deployment with Heroku url. 
- Goal for rest of the day: watch Alex's videos about setting up Auth on front end, think through, write notes for react Architecture 


| Friday, November 20 | 
|---|
- Worked on Authentication
	- Research
	- Troubleshooting the sign up, login, log out functionality
	- The sign up and log in forms are working. 
	- Can see the token being saved in local storage in the "Application" section of Developer Tools 
	- Have been able to fetch workout data for user that is logged in. 
	- Log out button is working. 
- Goal for rest of the day: map over user's data on dashboard component 


## Additional Libraries
## Code Snippet
## Challenges 
## Future Direction & Ideas, Takeaways