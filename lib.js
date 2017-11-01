const google = require('googleapis');
var path = process.cwd();
var configuration = require(path+'/conf/configuration');
const google_key = require(path+configuration.path_key); //download from google API console
const jwtClient = new google.auth.JWT(
  google_key.client_email,
  null,
  google_key.private_key,
  ["https://www.googleapis.com/auth/classroom.courses"],
  configuration.subject
);
class oAPI{
    constructor(content){
      this.AUTH;
      this.CLASS;
    }
    startApi(auth){
       this.AUTH  = auth;
       this.CLASS = google.classroom('v1');
       this.listCourses();
    }
    listCourses() {
      this.CLASS.courses.list({
        auth: this.AUTH,
        pageSize: 10
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        var courses = response.courses;
        if (!courses || courses.length == 0) {
          console.log('No courses found.');
        } else {
          console.log('Courses:');
          for (var i = 0; i < courses.length; i++) {
            var course = courses[i];
            console.log('%s (%s)', course.name, course.id);
          }
        }
      });
    }
}
var _API = new oAPI();


var exec_open_connect = function(arg){
    console.log(arg);
    jwtClient.authorize((err, tokens) => (err
      ? console.log(err)
      : (() => {
        console.log("Google-API Authed!");
        _API.startApi(jwtClient);
      })()
    ));
}


exports.open_connect        = exec_open_connect;
