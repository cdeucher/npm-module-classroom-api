
1) npm i -g classserver --save
2) npm i googleapis --save
3) create conf folder.
4) create file configuration.js in conf folder.
5) content configuration.js:

>>>>>

var configuration = {
    'path_key': '/conf/path of google key file.json',
    'subject': '@mail of master google account'
};

module.exports = configuration;


<<<<<<

6) shell exec: classserver cwd open
