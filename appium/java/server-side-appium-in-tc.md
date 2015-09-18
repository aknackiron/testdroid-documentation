---
layout: default
title: Move Your Java Tests to Cloud
---

When using server-side Appium execution, you can run standard Appium
tests on hundreds of devices in parallel without any need for complex
set-ups at the client side.

The examples presented here below are valid for both Android and iOS
devices.

# Example **without** Image Recognition

Dependencies for running locally:

    Appium server: https://github.com/bitbar/appium
    Appium driver fork: https://github.com/bitbar/testdroid-appium-driver
    Example project folder: JavaParallelScripts.zip
    BitbarSampleApp: BitbarSampleApp.apk
 
## Running the scripts

In run-tests.sh you will need to make sure that the ${TEST} variable
has correct name in it. This is the name of the java script file of
your actual tests.

Modify testdroid.properties file to include:
appium.appFile=/location/app.apk or /location/app.ipa
default value for android devices in cloud: application.apk
default value for ios devices in cloud: application.ipa
testdroid.appiumUrl=http://localhost:4723/wd/hub
appium.automationName=android or iOS

## Running on cloud

Compress all the used files into a zip: (these can be found from
JavaParallelScripts.zip) - Make sure that at least the run-tests.sh
file is in the root of your zip! This script is the launch point of
your testing process:

pom.xml
run-tests.sh (Rename the run-tests_android.sh or run-tests_ios.sh to run-tests.sh as needed)
src
testdroid.properties
Create a calabash project at cloud UI (cloud.testdroid.com)
Don't forget to let us know about your newly made project so that we can configure it for you!
Start creating a new testrun in your project at cloud UI
Upload your application (apk/ipa) through the "Application" tab
Upload the zip with scripts through the "Upload test file" tab
Choose the devices you wish to use
Start testrun.

## Running locally

Launch appium server as you would normally do when running local
appium tests.  Make sure that the apk/ipa is named as
application.apk/application.ipa at the root of your working
directory. Alternatively edit the testdroid.properties file to use
another path.  run 'mvn test' or 'mvn clean test' from the project
root folder
 
# Example **with** Image Recognition

Dependencies for running locally:

Appium server: https://github.com/bitbar/appium
Appium driver fork: https://github.com/bitbar/testdroid-appium-driver
Example project folder: JavaIMGRecognitionParallelScripts.zip
BitbarSampleApp: BitbarSampleApp.apk
OpenCV: https://github.com/bitbar/testdroid-image-recognition/tree/master/samples/java#installing-dependencies (Akaze and OpenCV builds are included in zip)
 
## Running the scripts

In run-tests.sh you will need to make sure that the ${TEST} variable
has correct name in it. This is the name of the java script file of
your actual tests.
 
Modify testdroid.properties file to include:

appium.appFile=/location/app.apk or /location/app.ipa
default value for android devices in cloud: application.apk
default value for ios devices in cloud: application.ipa
testdroid.appiumUrl=http://localhost:4723/wd/hub
appium.automationName=android or iOS

Akaze has different build for mac and linux, so make sure to use the
mac build when running on mac and linux build on linux. In cloud,
android devices use linux environment and iOS devices use mac
environment. The desired akaze folder needs to be named as "akaze" in
your project folder.
 
## Running on cloud

Compress all the used files into a zip: (these can be found from
JavaIMGRecognitionParallelScripts.zip) - Make sure that at least the
run-tests.sh file is in the root of your zip! This script is the
launch point of your testing process:

akaze (Rename the akaze_mac or akaze_linux to akaze as needed)
pom.xml
queryimages
run-tests.sh (Rename the run-tests_android.sh or run-tests_ios.sh to run-tests.sh as needed)
src
testdroid.properties
Create a calabash project at cloud UI (cloud.testdroid.com)
Don't forget to let us know about your newly made project so that we can configure it for you!
Start creating a new testrun in your project at cloud UI
Upload your application (apk/ipa) through the "Application" tab
Upload the zip with scripts through the "Upload test file" tab
Choose the devices you wish to use
Start testrun.
 
## Running locally

Launch appium server as you would normally do when running local
appium tests.  Make sure that the apk/ipa is named as
application.apk/application.ipa at the root of your working
directory. Alternatively edit the testdroid.properties file to use
another path.  run 'mvn test' or 'mvn clean test' from the project
root folder
