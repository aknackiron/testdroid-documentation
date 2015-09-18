---
layout: default
title: Appium with Testdroid Cloud
---

Testdroid Cloud allows testers to use various testing frameworks to
run their automated tests on against real devices in the Testdroid
cloud. Appium is one of these frameworks.

You can run your tests either remotely from your localhost or in
Testdrdoid Cloud.

# Running Appium from Localhost

The first is to run your tests as Appium client from your locale
computer. This is the way that you typically run your tests when your
test device is connected to your computer.

The downsides with this approach is that you are running your tests
sequencially against various devices in the cloud. Any network error
can brake your test run.

## [Appium with Python](python/)

## [Appium with Java](java/)

# Running Appium in Testdroid Cloud

You also run your test in the cloud. You need to upload your app to
Testdroid Cloud and leave Testdroid execute your tests. Tests are run
in parallel against all the chosen devices. Once the test are executed
results are stored in lcoud and you are notified by email. 

## [Moving to cloud testing](moving-tests-to-cloud.html)

Typically one would start developing test on localhost and then move
these tests to the cloud.

[Update your tests for cloud execution.](moving-tests-to-cloud.html)

# [Frequently Asked Questions (FAQ)](faq.html)