//Variable for connection to the MySQL database
var mysql = require('mysql');
var express = require('express');
var app = express();

var request = require('request');

//Local DB
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1259",
    database: "haircutdb"
});*/

//CPanel DB
var connection = mysql.createConnection({
    host: "localhost",
    user: "cutsuhiro_admin",
    password: "5C8xdpG7xDK2Djp3",
    database: "cutsuhiro_haircutdb"
});


//Used for path.join() to locate files
var path = require("path");

//Required for HTML POST requests, which
var bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//Used for SQL connection
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL!");
});

app.listen(4000, function(){
    console.log('listening on *:4000');
});

exports.connection = connection;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function(req, res, next) {
    connection.query('SELECT name, date, time FROM appointments WHERE confirmed = 1 ORDER by date, time', function(err, result) {
        res.render(path.join(__dirname, '..', 'views/index.ejs'), { 'appointmentData' : result });
    });
});

app.get('/appointment', function(req, res, next) {
    connection.query('SELECT timeslots.* FROM timeslots LEFT JOIN appointments ON timeslots.timeslot_id = appointments.timeslot_id WHERE appointments.timeslot_id IS NULL ORDER BY date,time', function(err, result) {
        var timeslotData = {
            date: [],
            time: [],
            message: [],
            id: []
        }
        for(i = 0; i < result.length; i++){
            timeslotData.date.push(result[i]["date"]);
            timeslotData.time.push(result[i]["time"]);
            timeslotData.message.push(result[i]["message"]);
            timeslotData.id.push(result[i]["timeslot_id"]);
        }
        res.render(path.join(__dirname, '..', 'views/appointment.ejs'), {'timeslotData' : timeslotData});
    });
});

app.post('/appointment', function (req, res) {
    let appointmentData = {
        name : req.body.name,
        date : req.body.date,
        time : req.body.time,
        message : req.body.message,
        timeslot_id : req.body.id,
        confirmed : 0
    } 
    connection.query('INSERT INTO appointments SET ?', appointmentData, function(err, result) {
        res.send('/formSubmitted');
    });
});

app.get('/formSubmitted', function(req, res) {
    res.render(path.join(__dirname, '..', 'views/formSubmitted.ejs'));
});

app.get('/barber', function(req, res) {
    connection.query('SELECT appointment_id, name, date, time, message, confirmed FROM appointments ORDER BY date, time', function(err, result){
        let appointmentData = result;
        connection.query('SELECT timeslots.timeslot_id, timeslots.date, timeslots.time FROM timeslots LEFT JOIN appointments ON timeslots.timeslot_id = appointments.timeslot_id WHERE appointments.timeslot_id IS NULL ORDER BY date, time', function(err, rows){
            res.render(path.join(__dirname, '..', 'views/admin.ejs'),{'appointmentData' : appointmentData, 'timeslotData' : rows});
        });
    });
});

app.post('/barber', function(req, res) {
    connection.query('UPDATE appointments SET confirmed = ? WHERE appointment_id = ?',[req.body.confirm, req.body.appointment_id], function(err, result){
        res.send('/barber');
    });
});

app.post('/deleteAppointment', function(req, res) {
    connection.query('DELETE FROM appointments WHERE appointment_id = ?', req.body.appointment_id, function(err, result){
        res.send('/barber');
    });
});

app.post('/deleteTimeslot', function(req, res) {
    connection.query('DELETE FROM timeslots WHERE timeslot_id = ?', req.body.timeslot_id, function(err, result){
        res.send('/barber');
    });
});

app.post('/submitTimeslot', function(req, res) {
    var timeslotData = {
        date : req.body.timeslot_date,
        time : req.body.timeslot_time
    }
    connection.query('INSERT INTO timeslots SET ?', timeslotData, function(err, result){
        res.send('/barber');
    });
});
