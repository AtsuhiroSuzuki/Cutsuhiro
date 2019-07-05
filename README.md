# Cutushiro
This is a appointment scheduling website for my haircutting business. It can be found at [cutsuhiro.web.illinois.edu](https://cutsuhiro.web.illinois.edu).
## Overview
When going to the website you're greeted with a homepage with an overview and a FAQ. You'll also see a make appointment button and a list of scheduled appointments.

At the make appointment page, there will be a form with available timeslots and a place to put your name and a note. The timeslots are created with an administrator dashboard.

Below is the administrator passwords. Here you can see all submitted appointments, with the ability to confirm/un-confirm them as well as delete them. You can also create new timeslots and delete existing ones.

## Implementation Notes
* When an appointment for a timeslot is submitted, it is removed from available timeslots.
* For a timeslot to be deleted, any corresponding appointment must first be deleted.

## TODO
* Cron job to remove expired times.
* Make more mobile friendly and get it working on iOS.
* Update UI and make admin page background nicer.<br>
/*background-image: linear-gradient(to bottom right, #515346, #282923); Dark Grey*/<br>
/*background-image: linear-gradient(to bottom right, #ffecd2,#fcb69f); Peach*/<br>
/*background-image: linear-gradient(to bottom right, #a1c4fd, #c2e9fb); Sky blue*/<br>
/*background-image: linear-gradient(to bottom right, #cfd9df,#e2ebf0); Metallic*/<br>
/*background-image: linear-gradient(to bottom right, #a3bded,#6991c7);Sunset Sky*/<br>
/*background-image: linear-gradient(to top right, #13547a,#80d0c7); Shallow Ocean*/<br>
/*background-image: linear-gradient(to top right, #c79081,#dfa579); Desert*/<br>
/*background-image: linear-gradient(to top right, #09203f,#537895); Twilight*/

## Tech Stack
### Front-End
HTML and CSS with Bootstrap<br>
Plain Javascript
### Back-End
NodeJS
### Database
MySQL
