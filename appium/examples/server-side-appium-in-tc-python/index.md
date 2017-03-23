---
layout: default
title: Python Server Side Example
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/examples/server-side-appium-in-tc-python/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/examples/server-side-appium-in-tc-python/"/>
Unlike the remotely connected Appium setup, parallel test script
execution is possible in the cloud. The scripts are run in the
cloud rather than through an active connection from remote machine to
the cloud. For this reason scripts don't need to use `testdroid_*`
capabilities at all and instead use only Appium capabilities.

When using server-side Appium execution, tests can be run using standard Appium on hundreds of devices in parallel without any need for complex set-ups at the client side.

**NOTE!** Server side Appium test runs on Bitbar Testing are
  available starting from [SOLO](http://bitbar.com/testing/pricing/public-cloud/)
  plan. Please contact <sales@bitbar.com> for more information.


# Example

This example works for both Android and iOS devices.

Dependencies for running locally:

* Appium server: [https://github.com/bitbar/appium](https://github.com/bitbar/appium  )
* Python 2.7.9: [https://www.python.org/downloads/release/python-279/](https://www.python.org/downloads/release/python-279/)
* Appium Python Client: [https://github.com/appium/python-client](https://github.com/appium/python-client)
* Xmlrunner: [https://pypi.python.org/pypi/xmlrunner/1.7.7](https://pypi.python.org/pypi/xmlrunner/1.7.7)
* Example project folder: [PythonParallelScripts.zip](https://www.dropbox.com/s/9tglr5kezvfk48n/PythonParallelScripts.zip?dl=0)
* BitbarSampleApp: [BitbarSampleApp.apk](https://www.dropbox.com/s/65zjcyz15l50c4n/BitbarSampleApp.apk?dl=0)

## Running the scripts

In *run-tests.sh* make sure that the *${TEST}* variable has correct
name in it. This is the name of the python script file of the actual
tests. To get screenshots and test results visible to the cloud, make
sure screenshots can be found from "screenshots" directory at the
root of the test files directory. This applies also to JUnit result
files, which have to be named as "TEST-all.xml" and also located in the
root of the test files directory.

## Running in cloud

Test and additional needed files need to be sent to cloud as a zip package. [PythonParallelScripts.zip](https://www.dropbox.com/s/9tglr5kezvfk48n/PythonParallelScripts.zip?dl=0)) is an example package. This only needs to be modified by renaming *run-tests_android.sh* or *run-tests_ios.sh* to *run-tests.sh* depending which environment is being tested. 

Note, *run-tests.sh* needs to always be at the root of the package.

An example zip package content could look like this.

```
  Length      Date    Time    Name
---------  ---------- -----   ----
    13042  2015-02-06 09:57   Appium-Python-Client-0.13.tar.gz
     2641  2015-03-11 15:27   BitbarSampleAppTest.py
     1736  2016-08-19 19:44   run-tests.sh
     4864  2015-03-11 15:07   TestdroidAppiumTest.py
    15922  2015-02-13 18:11   xmlrunner.tar.gz
---------                     -------
    38205                     5 files
```

On [Bitbar Testing](https://cloud.testdroid.com):

* Create a new Appium Server side project (either iOS or Android)
* Create a new test run inside of new server side project 
  * Upload tested application (apk/ipa) in the "Application" step
  * Upload the above created zip using the "Upload test file" step
  * Choose the device group to use or create a new group for this run
  * Start testrun


## Running locally

* Launch Appium server as normally when running local Appium tests. Appium for iOS needs device id in launch parameters.
* In *run-tests.sh* comment out or remove the lines between 
  *##### Cloud testrun dependencies start* and  *##### Cloud testrun dependencies end.*
* *run-tests.sh* assumes the tested apk/ipa is named as application.apk or application.ipa and is located at the root of the working directory. Alternatively update *run-tests.sh* to use another path.
* Launch tests by running the *run-tests.sh* script
