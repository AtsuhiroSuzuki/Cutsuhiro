# Cutushiro
This is a appointment scheduling website for my haircutting business. It can be found at [cutsuhiro.web.illinois.edu](https://cutsuhiro.web.illinois.edu).
## Overview
When going to the website you're greeted with a homepage with an overview and a FAQ. You'll also see a make appointment button and a list of confimred appointments. Note, having only confirmed appointments be visible on the homepage is to avoid malicious users from making fake, unwholesome names to be displayed without the barber/administrators explicit approval.

![Confirmed Appointments](/public/images/Screenshots/ConfirmedAppointments.PNG)

At the make appointment page, there will be a form with available timeslots and a place to put your name and a note. The timeslots are created with an administrator dashboard.

![Make Appointment](/public/images/Screenshots/MakeAppointment.PNG)

Below is the administrator dashboard. Here you can see all submitted appointments, with the ability to confirm/un-confirm them as well as delete them. You can also create new timeslots and delete existing ones.

![Appointments List](/public/images/Screenshots/AppointmentsList.PNG)
![Timeslot Creation](/public/images/Screenshots/TimeslotCreation.PNG)

## Implementation Notes
* When an appointment for a timeslot is submitted, it is removed from available timeslots.
* For a timeslot to be deleted, any corresponding appointment must first be deleted.

## TODO
* Cron job to remove expired times.
* Make more mobile friendly and get it working on iOS.
* Update UI and make admin page background nicer.<br>

## Tech Stack
### Front-End
HTML and CSS with Bootstrap<br>
Plain Javascript
### Back-End
NodeJS
### Database
MySQL
