---
layout: default
title: Python Client Side Example
---

Testdroid can be used to run Appium tests against real devices to test
native Android or iOS applications, hybrid (Android & iOS) or for web
testing (Safari on iOS and Chrome on Android).

You'll find here all steps you need to start running your mobile tests
against real devices in Testdroid Cloud. Before continuing with running with
these scripts you should register with [Testdroid service](https://cloud.testdroid.com/).

For more detailed guides on Appium please refer to their excellent
[documentation
online](http://appium.io/slate/en/master/?python#about-appium).

# Upload Your App To Cloud

Before starting testing, the app under test needs to be uploaded to Testdroid Cloud. This can be done either using curl from the command line as below or using a script to automate the process as shown next.

### Using Curl

The prefered way to identify yourself to Testdroid Cloud is using the apiKey, a user unique token that can be changed at any time from user's settings in Testdroid Cloud. This token is found from under "My Account" in
Testdroid Cloud. 

```bash
    $ curl -H "Accept: application/json" -u xYY5...PeOA6: -F myAppFile=@"/absolute/file/path/example.apk" http://appium.testdroid.com/upload
    {"status":0,"sessionId":"bb8d4336-e6ea-4ba7-9b4c-a6824f1c60aa","value":{"message":"uploads successful","uploadCount":1,"rejectCount":0,"expiresIn":1800,"uploads":{"myAppFile":"bb8e4336-e6ea-4ba7-9b4c-a6824f1c60aa/Testdroid.apk"},"rejects":{}}}
```

Above response is a JSON message where the name of the uploaded app in cloud is the value of `"myAppFile":"bb8e4336-e6ea-4ba7-9b4c-a6824f1c60aa/Testdroid.apk"`. The value "bb8e4336-..." is needed later when defining Appium capabilities.

### Using Python Scripts

Following examples and scripts are located on [Testdroid Github samples](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/python). They contain example scripts for running tests against Testdroid Cloud but also to upload files.

Using the `upload.py` script from the samples can be used to upload your app to cloud and get the file handle to it. The uploaded app can be an Android or iOS application.

The default settings uploads Testdroid example Android app.

```bash
$ python upload.py -h
usage: upload.py [-h] [-k APIKEY] [-a APP_PATH] [-u URL]

Upload a mobile app to Testdroid Cloud and get a handle to it

optional arguments:
  -h, --help            show this help message and exit
  -k APIKEY, --apikey APIKEY
                        User's apiKey to identify to cloud, or set environment
                        variable TESTDROID_APIKEY
  -a APP_PATH, --app_path APP_PATH
                        Path to app to upload or set environment variable
                        TESTDROID_APP_PATH. Current value is:
                        '../../../apps/builds/Testdroid.apk'
  -u URL, --url URL     Testdroid Cloud url to upload app or set environment
                        variable TESTDROID_UPLOAD_URL. Current value is:
                        'http://appium.testdroid.com/upload'


$ python upload.py -k xg8x...YXto -a ../../../apps/builds/Testdroid.apk
Filename to use in testdroid capabilities in your test: 719f52c4-43c2-4c25-b90b-08884f049d3a/Testdroid.apk
```

From the response message you need to store the application's cloud file
name. In the above example upload it is
'719f52c4-43c2-4c25-b90b-08884f049d3a/Testdroid.apk'.


# Set Credentials and Other Parameters

The sample scripts show how to start testing Android or iOS native,
hybrid or web applications. Regardless of which kind of app is tested
some common settings need to be set. Each `testdroid_*.py` file needs
to have the following values set. Values can also be given as command line parameters to `run-test.py` script.

Common values used in tests:

* *screenshot_dir* - where should screenshots be stored on your local drive

* *testdroid_apiKey* - a personal unique key allowing you to connect
   to Testdroid Cloud without using username and passwords in
   tests. Api key is found under "My account" in [Testdroid
   Cloud](https://cloud.testdroid.com/) UI.

* *testdroid_username* - your email that you registered with to
   Testdroid Cloud.  **Rather use testdroid_apiKey.**

* *testdroid_password* - your Testdroid Cloud password. **Rather use
   testdroid_apiKey.**

* *testdroid_project* - the project name in Testdroid Cloud. Each
  project must have a unique name, which can be modified (in Cloud)

* *testdroid_testrun* - name of this test run inside of
  `testdroid_project`. Each test run can have it's own name (eg. date + time)

* *testdroid_app* - name of the app uploaded using `upload.py`
  script. Example filename could be
  'f4660af0-10f4-46e9-932b-0622f497b0d2/Testdroid.apk' To rerun using
  last uploaded app, `testdroid_app` can be set to *latest*

In addition to the above capabilities, most Appium capabilities are supported. Here is a list of supported [Desired Capabilities]({{ site.github.url }}/appium/testdroid-desired-caps).

# Run the Test Script

```bash
$ python run-test.py -k xYY5...PeOA6 -s /tmp/screens/ -p "iOS" -t testdroid_ios -a "latest"
testSample (testdroid_ios.TestdroidIOS) ... Searching Available Free iOS Device...
Found device 'Apple iPad Mini A1432 9.2.1'

Starting Appium test using device 'Apple iPad Mini A1432 9.2.1'
15:59:00: WebDriver request initiated. Waiting for response, this typically takes 2-3 mins
15:59:58: WebDriver response received
15:59:58: view1: Finding buttons
15:59:59: view1: Clicking button [0] - RadioButton 1
16:00:00: view1: Typing in textfield[0]: Testdroid user
16:00:08: view1: Tapping at position (384, 0.95) - Estimated position of SpaceBar
16:00:10: view1: Taking screenshot screenshot1.png
16:00:14: view1: Hiding Keyboard
16:00:17: view1: Taking screenshot screenshot2.png
16:00:21: view1: Clicking button[6] - OK  Button
16:00:22: view2: Taking screenshot screenshot3.png
16:00:26: view2: Finding buttons
16:00:28: view2: Clicking button[0] - Back/OK button
16:00:29: view1: Finding buttons
16:00:30: view1: Clicking button[2] - RadioButton 2
16:00:31: view1: Clicking button[6] - OK Button
16:00:32: view1: Taking screenshot screenshot4.png
16:00:36: view1: Sleeping 3 before quitting webdriver.
16:00:39: Quitting
ok

```

# Upload Test Suite Output to Cloud 

If your test suite generates a JUnit XML results file, you can upload the XML to Testdroid Cloud. Doing this will allow you to check your test cases and their run statuses on the Testdroid web UI, and let you download test reports in various formats.

Add the `testdroid_junitWaitTime` desired capability in your test script.

Get Appium sessionId from your script (after the WebDriver connection has been established) using: `driver.session_id()`.

After your test run has finished, and JUnit XML has been generated, use Curl to upload the XML to Cloud:

```bash
$ curl -s -F result=@"/absolute/file/path/TestOutput.xml" "http://appium.testdroid.com/upload/result?sessionId=<sessionId>"
```

# Example Scripts

## Native iOS Example

Example script: `testdroid_ios.py`

Running an iOS native app test, an additional parameter needs to be provided:

* **bundleId** - this is your application's unique name

```bash
$ python run-test.py -k xYY5...PeOA6 -s /tmp/screens/ -p "iOS" -r `date +%R` -a "latest" --bundle_id "com.bitbar.testdroid.BitbarIOSSample" -t testdroid_ios
```

This parameter is not needed if running against the sample BitbarIOSSample.ipa application, as it's set inside of the sample script.


## Native Android Example

Example script: `testdroid_android.py`

To run an Appium test against a native Android application Appium needs to the following additional information:

* **app_package** - Java package of the Android app you want to run

* **app_activity** - activity name for the Android activity you want to
  launch from your package. Typically this is the main activity.

For running the sample applications and tests these do not need to be set as they are set inside of the sample scripts if no parameter is given.

```bash
python run-test.py -k xYY5...PeOA6 -s /tmp/screens -a 830571c8-51f1-4cd1-ad91-82e76c00a1b0/BitbarSampleApp.apk -p "Android Native" -r  `date +%R` -t testdroid_android
```

## Hybrid Android Specific Settings

Example: `testdroid_android_hybrid.py`

Additional parameters needed to run a hybrid app:

* **app_package** - Java package of the Android app you want to run

* **app_activity** - activity name for the Android activity you want to
  launch from your package. Typically this is the main activity.

The above parameters are already set into the test scripts, so they are not mandatory for the sample tests. For other apps they are.

```bash
python run-test.py -k xYY5...PeOA6 -s /tmp/screens/ -t testdroid_android_hybrid -p "Android Hybrid"  -r `date +%R` --app b9608704-b55d-4b71-83d4-d8027c67b49a/Testdroid.apk 
```

## Safari Browser Testing

Does not need any specific settings.

Example: `testdroid_safari.py`

```bash
python run-test.py -k xYY5...PeOA6 -s /tmp/screens/ -t testdroid_safari -p "Safari browser"  -r `date +%R`
```

##  Chrome Browser Testing

Does not need any special settings.

Example: `testdroid_chrome.py`

```bash
python run-test.py -k xYY5...PeOA6 -s /tmp/screens/ -t testdroid_chrome -p "Chrome browser"  -r `date +%R`
```

