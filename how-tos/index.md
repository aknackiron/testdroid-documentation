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

[Example Python Appium test script](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/python) that can be executed with minimal
editing.

## Appium with Java

[Example Appium project in Java](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java) that can be executed from your machine
against the cloud with minimal changes.

## Appium with Ruby

[Example Ruby Appium test script](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/ruby)

## Appium with C#

[Example C# Appium test script](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/csharp)

## Moving Your Tests To Cloud

Typically you would start mobile app testing by first developing tests
on your localhost against your device. Once you have tests you would
start executing these against multiple devices in the cloud.

[Moving your tests for testing against cloud devices.]({{site.github.url}}/appium/examples/moving-tests-to-cloud)

## Appium Desired Capabilities

A listing of necessary [Appium desired capabilities]({{site.github.url}}/appium/testdroid-desired-caps) used in {{site.td_cloud}}.

## Running Appium in Testdroid Cloud

You also run your test in the cloud. You need to upload your app to
Testdroid Cloud and leave Testdroid execute your tests. Tests are run
in parallel against all the chosen devices. Once the test are executed
results are stored in cloud and you are notified by email. 

### Python Server Side Appium Example

[Running tests in Testdroid Cloud (Python).]({{site.github.url}}/appium/examples/python/server-side-appium-in-tc)

### Java Server Side Appium Example

[Running tests in Testdroid Cloud (Java).]({{site.github.url}}/appium/examples/java/server-side-appium-in-tc)

### Requirements for .ipa

[Here is the procedure]({{site.github.url}}/how-tos/ipa-requirements) to create your iOS
mobile application (.ipa files) to run your app in Testdroid Cloud.
