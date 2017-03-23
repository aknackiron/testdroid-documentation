---
layout: default
title: Client vs. Server Side Execution 
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/client-server/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/client-server/"/>

## Client vs. Server Side Execution

There are different approaches with Appium that you can use for your app testing. First, the <i>client-side</i> execution means that you upload the application to Bitbar Testing/Private cloud and you start your tests from your localhost (client-side). Despite you run all tests in our infrastructure and on our devices, the control over the test execution is on your side - and you also need fetch results, logs, screenshots etc. to your localhost once those tests are done.

In <i>server-side</i> execution you upload both your application and tests to Bitbar Testing/Private cloud - and then you select device group, configure additional parameters for the test run and get the results in Bitbar Testing/Private cloud dashboard. This provides much easier way to start, manage and review tests and gives a way to keep all your test assets in one place.

Furthermore, server-side execution provides you the way to simultanously run test on different devices. With client-side execution you typically start one test session per time. There are naturally ways to use investigator scripts to start lots of test runs but the server-side execution makes the parallel execution much easier. In addition, you don't need to configure those Desired Capabilities for your tests, as test scripts will be running locally in cloud rather than through an active connection from the user. This is the reason why the scripts don't need to use testdroid_capabilities at all and instead only use appium_capabilities set to run locally.

When using server-side Appium execution, you can run standard Appium tests on hundreds of devices in parallel without any need for complex set-ups at the client side.

The following picture illustrates the difference between these two approaches:

![]({{site.github.url}}/assets/appium/appium_server_side_concept.jpg)

Despite the usability is smoother with server-side Appium, from infrastructure point of view both are similar. The picture below illustrates what happens behind the scenes regardless of which is used.

![]({{site.github.url}}/assets/appium/appium-behind-the-scene.png)

If using client-side execution, existing configurations need to be update to match ours as eg. explained [here]({{site.github.url}}/appium/examples/python-client-side-example/#set-credentials-and-other-parameters).
With server-side Appium execution, our system takes care of simultaneous test runs on selected devices. There are no limitations of how many devices can run simultaneously so even hundreds of different variants is possible.

### How Client Side Selects Devices

On client side Appium runs Bitbar Testing clouds gives preference on providing some available similar device over the exact request. Of course this too can be changed using desired capability `testdroid_findDevice`. This allows the user to always get a similar device to the one requested. The similar device is found by device name similarity matching. This means that running the same test twice, the selected devices might be different if first device is in use by somebody else.
To enforce selecting a specific device, one should check for the exact name from cloud and set the `testdroid_findDevice` capability to `false`. This will force the Appium client to pick the requested device. If the device is busy, a new session is tried for a few minutes and the connection is closed if device does not become available.

### The Benefits of Server-Side Appium

First of all, one the most significant improvement provided with this server-side Appium implementation is the ability to execute Appium tests parallel on real devices. As Appium was originally designed to provide tight relation to emulator or one device at time, we’ve now extended the possibility to use it across even hundreds of real devices simultaneously.

Secondly, users do not need to configure any of those devices on desired capabilities, but all can be done with Device Group creation and configuration by dragging and dropping desired devices into your device groups. This eliminates the variety of errors that typically came with configuring devices in script.

Also, all test runs are now easy to monitor through real-time views at Bitbar Testing/Private cloud. At a glance, you will see how test runs are doing, get instant feedback on failures, and possibility to maintain all test results (screenshots, logs, performance stats etc.) and file assets under your projects.




