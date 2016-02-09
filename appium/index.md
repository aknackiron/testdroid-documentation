---
layout: default
title: Appium Test Framework
---

Testdroid Cloud allows testers to use various testing frameworks to
run their automated tests on against real devices in the Testdroid
cloud. Appium is one of these frameworks.

You can run your tests either remotely from your localhost or in
Testdrdoid Cloud.

Typically testing is started with developing tests on localhost and
running them using the Appium client against a device in Testdroid
Cloud. Once the tests work on one device it's time to move testing
against multiple devices in the cloud. Here tests are executed in
parallel against all chosen devices.

# Running Appium Locally

The first thing is to run your tests as Appium client on your local
computer. This is the way you typically would run your tests when your
test device is connected to your computer.

The downsides with this approach is that you are running your tests
sequencially against single devices in the cloud. This approach is
slow and fragile to any network error.

There are plenty of [examples on
Github](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts)
in different programming languages to help set up the environment and
run your first tests.

# Running Appium in Testdroid Cloud

[Tests can also be run in parallel in
cloud]({{site.github.url}}/appium/examples/moving-tests-to-cloud). The
app to test needs to be uploaded with associated tests to
{{site.td_cloud}}. Tests are run in parallel against all the chosen
devices as soon as they become available. Test results are stored in
cloud once they are executed and user is notified by email.

## Appium with Python

[Running tests in Testdroid Cloud (Python).]({{site.github.url}}/appium/examples/python/server-side-appium-in-tc)

## Appium with Java

[Running tests in Testdroid Cloud
(Java).]({{site.github.url}}/appium/examples/java/server-side-appium-in-tc)

# Testdroid Cloud Desired Capabilities

[Appium desired capabilities](testdroid-desired-caps/)

# Requirements for .ipa

[Here is the procedure]({{site.github.url}}/how-tos/ipa-requirements) to create your iOS
mobile application (.ipa files) to run your app in Testdroid Cloud.

