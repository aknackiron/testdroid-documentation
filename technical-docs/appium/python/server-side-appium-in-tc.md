---
layout: default
title: Move Your Python Tests to Cloud
---

Unlike the usual remotely connected Appium setup, parallel test script
execution is possible in the cloud. The scripts will be run in the
cloud rather than through an active connection from your machine to
the cloud. This is why the scripts don't need to use testdroid
capabilities at all and instead use only Appium capabilities.

When using server-side Appium execution, you can run standard Appium
tests on hundreds of devices in parallel without any need for complex
set-ups at the client side.

**NOTE!** Server side Appium test runs on Testdroid Cloud are
  available only with [BUSINESS](http://testdroid.com/pricing)
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

In *run-tests.sh* you will need to make sure that the *${TEST}* variable
has correct name in it. This is the name of the python script file of
your actual tests. To get screenshots and test results visible to the
cloud, you'll need to make sure your screenshots can be found from
"screenshots" directory from the root of your test files
directory. This applies also to JUnit result files, which have to be
named as "TEST-all.xml" and located in the root of your test files
directory.
 
## Running in cloud

* Compress all the used files into a zip: (these can be found from
[PythonParallelScripts.zip](https://www.dropbox.com/s/9tglr5kezvfk48n/PythonParallelScripts.zip?dl=0)) - Make sure that at least the
*run-tests.sh* file is in the root of your zip! This script is the
launch point of your testing process:  
  * Appium-Python-Client-0.13.tar.gz 
  * BitbarSampleAppTest.py  
  * run-tests.sh (Rename the run-tests_android.sh or run-tests_ios.sh to run-tests.sh as needed)  
  * TestdroidAppiumTest.py  
  *  xmlrunner.tar.gz 
* Create a calabash project at [cloud
UI](https://cloud.testdroid.com).
* Don't forget to let us know about your newly made project so that we can configure it for you!  
* Start creating a new test run in your project at cloud UI
* Upload your application (apk/ipa) through the "Application" tab
* Upload the zip with scripts and Appium-Python-Client-0.13.tar.gz through the "Upload
test file" tab
* Choose the devices you wish to use
* Start testrun.

## Running locally

* Launch appium server as you would normally do when running local
appium tests. Appium for iOS will need device id in launch parameters.  
* Comment out or **remove the line(s)** inside *run-tests.sh* marked with:  
    ##### Cloud testrun dependencies start  
    ##### Cloud testrun dependencies end.  
* Make sure that the apk/ipa is named as application.apk/application.ipa
at the root of your working directory. Alternatively edit the
*run-tests.sh* file to use another path.  
* Launch the tests by running the run-tests.sh script.
