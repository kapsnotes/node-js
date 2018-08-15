console.log('Starting application');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile(
    'greetings.txt',
    '\n1: Hello ' + user.username + '!',
    function (err) {
        if (err) {
            console.log('Unable to write file');
        }
    }
);

fs.appendFile(
    'greetings.txt',
    `\n2: Hello ${user.username}!`,
    'utf8',
    (err) => {
        if (err) {
            console.log('Unable to write file');
        }
    }
);
