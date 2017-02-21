---
layout: default
title: Using Gradle With Bitbar Testing
---

Regardless if you are using Android Studio (where Gradle is the
default build system) you may use Gradle with other development
tools. Here are the basic steps and instructions of how to use
[Bitbar Testing Gragle
plugin](https://github.com/bitbar/testdroid-gradle-plugin) to build an
instant and seamless bridge between your development environment and
our devices at Bitbar Testing.

Bitbar Testing Gradle Plugin takes care of automatically uploading your
latest builds to Bitbar Testing.

![]({{site.github.url}}/assets/testdroid-cloud-integration/gradle/gradle_testdroid.jpg)


## Step #1 - Install and Configure Bitbar Testing Gradle Plugin

The installation of any Gradle compatible plugin is
straightforward. There are two different gradle.build files - one
specific for Project and one for Module. To make it easier to
adopt these configurations for variety of different projects, modify
the Module specific **gradle.build** file.

![]({{site.github.url}}/assets/testdroid-cloud-integration/gradle/gradle-step1.png)
 
This file can be further modified with different setups for
{{site.td_cloud}}, but the basic three required configurations are as
follows: 

    apply plugin: 'testdroid'

Applying a plugin to the project allows the plugin to extend the
project's capabilities. For example, this allows adding tasks to
projects (compile and upload the latest APK to Bitbar Testing).

Next one is to configure your Bitbar Testing credentials and Bitbar Testing
Cloud setups:

    testdroid {  
              username 'username@email.com'
              password 'password'  
              deviceGroup 'MyTestDevices'  
              mode "FULL_RUN"  
              }

Insert existing Bitbar Testing login credentials for `username` and
`password`. Also, set up the device group against which you want to
run your APK in Bitbar Testing. For example, `MyTestDevices` is a
demo user specific device group (not available as a default device
group) and includes 8 pre-selected devices.

Finally, set dependency for classpath and in this case it should be
`com.testdroid:gradle:1.3.0`. Our Gradle plugin naturally evolves and
develops over time, so please check the latest version from
[here](https://github.com/bitbar/testdroid-gradle-plugin). For
dependency configuration, please use the following line as part of the
buildscript -> dependencies:

    buildscript {
        repositories {
            ...
        }
        dependencies {
                     classpath 'com.testdroid:gradle:1.3.0'
                     }
        }

That's it! All Gradle build are now executable in Bitbar Testing
against the defined device group.

## Step #2 - Running Tests on Bitbar Testing Devices

The above configuration uploads specified application and possible
instrumentation package into Bitbar Testing and test run is launched
using device from group 'MyTestDevices'. There are additional options
to control test run creation and execution below.

There are basically two quick ways to set app (and instrumentation
app) up and running on Bitbar Testing. It can either be done from
command line by going to a project specific path
(e.g. `/Users/vvhelppi/AndroidStudioProjects/MyApplication2`) and
executing the following command:

    ./gradlew testdroidUpload

or using the Android Studio's Gradle Projects view and double-clicking
`testdroidUpload` under Tasks (`app -> verification`):

![]({{site.github.url}}/assets/testdroid-cloud-integration/gradle/gradle-step2.png)

Now, the project will be compiled, all dependencies will be fetched
(done only once on the first time) and app + possible instrumentation
package will be uploaded to Bitbar Testing. The Run log should look
something like this:

![]({{site.github.url}}/assets/testdroid-cloud-integration/gradle/gradle-step2-2.png)

## Step #3: All Done

Within Bitbar Testing, all details of a test run, such as logs,
screenshots, performance stats and much more - are conveniently shown
in an easy-to-use UI.

![]({{site.github.url}}/assets/testdroid-cloud-integration/gradle/gradle-step3.png)

The example above shows a test run from an empty Android Studio app
project on 8 devices. The Test Execution time is minuscule as there
isn't much logic in an empty app. Also, the App Crawler run targeted
for this sort of app basically checks whether app can be appropriately
launched and stopped - and use those as test cases.

## Advanced Configuration

Additional configurations are available to enhance the "development
tool - real device" test run configuration. The following additional
parameters are available for the `gradle.build` file.

    testdroid {
        username  "account@email.com"                       // Username
        password "password"                                 // Password
        deviceGroup "MyTestDevices"                         // Device group for execution
    
        cloudUrl = 'https://cloud.testdroid.com'            // Optional - Used for PrivateCloud configs
        projectName "Project 1"                             // Optional - Default: create a new project
        mode "FULL_RUN"                                     // FULL_RUN / APP_CRAWLER / UI_AUTOMATOR
        testRunName "Custom test run name"                  // Optional - default: build variant name
    
        deviceLanguageCode "en-US"                // Optional - locale <ISO 63>_<ISO 3166> default: en-US
    
        hookUrl "http://localhost:9080"           // Optional - call back URL after test run has finished
    
        scheduler "PARALLEL"                      // Optional - PARALLEL or SERIAL default: PARALLEL
    
        testScreenshotDir = "/sdcard/abc"         // Optional - custom screenshot folder 
    
        // AppCrawler configuration - set application credentials
        appCrawlerConfig{
            applicationPassword = "appPassword2"
            applicationUserName = "appUsername2"
        }
    
        // Optional - Custom settings for test execution
        fullRunConfig {
            instrumentationRunner =  "com.android.testRunner"
            withAnnotation = "com.my.annotation"
            withOutAnnotation = "com.my.not.annotation"
            limitationType = "CLASS"
            limitationValue = "foo.bar"
            instrumentationAPKPath = "/tmp/mytestapp.apk" // Optional - custom instrumentation apk path
        }
    
        // Optional
        uiAutomatorTestConfig {
            uiAutomatorTestClasses = "foo.class"
            uiAutomatorJarPath = "tmp/uitests.jar"
        }
    }
