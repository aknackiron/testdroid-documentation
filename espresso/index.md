---
layout: default
title: Espresso Testing
---


Testdroid Cloud has had Espresso support since it's first versions.


# Espresso and Testdroid

This guide shows how to setup Android Studio and Espresso v2.0. Same or similar setup should work also for Eclipse and Android SDk.

1) Open the SDK Manager (under Tools -> Android -> SDK Manager):

  ![]({{site.github.url}}/assets/espresso/1-sdk-manager.png)

2) Ensure you have the **Android Support Repository** installed. This can be found under **Extras**.

  ![]({{site.github.url}}/assets/espresso/2-android-support-repository.png)

3) Open `build.gradle` file (under file structure `app/build.gradle`) in text editor.

4) Add the following piece of code inside dependencies:
   

     androidTestCompile 'com.android.support.test.espresso:espresso-core:2.0'
     
     androidTestCompile 'com.android.support.test:testing-support-lib:0.1'


   In addition, if your application uses functionalities from `espresso-contrib`, add the following line inside dependencies:

     androidTestCompile 'com.android.support.test.espresso:espresso-contrib:2.0'

5) Configure the instrumentation runner with the `testInstrumentationRunner`. It should look like this:

     defaultConfig {
       applicationId "com.example.vvhelppi.myapplication"
       minSdkVersion 15
       targetSdkVersion 20
       versionCode 1
       versionName "1.0"
       testInstrumentationRunner "android.support.test.runner.AndroidJUnit.Runner"
     }

Set Instrumentationrunner properlyMore information about [Espresso Core Resource can be found in this Javadoc](https://android-test-kit.googlecode.com/git/docs/javadocs/espresso/espresso-core-2.0-javadoc/reference/packages.html).

# The New Test Runner - AndroidJUnitRunner

The **AndroidJUnitRunner** is a new unbundled test runner for Android, which is part of the Android Support Test Library and can be downloaded via the Android Support Repository. The new runner contains all improvements of GoogleInstrumentationTestRunner and adds more features, such as:

* *JUnit4* support
* Instrumentation Registry for accessing *Instrumentation*, *Context* and *Bundle Arguments*
* Test Filters *@SdkSupress* and *@RequiresDevice*
* Test timeouts
* Sharding of tests
* [RunListener](http://junit.sourceforge.net/javadoc/org/junit/runner/notification/RunListener.html) support to hook into the test run lifecycle
* Activity monitoring mechanism *ActivityLifecycleMonitorRegistry*

The User Guide for AndroidJUnitRunner can be found [here](https://developer.android.com/reference/android/support/test/runner/AndroidJUnitRunner.html).

# How to use Espresso v2.0 tests at Testdroid Cloud

Let's take a look how to run your Espresso scripts at Testdroid Cloud. Follow these few steps and you should get your app up and running

So, how you can run tests written with this cool new framework in Testdroid Cloud? Just few steps and you'll get your app tested with this framework on hundreds of real Android devices:

## Step #1:

First, you have to create a test configuration in Android Studio. Open **Run** -> **Edit Configurations**. Click '+' button on the left-top corner to add new configuration as **Android Tests**. Give a name to test configuration (here 'New Test Config'), select module (here 'app') and specify the instrumentation runner (here 'android.support.test.runner.AndroidJUnitRunner'). Your open Run/Debug Configuration dialog should look this this:

  ![]({{site.github.url}}/assets/espresso/3-run-debug-configuration.png)

Now, your environment should be properly configured to build instrumentation packages.

## Step #2:

Once you have configured the test project you can build it and upload into Testdroid Cloud. Under test run creation, create a standard "Android" project, upload your application APK, upload your test APK, select device group as you wish, and under Advanced configuration (step #4 in Testdroid Cloud) define the custom test runner in this view, as shown on screenshot below:

  ![]({{site.github.url}}/assets/espresso/4-configuring-test-runner.png)


NOTE! The above dialog doesn't show the whole string but it should be naturally - `android.support.test.runner.AndroidJUnitRunner`

## Step #3:

Start your test and the test results will be ready in few minutes!

