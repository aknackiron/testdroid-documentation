---
layout: default
title: How-To Articles
---

Testdroid Cloud allows testers to use various testing frameworks to
run their automated tests on against real devices in the Testdroid
cloud. Appium is one of these frameworks.

You can run your tests either remotely from your localhost or in
Testdroid Cloud.

# Appium How-To Articles

This section includes links to variety of different useful Appium tips and tricks.

## Appium with Python

[Example Python Appium test script](python/) that can be executed with minimal
editing.

## Appium with Java

[Example Appium project in Java](java/) that can be executed from your machine
against the cloud with minimal changes.

## Appium with Ruby

## Appium with C#

## Moving Your Tests To Cloud

Typically you would start mobile app testing by first developing tests
on your localhost against your device. Once you have tests you would
start executing these against multiple devices in the cloud.

[Moving your tests for testing against cloud devices.](moving-tests-to-cloud.html)

## [Appium Desired Capabilities](testdroid-desired-caps.html)

## Running Appium in Testdroid Cloud

You also run your test in the cloud. You need to upload your app to
Testdroid Cloud and leave Testdroid execute your tests. Tests are run
in parallel against all the chosen devices. Once the test are executed
results are stored in cloud and you are notified by email. 

### [Running tests in Testdroid Cloud (Python).]({{site.github.url}}/appium/python/server-side-appium-in-tc.html)

### [Running tests in Testdroid Cloud (Java).]({{site.github.url}}/appium/java/server-side-appium-in-tc.html)

### Requirements for .ipa

[Here is the procedure](requirements-for-ipa.html) to create your iOS
mobile application (.ipa files) to run your app in Testdroid Cloud.
