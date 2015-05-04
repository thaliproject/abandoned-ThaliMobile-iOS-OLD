#Thali

ThaliMobile-iOS project.

#### Creating this project from scratch
The instructions below should help you create this project from scratch. They are based 
on ~/Code being your root folder, so adjust things as needed. I'm including them here to
document the process for others. 

##### Prerequisites
* Xcode 6, or later
* Python 2.6 or 2.7
* GCC 4.2, or later
* GNU make 3.81, or later
* 'which' Python module (see below)
* Coffee

##### Install setuptools
Make sure you have [setuptools](https://pypi.python.org/pypi/setuptools) installed. The 
instructions on the site neglect to sudo the python, so the correct command line is:
```
~> curl https://bootstrap.pypa.io/ez_setup.py -o - | sudo python
```

##### Install latest Node.JS
Follow the instructions at [https://nodejs.org/](https://nodejs.org/). When you're done, you should see:
```
~>   node -v
v0.12.2
~>   npm -v
2.7.4
```
(Or later versions.)

##### Install Cordova
```
~> sudo npm install -g cordova
```

##### Clone JXcore
```
~/Code> git clone git@github.com:jxcore/jxcore.git
```
Once cloned, install the 'which' Python module:
```
~/Code> cd jxcore
~> sudo easy_install tools/which-1.1.0-py2.7.egg
```

##### Build JXcore for iOS
This will take a very, very long time (and is why coffee is a prerequisite).     
```
~/Code/jxcore> ./build_scripts/ios_compile.sh
```

##### Create your Cordova project
```
~/Code> cordova create ThaliMobile org.thaliproject.thali ThaliMobile
```

##### In Cordova project root, clone jxcore-cordova
```
~/Code> cd ThaliMobile
~/Code/ThaliMobile> git clone git@github.com:jxcore/jxcore-cordova.git
```

##### Place output from JXcore build into jxcore-cordova
```
~/Code/ThaliMobile> cp -a ~/Code/jxcore/out_ios/ios/bin ~/Code/ThaliMobile/jxcore-cordova/io.jxcore.node
```

##### Add jxcore-cordova plugin and iOS platform
```
~/Code/ThaliMobile> cordova plugin add jxcore-cordova/io.jxcore.node/
~/Code/ThaliMobile> cordova platform add ios
```
You can remove / re-add jxcore-cordova plugin and iOS platform using:
```
~/Code/ThaliMobile> cordova platform remove ios
~/Code/ThaliMobile> cordova plugin remove io.jxcore.node
~/Code/ThaliMobile> cordova plugin add jxcore-cordova/io.jxcore.node/
~/Code/ThaliMobile> cordova platform add ios
```

##### Build the Cordova project
```
~/Code/ThaliMobile> cordova build
```

##### Extract iOS Platform into its own folder
Once this work is done, extract the iOS platform from the Cordova project into its own folder.
```
~/Code> cp -a ~/Code/ThaliMobile/platforms/ios ~/Code/ThaliMobile-iOS
```

And add the following .gitignore
```
# Libraries
*.a
```

to '~/Code/ThaliMobile-iOS/ThaliMobile/Plugins/io.jxcore.node' because libmozjs.a is too large for GitHub.com.

License
-------
MIT

Feedback
--------
If you have any questions, suggestions, or contributions to Thali, please [email thali-talk@thaliproject.org](mailto:thali-talk@thaliproject.org).