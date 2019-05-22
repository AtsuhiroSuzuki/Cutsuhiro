function capitalize(str) {
	return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function parseDate(date) {
	if(date == null)
		return 0;
	return date.slice(0,10);
}

function parseTime(time) {
	if(time == null)
		return 0;
	let hour = time.slice(0,2);
	let minute = time.slice(3,5);
	let timeQuantifier = "AM";
	if(hour >= 12)
		timeQuantifier = "PM";
	hour = hour%12;
	return hour + ":" + minute + " " + timeQuantifier;
}

function getDay(date){
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	return weekday[date.getDay()];
}