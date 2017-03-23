---
layout: default
title: Espresso Testing
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/espresso/">
<link rel="canonical" href="http://docs.bitbar.com/testing/espresso/"/>

Bitbar Testing has had Espresso support since its first versions.


# Espresso and Bitbar Testing

This guide shows how to setup Android Studio and Espresso v2.0. Same or similar setup should work also for Eclipse and Android SDk.

1) Open the SDK Manager (under Tools -> Android -> SDK Manager):

  ![]({{site.github.url}}/assets/espresso/1-sdk-manager.png)

2) Ensure the **Android Support Repository** is installed. This can be found under **Extras**.

  ![]({{site.github.url}}/assets/espresso/2-android-support-repository.png)

3) Open `build.gradle` file (under file structure `app/build.gradle`) in text editor.

4) Add the following piece of code inside dependencies:
   

     androidTestCompile 'com.android.support.test.espresso:espresso-core:2.0'
     
     androidTestCompile 'com.android.support.test:testing-support-lib:0.1'


   In addition, if the application under test uses functionalities from `espresso-contrib`, the following line inside needs to be added to dependencies:

     androidTestCompile 'com.android.support.test.espresso:espresso-contrib:2.0'

5) Configure the instrumentation runner with the `testInstrumentationRunner`. It should look like this:

     defaultConfig {
       applicationId "com.example.tdexample.myapplication"
       minSdkVersion 15
       targetSdkVersion 20
       versionCode 1
       versionName "1.0"
       testInstrumentationRunner "android.support.test.runner.AndroidJUnit.Runner"
     }

More information about [Espresso Core Resource can be found in this Javadoc](https://android-test-kit.googlecode.com/git/docs/javadocs/espresso/espresso-core-2.0-javadoc/reference/packages.html).

# The New Test Runner - AndroidJUnitRunner

The **AndroidJUnitRunner** is a new unbundled test runner for Android, which is part of the Android Support Test Library and can be downloaded via the Android Support Repository. The new runner contains all improvements of GoogleInstrumentationTestRunner and adds more features, such as:

* *JUnit4* support
* Instrumentation Registry for accessing *Instrumentation*, *Context* and *Bundle Arguments*
* Test Filters [@SdkSuppress](https://developer.android.com/reference/android/support/test/filters/SdkSuppress.html) and [@RequiresDevice](https://developer.android.com/reference/android/support/test/filters/RequiresDevice.html)
* Test timeouts
* Sharding of tests
* [RunListener](http://junit.sourceforge.net/javadoc/org/junit/runner/notification/RunListener.html) support to hook into the test run lifecycle
* Activity monitoring mechanism *ActivityLifecycleMonitorRegistry*

The User Guide for AndroidJUnitRunner can be found [here](https://developer.android.com/reference/android/support/test/runner/AndroidJUnitRunner.html).

# How to use Espresso v2.0 tests at Bitbar Testing

To get the tested app running on Bitbar Testing using Espresso scripts some steps are needed. 

## Step #1:

First, a test configuration in Android Studio needs to be created. Open **Run** -> **Edit Configurations**. Click '+' button on the left-top corner to add new configuration as **Android Tests**. Give a name to test configuration (here 'New Test Config'), select module (here 'app') and specify the instrumentation runner (here 'android.support.test.runner.AndroidJUnitRunner'). The open 'Run/Debug Configuration' dialog should look this this:

  ![]({{site.github.url}}/assets/espresso/3-run-debug-configuration.png)

Now, the environment should be properly configured to build instrumentation packages.

## Step #2:

Once the test project is configured, build it and upload into Bitbar Testing. Under test run creation, create a standard "Android" type project, upload the application and test APKs and select wanted device group.

## Step #3:

Start test and test results will be ready in few minutes!
