var fs = require('fs');
var path = require('path');

cordova('logger').call("JXcore is up and running!");
cordova('logger').call("Brian1");
cordova('logger').call("Brian2");
cordova('logger').call("Brian3");
cordova('logger').call("Brian4");
cordova('logger').call("Brian5");
cordova('logger').call("Brian6");

process.natives.thaliMethod1();
process.natives.thaliMethod2("Brian");


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
