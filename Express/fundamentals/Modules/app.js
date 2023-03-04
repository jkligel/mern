const { greet, add } = require("./my_module");
greet();
add(5, 7);


const myCustomModule = require("./my_module");
myCustomModule.greet();
myCustomModule.add(5, 7);

// IMPORTANT NOTES:
// You'll notice that we require the string "./my_module". There are 2 things to note here:

// There is no .js at the end of the file. The require method automatically looks for JavaScript files, so we don't need to include the .js file extension.
// The files app.js and my_module.js are in the same directory. Normally, the require() method looks for node modules that aren't in the same directory as the file that is running; by default, the require() method looks for the modules located in a folder called node_modules. To tell require() to look in the current directory (i.e. the folder that the file is located in) we have to include "./" in front of the file path. "./" (dot-slash) is the file path for the current directory