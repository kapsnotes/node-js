# Node JS Basics

## Quick links

- [Notes Home](../README.md)
- ~~Section Home~~
- ~~Previous~~
- [Next]()

## Chrome's V8 Java Script engine

Chrome's V8 JS engine is Java Script engine that powers both Google chrome browser and Node JS.

However, there are key difference between Browser and Node JS application

| Browser         | Console        |
|-----------------|----------------|
| window          | global         |
| document        | process        |

## First program

```javascript
console.log('Starting application');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

fs.appendFile(
    'greetings.txt',
    '\n1: Hello ' + user.username + '!',
    'utf8',
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
```

**Explanation**

Here, first line is just the output to the console (terminal).

Line 3 and 4 are including core module of Node JS; File System and Operating System. Modules are just the Java Script code, that do some general purpose work and help us to reuse the code so that we can concentrate on our ligic, istead of doing common tasks. Node Js comes with some most commonly used modules but we can also use `npm` to install any of several thousand 3rd party open source modules, which solve some common problem for us.

Line 6 is using `os` module to get logged in user information.

Line 8-17 and line 19-28 are doing same task, but in two different ways. They are writing greetings in a `greeting.txt` file. Since we need to add greetings in a file, we need `fs`'s `appendfile` function, which need 3/4 arguments:

- Name of file - greetings.txt
- Message to be appended
- (Optional) options object or encoding string
- Callback function

Line 10 and 20 are printing in two different ways. We have hardcoded text `Hello`, followed by name stored in a variable. Line 10 is doing it in normal JS way with `+` symbol to concat strings. Line 20 is using back quotes and `${variableName}` to provide variable within string.

Line 11-15 and 22-26 is a callback function in two different way. Line 11 is normal JS function but line 22 is ES6's shortcut for functions `(parameters) => {body}`