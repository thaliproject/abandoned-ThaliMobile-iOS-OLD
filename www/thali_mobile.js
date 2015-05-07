(function () {
  // Log in Cordova.
  function logInCordova(x) {
    var logging = document.getElementById('logEntries');
    if (logging) {
      var logEntryDiv = document.createElement('div');
      logEntryDiv.className = 'logEntry';
      logEntryDiv.innerHTML = x;
      logging.appendChild(logEntryDiv);
    }
  }

  var jxcoreLoadedInterval = setInterval(function () {
    // HACK Repeat until jxcore is defined. 
    if (typeof jxcore == 'undefined') {
      return;
    }

    // Stop interval.
    clearInterval(jxcoreLoadedInterval);

    // Set the ready function.
    jxcore.isReady(function () {
      // Log that JXcore is ready.
      logInCordova('JXcore reports ready.');

      jxcore('logger').register(logInCordova);

      logInCordova('Loading app.js');
      jxcore('app.js').loadMainFile(function (ret, err) {
        if (err) {
          alert("Error!!!" + err);
        } else {
          logInCordova('Loaded');
          jxcore_ready();
        }
      });
    });
  }, 10);
})();
