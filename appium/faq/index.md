---
layout: default
title: Appium FAQ
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/faq/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/faq/"/>
# What is Appium?

Appium is a mobile UI testing framework supporting cross-platform
testing of native, hybrid and mobile-web apps for iOS and
Android. Appium enables you to execute your tests on mobile device
irrespective of the device OS. This is because the framework is
basically a wrapper that translates Selenium Webdriver commands into
UIAutomation (iOS) or UIAutomator (Android) commands depending on the
device type.

# What languages can I use to write the TestScripts?

You can write TestScripts in any language that Selenium WebDriver
dependency is available for. This includes C#, Closure, Java,
JavaScript with Node.js, Obj-C, Perl, Python, Ruby.

# Do I need to care about the Appium Server depending on the language I wrote my tests with?

No, the server is exactly the same irrespective of the scripting
language. This is because the TestScript implements the Selenium
WebDriver and communicates with Appium Server via JSON Wire Protocol
(a standardised JSON over HTTP protocol).

# Where would the Appium server be running?

A great advantage of using Appium is the HTTP communication (see the
question above) between TestScript and Appium Server, allowing the
server to run on a separate machine than the TestScript. This allows
us to take care of the Appium server side and maintain the devices in
the cloud, while you can run your TestScripts locally from your
machine.

# How is running Appium different than other frameworks available at Bitbar Testing?

Appium TestScripts can either be run as "Live" or uploaded for the
cloud to run. This means that you do not need to upload the TestScript
along with your app to the Cloud. Instead, you can instigate the
script locally from your own machine, and on receiving a request, the
Cloud reserves the requested device and creates an Appium session for
it.

# Why are most of my Test Cases excluded when executing a Suite of tests?
<!-- tags: appium, best practice, faq -->

There are some best practices to know when writing Appium tests. The test cases of a test suite should re-use the same webdriver between the tests and not recreate a new session every time. 

In Bitbar Testing after each test case, a closed Appium session, the device under test is put offline for automatic cleanup. This will cause the following tests of the test suite to fail. 

Instead, a test suite should re-use the first webdriver session from first test case in all the test cases or add a proper wait between each test case, poll our API and wait when the device become available again. 
The app can be closed and restarted without having to close the Appium webdriver session:

    # close current app
    driver.closeApp() 
    # re-lauch the app 
    driver.launchApp()
    # resets the app ~ re-install
    driver.resetApp()


# Can I use the same TestScript for both my iOS and Android apps?

Although the TestScripts will be written in the same language, and will be almost similar, you would still need to prepare separate TestScripts for iOS and Android, or at least two flavours of the TestScript. This is because of the differences in UI elements on the two platforms. Sometimes the difference is as subtle as having to use different array indices. 

iOS:

    buttons = driver.find_elements_by_tag_name('button')
    buttons[0].click()

Android:

    buttons = driver.find_elements_by_tag_name('button')
    buttons[1].click()

# Can I use a script to test my app on multiple devices simultaneously?

Yes, this is practically possible. Since the TestScript communicates
live with the Appium server (which is instantiated for a particular
device), it cannot communicate with multiple servers simultaneously,
or control multiple devices at the same time. You can however fire
multiple instances of the TestScript, each targeting a separate
device. More information on this at running parallel Appium tests in
Bitbar Testing.

# Can I also use the same method to test my app on multiple iOS devices?

Yes. On your localhost this is not possible because Appium uses native
Instruments, which is allowed for only one of the device connected to
a Mac at a given time. At Bitbar Testing however, you can run your
tests on multiple iOS devices at the same time.

# Where do I get configuration info about Appium servers running at Bitbar Testing?

You can check basic configurations at
[http://appium.testdroid.com/info](http://appium.testdroid.com/info).

# How can I get screenshots to my cloud project?

Appium test runs' screenshots are stored under your device run in
cloud. If running a client side test run, screenshots are stored on your local machine where you are executing the Appium test scripts from.

For a working Chrome up to date examples (in Python) on our Github repository: [testdroid_chrome.py](https://github.com/bitbar/testdroid-samples/blob/master/appium/sample-scripts/python/testdroid_chrome.py). This repository also has examples for native or hybrid mobile app testing using Appium.

# What version of Appium Server is running at Bitbar Testing?

There should always be the latest 'tested' Appium version running in
the cloud. This means that although there may be a newer release
available, it might not yet be available in Cloud. Current default version is Appium 1.6.3. for Android and iOS runs.

# What is the difference between testdroid_project and testdroid_testrun?

Your test runs are categorised into 'Project' and 'Test-Run' at the
Cloud. A Project typically has multiple Test-Runs in it. The Project
name is unique. Running multiple TestScripts using same Project name
puts the Test-Runs under same Project.

# Can I upload a new .ipa/.apk before each test run?

You can upload a new .ipa/.apk before each Test-Run, but using the
same Project for both iOS and Android Test-Runs is not allowed (also
see the question above) nor recommended.

# What is the maximum app size I can upload?
500 MB

# Why is the Appium test waiting for device and finally timeouts?

Bitbar Testing Appium has maximum waiting time for device set to 10
minutes. If there is an ongoing test from another Cloud user timeout
is very likely to happen. Try again later, or with another
device. NOTE! Bitbar Testing Free devices are very busy and it might be
hard to find run time for Appium tests on those devices.

# Why is the Appium test failing with timeout?

Bitbar Testing has a test run time limit set to 10 minutes. This
limit is applicable for Free Plan users. If you need to run longer
tests, please upgrade your subscription.

# Why I'm getting 403 error when trying to upload an application (apk, ipa)?

Check your proxy settings. You should be able to reach
http://appium.testdroid.com/info.

# Why I'm getting an error "Project <...> cannot be used for type APPIUM_ANDROID"?

Appium projects must be either "Appium Android" or "Appium iOS" by
project type in Bitbar Testing. Simpliest way is to let Bitbar Testing to create
the project for you. This can be done easily by using a new project
name in your Appium script.

# Where I can find an example to how to test my "native application" or "hybrid application" or "a mobile website on Android Chrome browses"?

Examples written in java, python and ruby are available on Bitbar's
repo (https://github.com/bitbar/testdroid-samples).

# Bitbar Testing Desired Capabilities

Bitbar Testing specific Appium desired capabilities are [described here]({{ site.github.url }}/appium/testdroid-desired-caps).

# Do you support Appium with TestNG, Ruby or C#?

Yes. For C# server side support through Mono is coming soon.

# What versions of Appium does Bitbar Testing support?

Default Appium version is 1.6.3 for server and client side runs. With Android server side runs, it is possible to use an older version (1.4 or 1.5).
