---
layout: default
title: Java Server Side With Image Recognition
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/examples/server-side-appium-java-imagerecognition/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/examples/server-side-appium-java-imagerecognition/"/>

The repository with a working sample for image recognition with Appium is available at [Bitbar Samples](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition). For more technical steps and guides, please refer to the repository's readme. Before continuing any further it makes sense to clone this repository locally. 

Dependencies for running locally:

* Sample app: .ipa or .apk file found at apps/builds-directory in cloned sample repository
* Sample project: [https://github.com/bitbar/testdroid-samples/tree/master/image-recognition](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition)
* Akaze: can be found and built from Bitbar's [Akaze project fork](https://github.com/bitbar/akaze)
* Appium server. 


## Running Tests Locally

This sample assumes that the app under test can be found locally in root directory and the app should be named as "application.ipa" or "application.apk". For iOS, the UDID of the device should be pre-set in the server settings.

Before running the test, Appium server needs to be started and running at default location `http://localhost:4723/wd/hub`.

To launch the tests run:


    mvn -Dtest=AndroidSample#mainPageTest clean test


## Running Tests On Cloud

The sample repository contains helper scripts to package everything necessary to be uploaded to Bitbar Testing. Again depending whether testing an Android or iOS app use

    ./createAndroidZip.sh

or

    ./createiOSZip.sh

These scripts create a new zip-file (android-test.zip or ios-test.zip respectively) in the current directory. This zip-file needs to be uploaded to Testing cloud with the app under test. At the root of this zip file needs to be `pom.xml` and `run-test.sh` files. Additionally the test files and needed libraries need to be packaged too. Here the directories `src/`, `lib/` and `queryImages/` are added to the zip.

To run the image recognition tests remotely as server side runs on [Bitbar Testing](http://bitbar.com/Testing) the first step is to create a new server side project. Depending whether testing iOS or Android select 'Appium iOS/Android server side' project type.

Once the test project is created, make a new test run, which includes the app under test (Bitbar sample app from apps/builds/) and the test zip (*-test.zip) created above. Test run can now be started.

![]({{site.github.url}}/assets/appium/examples/image-recognition-project.png)


### Example Zip Content

After running `./createiOSZip.sh` the generated `ios-test.zip` file should have the following structure.


    $ zipinfo -1 ios-test.zip 
      pom.xml
      run-tests.sh
      src/
      src/main/
      src/main/java/
      src/main/java/AbstractAppiumTest.java
      src/main/java/AkazeImageFinder.java
      src/main/java/TestdroidImageRecognition.java
      src/test/
      src/test/java/
      src/test/java/AndroidSample.java
      src/test/java/iOSSample.java
      lib/mac/
      lib/mac/akaze/
      lib/mac/akaze/akaze_compare
      lib/mac/akaze/akaze_features
      lib/mac/akaze/akaze_match
      lib/mac/akaze/LICENSE
      lib/mac/opencv/
      lib/mac/opencv/libopencv_java2413.dylib
      lib/mac/opencv/LICENSE
      lib/mac/opencv/opencv-2413.jar
      queryimages/
      queryimages/bitbar_logo.png
      queryimages/full_screen_1.png
      queryimages/full_screen_2.png
      queryimages/full_screen_3.png

## Using The Launcher Script

The `launch-tests.sh` script is to make it easier to package, upload files and start the test execution against some device group in cloud. It is simple and straight forward to use.

    $ ./launch-tests.sh
    Either -a or -i flag must be provided, but not both!
    
    ./launch-tests.sh - create and upload test project to Bitbar Testing and run it
    
    Usage: ./launch-tests.sh -a/i -g <DEVICE_GROUP_NAME> -k <API_KEY>
     -a for Android test
     -i for iOS test
    Optional: -p <PROJECT_NAME> to choose a specific profile. If not given, a new project will be created
    Optional: -t for creating and uploading a new test zip file
    Optional: -f <APP_FILE_PATH> for uploading a new app file
    Optional: -e <API_ENDPOINT> for private cloud instances

An example test launch could be such that:

    $ ./launch-tests.sh -a -p "My Android Server Side Appium" -k j9TQxBEFiFsdfoTrBekNqgunoXceW67 -g "HTC+Huawei" -f ../../../apps/builds/BitbarSampleApp.apk

