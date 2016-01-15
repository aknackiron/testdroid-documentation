---
layout: default
title: Client vs. Server Side Execution 
---


## Client vs. Server Side Execution

There are different approaches with Appium that you can use for your app testing. First, the <i>client-side</i> execution means that you upload the application to Testdroid Cloud/Privatecloud and you start your tests from your localhost (client-side). Despite you run all tests in our infrastructure and on our devices, the control over the test execution is on your side - and you also need fetch results, logs, screenshots etc. to your localhost once those tests are done.

In <i>server-side</i> execution you upload both your application and tests to Testdroid Cloud/Privatecloud - and then you select device group, configure additional parameters for the test run and get the results in Testdroid Cloud/Privatecloud dashboard. This provides much easier way to start, manage and review tests and gives a way to keep all your test assets in one place. 

Furthermore, server-side execution provides you the way to simultanously run test on different devices. With client-side execution you typically start one test session per time. There are naturally ways to use instigator scripts to start lots of test runs but the server-side execution makes the parallel execution much easier. In addition, you don't need to configure those Desired Capabilities for your tests, as test scripts will be running locally in cloud rather than through an active connection from the user. This is the reason why the scripts don't need to use testdroid_capabilities at all and instead only use appium_capabilities set to run locally.

When using server-side Appium execution, you can run standard Appium tests on hundreds of devices in parallel without any need for complex set-ups at the client side.

The following picture illustrates the difference between these two approaches:

![]({{site.baseurl}}/assets/appium/appium_server_side_concept.jpg)

Despite the usability is much more smooth with server-side Appium, from the infrastructural point of view both are pretty similar. The picture below illustrates what happens behind the scenes regardless of which way user is using it.

![]({{site.baseurl}}/assets/appium/appium-behind-the-scene.png)

The things behind the scene are pretty much the same regardless of which approach you take. If you use client-side execution, you must configure those desired caps and our Appium Broker together with Appium Server takes care of running tests one by one on those devices. With server-side Appium execution, our system takes care of simultaneous test runs on those devices you have selected. There aren’t any limitation of how many devices you can use simultaneously so even hundreds of different variants if you want.

<strong>The Benefits of Server-Side Appium</strong>

First of all, one the most significant improvement provided with this server-side Appium implementation is the ability to execute Appium tests parallel on real devices. As Appium was originally designed to provide tight relation to emulator or one device at time, we’ve now extended the possibility to use it across even hundreds of real devices simultaneously.

Secondly, users do not need to configure any of those devices on desired capabilities, but all can be done with Device Group creation and configuration by dragging and dropping desired devices into your device groups. This eliminates the variety of errors that typically came with configuring devices in script.

Also, all test runs are now easy to monitor through real-time views at Testdroid Cloud/Privatecloud. At a glance, you will see how test runs are doing, get instant feedback on failures, and possibility to maintain all test results (screenshots, logs, performance stats etc.) and file assets under your projects.




