---
layout: default
title: Java Server Side Example
---

When using server-side Appium execution, standard Appium tests can be run on hundreds of devices in parallel without any need for complex set-ups at the client side.

The examples presented here below are valid for both Android and iOS devices.

**NOTE!** Server side Appium test runs on Testdroid Cloud are
  available starting from [SOLO](http://testdroid.com/pricing)
  plan. Please contact <sales@bitbar.com> for more information.

# Example **Without** Image Recognition

Dependencies for running locally:

* Appium server: [https://github.com/bitbar/appium](https://github.com/bitbar/appium)
* Appium driver fork: [https://github.com/bitbar/testdroid-appium-driver](https://github.com/bitbar/testdroid-appium-driver)
* Example project folder: [JavaParallelScripts.zip](https://www.dropbox.com/s/zmr0ls8enjgupsa/JavaParallelScripts.zip?dl=0)
* BitbarSampleApp: [BitbarSampleApp.apk](https://www.dropbox.com/s/65zjcyz15l50c4n/BitbarSampleApp.apk?dl=0)

## Running the Scripts

In *run-tests.sh* make sure that the *${TEST}* variable has correct name value in it. This is the name of the java script file of the actual tests.

### Modify *testdroid.properties* file to include:

* appium.appFile=*/location/app.apk* or */location/app.ipa*
  * default value for android devices in cloud: *application.apk*
  * default value for ios devices in cloud: *application.ipa*
* testdroid.appiumUrl=http://localhost:4723/wd/hub
* appium.automationName='android' or 'iOS'

## Running in Cloud

* Compress all used files into a zip: (example can be found from
  [JavaParallelScripts.zip](https://www.dropbox.com/s/zmr0ls8enjgupsa/JavaParallelScripts.zip?dl=0)) - **Make sure that at least the *run-tests.sh* file is in the root of the zip! This script is the launch point of the testing process:**
  * pom.xml
  * *run-tests.sh* (Rename *run-tests_android.sh* or *run-tests_ios.sh* as needed)
  * src/
  * testdroid.properties

On [Testdroid Cloud](cloud.testdroid.com):

* Create an Appium Server side project (either iOS or Android)
* Creating new testrun inside of new server side project
* Upload your application (apk/ipa) through the "Application" step
* Upload the zip with scripts through the "Upload test file" step
* Choose the device group to use or create a new group for this test run
* Start testrun

## Running Locally

* Launch Appium server as normally when running local Appium tests.
* Make sure the apk/ipa is named as *application.apk* or *application.ipa* at the root of the working directory. Alternatively edit *testdroid.properties* file to use another path.
* To start test run, call `mvn test` or `mvn clean test` in the project root folder

# Example **with** Image Recognition

Dependencies for running locally:

* Appium server: [https://github.com/bitbar/appium](https://github.com/bitbar/appium)
* Appium driver fork: [https://github.com/bitbar/testdroid-appium-driver](https://github.com/bitbar/testdroid-appium-driver)
* Example project folder: [JavaIMGRecognitionParallelScripts.zip](https://www.dropbox.com/s/sqyg6u7a8eyo96x/JavaIMGRecognitionParallelScripts.zip?dl=0)
* BitbarSampleApp: [BitbarSampleApp.apk](https://www.dropbox.com/s/65zjcyz15l50c4n/BitbarSampleApp.apk?dl=0)
* OpenCV: [https://github.com/bitbar/testdroid-samples/tree/master/image-recognition](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition) (Akaze and OpenCV builds are included in zip)

## Running the Scripts

In *run-tests.sh*  make sure that the *${TEST}* variable has correct name in it. This is the name of the java script
file of the actual tests.

### Modify testdroid.properties file to include:

* appium.appFile=*/location/app.apk* or */location/app.ipa*
  * default value for android devices in cloud: *application.apk*
  * default value for ios devices in cloud: *application.ipa*
* testdroid.appiumUrl=http://localhost:4723/wd/hub
* appium.automationName='android' or 'iOS'

**Akaze has different builds for Mac and Linux. Make sure to use the corret build depending on host. In cloud, Android devices use Linux environment and iOS devices use Mac environment. The desired akaze folder needs to be named as "akaze" in project folder.**

## Running in Cloud

* Compress all the used files into a zip: (example can be found from
[JavaIMGRecognitionParallelScripts.zip](https://www.dropbox.com/s/sqyg6u7a8eyo96x/JavaIMGRecognitionParallelScripts.zip?dl=0)) - **Make sure that at that *run-tests.sh* file is in the root of your zip! This script is the launch point of your testing process:**
  * akaze/ (Rename the akaze_mac or akaze_linux to akaze as needed)
  * pom.xml
  * queryimages/
  * *run-tests.sh* (Rename the run-tests_android.sh or run-tests_ios.sh to *run-tests.sh* as needed)
  * src/
  * testdroid.properties

On [Testdroid cloud](cloud.testdroid.com)

* Create an Appium server side project
* Create new testrun in your new server side project
* Upload tested application (apk/ipa) through the "Application" step
* Upload the zip with scripts through the "Upload test file" step
* Choose device group to use or create a new group for this run
* Start testrun

## Running locally

* Launch Appium server as you would normally do when running local Appium tests
* Make sure that the apk/ipa is named as *application.apk* or *application.ipa* at the root of your working directory. Alternatively edit *testdroid.properties* file to use another path
* run `mvn test` or `mvn clean test` from the project root folder
