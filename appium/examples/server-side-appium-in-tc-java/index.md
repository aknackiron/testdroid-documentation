---
layout: default
title: Java Server Side Example
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/examples/server-side-appium-in-tc-java/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/examples/server-side-appium-in-tc-java/"/>
When using server-side Appium execution, standard Appium tests can be run on hundreds of devices in parallel without any need for complex set-ups at the client side.

The examples presented here below are valid for both Android and iOS devices. Server side Appium test runs are available for all plans on Bitbar Testing cloud.

# How Server Side Appium Works

  Bitbar Testing supports running Appium as either client side or server side. In a client side execution the Appium tests are executed on localhost against one device in Bitbar cloud. On a server side approach the tests and the app are uploaded to Bitbar cloud where they are used to run tests against multiple devices at a time.

# Sample Test

  A sample for server side Java tests can be found from Bitbar's public Github repository at [https://github.com/bitbar/testdroid-samples](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java).


   To start, make a clone of the above mentioned [Bitbar samples repository](https://github.com/bitbar/testdroid-samples). The readme file is a good starting point.

   The repository contains all necessary scripts for server side execution.

   * `zip_projects.sh` - Script to package tests into a zip file that is uploaded to Bitbar for server side testing
   * `run-tests.sh` - This script unzips the above created zip-file and starts test execution.

   Let's start by creating the server side test zip-file that is next uploaded to Bitbar Testing cloud service. This zip-file needs to have the `run-tests.sh`, `pom.xml` and the test directory `src` in its root. Using the `zip_projects.sh` let's create the zip package.

     $ ./zip_project.sh
     updating: pom.xml (deflated 74%)
     updating: run-tests.sh (deflated 60%)
     updating: src/ (stored 0%)
     updating: src/test/ (stored 0%)
     updating: src/test/java/ (stored 0%)
     updating: src/test/java/com/ (stored 0%)
     updating: src/test/java/com/testdroid/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/android/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/android/sample/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/android/sample/AndroidAppiumExampleTest.java (deflated 58%)
     updating: src/test/java/com/testdroid/appium/BaseAndroidTest.java (deflated 54%)
     updating: src/test/java/com/testdroid/appium/BaseIOSTest.java (deflated 52%)
     updating: src/test/java/com/testdroid/appium/BaseTest.java (deflated 75%)
     updating: src/test/java/com/testdroid/appium/FileUploader.java (deflated 71%)
     updating: src/test/java/com/testdroid/appium/ios/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/ios/sample/ (stored 0%)
     updating: src/test/java/com/testdroid/appium/ios/sample/IosAppiumExampleTest.java (deflated 58%)
     updating: src/test/resources/ (stored 0%)
     updating: src/test/resources/desiredCapabilities.android.clientside.properties (deflated 36%)
     updating: src/test/resources/desiredCapabilities.android.serverside.properties (deflated 19%)
     updating: src/test/resources/desiredCapabilities.ios.clientside.properties (deflated 42%)
     updating: src/test/resources/desiredCapabilities.ios.serverside.properties (deflated 13%)


   The above creates a `server_side_test_package.zip` file to current directory. This is uploaded to public cloud in the next steps.

   The required sample app is located at `testdroid-samples/apps/builds/`. Both Android apk and iOS ipa samples are available.

   Next on Bitbar Testing the environment needs to be created to start the test run. 

   * Create an Appium Server side project (either iOS or Android) if one does not already exist

     ![]({{site.github.url}}/assets/appium/examples/project-dropdown.png)

   * Create new testrun for this project
   * Upload application to test (BitbarSampleApp.apk/BitbarIOSSample.ipa) in the "Application" step
   * Upload the test zip on the "Upload test file" step
   * Choose the device group to use or create a new group for this test run
   * Start testrun


