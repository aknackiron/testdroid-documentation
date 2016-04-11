---
layout: default
title: Appium FAQ
---

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

# How is running Appium different than other frameworks available at Testdroid Cloud?

Appium TestScripts can either be run as "Live" or uploaded for the
cloud to run. This means that you do not need to upload the TestScript
along with your app to the Cloud. Instead, you can instigate the
script locally from your own machine, and on receiving a request, the
Cloud reserves the requested device and creates an Appium session for
it.

# Can I use the same TestScript for both my iOS and Android apps?
Although the TestScripts will be written in the same language, and will be almost similar, you would still need to prepare separate TestScripts for iOS and Android, or at least two flavours of the TestScript. This is because of the differences in UI elements on the two platforms. Sometimes the difference is as subtle as having to use different array indices. 

iOS
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
Testdroid Cloud.

# Can I also use the same method to test my app on multiple iOS devices?

Yes. On your localhost this is not possible because Appium uses native
Instruments, which is allowed for only one of the device connected to
a Mac at a given time. At Testdroid Cloud however, you can run your
tests on multiple iOS devices at the same time.

# Where do I get configuration info about Appium servers running at Testdroid Cloud?

You can check basic configurations at
[http://appium.testdroid.com/info](http://appium.testdroid.com/info).

# How can I get screenshots to my cloud project?

Appium test runs' screenshots are stored under your device run in
cloud.

If you are web testing using Chromedriver then you need to switch your test context to NATIVE_APP before taking the screenshot to have the screenshots visible in your Tesdroid cloud device run view. 
We suggest you create your own screenshot method that makes the switch between NATIVE_APP and WEBVIEW when taking a screenshot.

       driver.switch_to.context("NATIVE_APP")
       driver.save_screenshot(screenshot_name)
       driver.switch_to.context("WEBVIEW") # only needed if continuing web testing

To check a full example have a look at the example (in Python) on our Github repo: [testdroid_chrome.py](https://github.com/bitbar/testdroid-samples/blob/master/appium/sample-scripts/python/testdroid_chrome.py).

# What version of Appium Server is running at Testdroid Cloud?

There should always be the latest 'tested' Appium version running in
the cloud. This means that although there may be a newer release
available, it might not yet be available in Cloud. Currently available
version is returned by the above web address ('appiumBroker.version').

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

Testdroid Appium has maximum waiting time for device set to 10
minutes. If there is an ongoing test from another Cloud user timeout
is very likely to happen. Try again later, or with another
device. NOTE! Testdroid Free devices are very busy and it might be
hard to find run time for Appium tests on those devices.

# Why is the Appium test failing with timeout?

Testdroid Cloud has a test run time limit set to 10 minutes. This
limit is applicable for Free Plan users. If you need to run longer
tests, please upgrade your subscription.

# Why I'm getting 403 error when trying to upload an application (apk, ipa)?

Check your proxy settings. You should be able to reach
http://appium.testdroid.com/info.

# Why I'm getting an error "Project <...> cannot be used for type APPIUM_ANDROID"?

Appium projects must be either "Appium Android" or "Appium iOS" by
project type in Testdroid. Simpliest way is to let Testdroid to create
the project for you. This can be done easily by using a new project
name in your Appium script.

# Where I can find an example to how to test my "native application" or "hybrid application" or "a mobile website on Android Chrome browses"?

Examples written in java, python and ruby are available on Bitbar's
repo (https://github.com/bitbar/testdroid-samples).

# Testdroid Desired Capabilities

Testdroid specific Appium desired capabilities are [described here]({{ site.github.url }}/appium/testdroid-desired-caps).
