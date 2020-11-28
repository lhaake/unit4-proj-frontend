// research -- JS parsing hours, minutes, seconds 
// form should have hours, minutes, seconds for user to fill in
// take the time from form, convert to seconds then divide by distance for the pace
// convert to seconds :
  // hours: 
  // minutes:
  // seconds:
// Once you have total seconds, calculate pace and convert back to minutes / miles 
// We'd want to see the pace in this format 8:30 - would need to convert the time to be in this format minutes : seconds 0:00 or 00:00 for paces 10:00+ 

const paceConverter = (hours, minutes, seconds) => {
  let totalTime = 0
  totalTime = (hours * 3600) + (minutes * 60) + seconds
}