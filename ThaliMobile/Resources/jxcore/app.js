var fs = require('fs');
var path = require('path');

cordova('logger').call("JXcore is up and running!");

var javaScriptFunction1 = function() {
    cordova('logger').call("javaScriptFunction1 called from native.");
};

var javaScriptFunction2 = function(message) {
    cordova('logger').call("javaScriptFunction1 called from native. Message is " + message);
};

process.natives.registerJavaScriptFunction1(javaScriptFunction1);
process.natives.registerJavaScriptFunction2(javaScriptFunction2);

process.natives.nativeFunction1();
process.natives.nativeFunction2("JavaScript calling");


//cordova('brianSampleMethod').registerSync(function() {
//                                          process.natives.brianSampleMethod();
//                                          });

//cordova('getBuffer').registerSync(function() {
//                                  console.log("getBuffer is called!!!");
//                                  var buffer = new Buffer(25000);
//                                  buffer.fill(45);
//                                  
//                                  // send back a buffer
//                                  return buffer;
//                                  });
//
//cordova('asyncPing').registerAsync(function(message, callback){
//                                   setTimeout(function() {
//                                              callback("Pong:" + message);
//                                              }, 500);
//                                   });

/*
// requiring a node module
var jsnice = require('json-nice');


//using it
var obj = { a:1, b:2 };
console.log(jsnice(obj));
*/

// execpath
console.log("execPath", process.execPath);

// cwd
console.log("process.cwd", process.cwd());

// iOS user directory
console.log("userPath", fs.readdirSync(process.userPath));

//process.natives.brianSampleMethod();


/*
cordova('logger').call("JXcore is up and running!");

cordova('getBuffer').registerSync(function() {
                                  console.log("getBuffer is called!!!");
                                  var buffer = new Buffer(25000);
                                  buffer.fill(45);
                                  
                                  // send back a buffer
                                  return buffer;
                                  });

cordova('asyncPing').registerAsync(function(message, callback){
                                   setTimeout(function() {
                                              callback("Pong:" + message);
                                              }, 500);
                                   });
*/

process.natives.startCommunications();
