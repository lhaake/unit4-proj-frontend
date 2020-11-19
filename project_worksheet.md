# Project Overview - Leah Haake

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1 - Thursday, Nov. 19 | Planning, Work on backend | -
|Day 2 - Friday, Nov. 20 | Backend, Deploy backend | -
|Day 3 - Monday, Nov. 23 | Frontend | -
|Day 4 - Tuesday, Nov. 24 | Frontend | -
|Day 5 - Wednesday, Nov. 25 |  | -
|Day 6 - Thursday, Nov. 26 | Frontend, Style | -
|Day 7 - Friday, Nov. 27 | Style | -

## Project Links

- [My github repo - frontend](https://github.com/lhaake/unit4-proj-frontend)
- [My github repo - backend](https://github.com/lhaake/unit4-proj-backend)
- [Deployment - frontend]()
- [Deployment - backend]()

## Project Description

For my project, I plan to create a training log dashboard for a user to log their workouts with CRUD functionality. I'd like to use Strava as an example app. 
- Using React and Rails 
- Incorporating User Authentication
- Libraries: React Bootstrap Or Atomize (TBD)


## Wireframes
Screenshots of Strava for inspiration:

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
| App | This will be my parent Component | 
| Nav | This will render the nav | 
| About | This will render the about page | 
| Dashboard | This will render the list of all workouts with some details  | 
| Form | This will render form to add and update a workout | 
| Workout | This will render single workout with full details | 
| Filter | This will filter all workouts based on title | 


## MVP/PostMVP 

#### MVP 
- Front End 
	- Set up VS Code for React App
	- Installs
	- Set up file structure
	- Build Components
	- API Calls
	- CRUD Functionality
	- Key Features:
		- Display all workouts on Dashboard - listing title, date, time, type of workout
		- Add/Edit/Delete workouts
		- Display one workout view with full details 
		- Form
			- Drop down of Sports to select 
			- Hide distance field on form when "crossfit", "yoga" are selected
			- Exertion - use a slider (like on Strava)
		- Filter - Search all for workouts by title, date, favorites 
	- Style
	- Deployment

- Back End 
	- Set up project with Rails
	- 2 tables: Users and Workouts
		- Users
			- Username - string
			- Password - string
		- Workouts
			- Date - date 
			- Title - string
			- Time - decimal
			- Sport - string
			- Description - string
			- Distance - decimal 
			- Exertion - integer 
			- Url (if video) - string
			- isFavorite - boolean 
			- foreign key of user
		- One to many relationship --> USER can have many workouts
	- Edit Controllers
	- Testing in Postman
	- Deployment

#### PostMVP 
- For running: calculate pace based on distance and time
- Calendar that would display the workouts by date - API research for this
- Add additional functionality to filter data by date, time, distance, keyword 


## MVP Timeline

| Component | Priority | Estimated Time | Actual Time | Status |
| --- | :---: |  :---: | :---: | :---: |
| Meetings | H | 3hrs|  | |
| Backend: Setup | H | 2hrs| |  |
| Backend: Building Structure, relationships, seeding data | H | 3hrs|  | |
| Backend: Authentication | H | 4hrs| |  |
| Backend: Testing CRUD | H | 2hrs| |  |
| Backend: Heroku Deployment | H | 2hr | |  |
| Frontend: Create React App | H | 1hr|  |  |
| Frontend: Build Components | H | 8hrs|  | |
| Frontend: Testing CRUD | H | 4hrs|  | |
| Frontend: Netlify Deployment| H | 1hr| |
| Styling | M | 5hrs| |  |
| Research | M | 5hr| |  |
| Testing / Troubleshooting | H | 5hrs| | |
| Total |  | 45hrs|  | |


## PostMVP Timeline
| Component | Priority | Estimated Time | Actual Time | Notes |
| --- | :---: |  :---: | :---: | :---: | 
| Calculate pace | M | 3hr| |  |
| Calendar | M | 6hr| |  |
| Additional functionality to filter data | M | 6hr| |  |
| Total |  | 15hrs| 0hrs | |


## Additional Libraries
## Code Snippet
## Challenges 
## Future Direction & Ideas, Takeaways
