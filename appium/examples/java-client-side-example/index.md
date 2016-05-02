---
layout: default
title: Java Client Side Example
---

Appium testing supports writing tests in multiple programming
languages, including Java. Testing can be done against native or
hybrid apps or responsive web pages on both iOS and Android
devices. Only the test setups differ.

For a guide on how to get started with remote Appium testing using
Java, check out [our
sample](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java)
on Github.

Clone the [Testdroid Appium
Sample](https://github.com/bitbar/testdroid-samples) scripts from
Github. It contains sample apps for iOS and Android and sample iOS and
Android app tests too. The samples directory contains more detailed
steps on how to use the sample scripts.

# Step 0: Upload your app to cloud

To upload your app to Testdroid Cloud use the following curl-script:

    $ curl -s --user 'user.name@cloudaccount.com:password' -F myAppFile=@"/path/to/app/file.apk" http://appium.testdroid.com/upload

# Step 1: Set credentials and other parameters

Open the TestScript SampleAppiumTest.java in any text editor.  Set the
screenshotDir path to where you want the screenshots to be saved on
your machine.  Set your credentials to /testdroid_username/ and
/testdroid_password/ in the desired capabilities.  Set the myAppFile
identifier from [Step 0](#step-0-upload-your-app-to-cloud) against testdroid_app desired capability.

Check the explanation of all [testdroid_ Desired Capabilities]({{ site.github.url }}/appium/testdroid-desired-caps), but
for now you can use the default values.

# Step 2: Run the TestScript

    $ mvn -Dtest=android.sample.SampleAppiumTest test
    or
    $ mvn -Dtest=ios.sample.SampleAppiumTest test


The output should look something like this:

![ios test output]({{ site.github.url }}/assets/appium/test-script-output.png "Testdroid iOS output")

# Step 3 (optional): Upload your Test Suite output to Cloud

If your test suite generates a JUnit XML results file, you can upload
the XML to Testdroid Cloud. Doing this will allow you to check your
test cases and their run statuses on the Testdroid web UI, and let you
download test reports in various formats.

1. Add the
[testdroid_junitWaitTime]({{site.github.url}}/appium/testdroid-desired-caps)
Desired Capability in your TestScript.

1. Get Appium sessionId from your script (after the WebDriver connection
has been established) using: driver.getSessionId();

1. After your test run has finished, and JUnit XML has been generated,
use Curl to upload the XML to Cloud:

        curl -s -F result=@"/absolute/file/path/TestOutput.xml" "http://appium.testdroid.com/upload/result?sessionId=<sessionId>"


# Step 4: Get results from Testdroid Cloud

The screenshots are available locally on your machine inside the
directory you specified in [Step
1](#step-1-set-credentials-and-other-parameters). Log into [Testdroid
Cloud](https://cloud.testdroid.com) and navigate to project name as
defined in testdroid_project Desired Capability to get the following
log files.

1. Appium server log
1. Logcat / Instruments log
