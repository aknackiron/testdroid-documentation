---
layout: default
title: Testdroid - Frequently Asked Questions
---

## Testdroid Cloud & Our Devices

###  Do we need to share the source code of the app in the Cloud?

No you don't, unless you choose to use a test framework that specifically requires this.

###  How does Testdroid manage the cleaning of devices?

Each phone is cleaned of apps that are not expected to be there.

Android browser: we do remove any browser app local data implying there will not be any navigation data on next session. We also uninstall all apps that is possible to unistall and remove files we know are created during tests.

iOS browser: we rely on iOS's own browser history cleaning services to revert Safari to an initial state.

Each device is put through a clean up phase after each test run. Regardless of all these efforts some files or data may stay hidden somewhere on the device in the Public Cloud. For a truly private environment we recommend a Private or Enterprise Cloud installation.

###  What are the requirements for signing my iOS applications to use on Testdroid's iOS devices?

The app needs to be an ad-hoc distribution developer debug build. You can find more information [here](http://docs.testdroid.com/how-tos/ipa-requirements/ ).

###  How do you support Testdroid devices communicating with servers behind our firewall?

For Public cloud the only way is for the customer servers to whitelist our public IPs to allow connections from our devices. For Private Cloud we can implement a VPN or proxy connection. In Enterprise Cloud the customer has complete freedom on implementing the networking as the cloud is in their own premises.

###  Do you support turning off and on Wifi on Testdroid devices?

This is not supported in Public Cloud. There is support for this in Private and Enterprise environments.

###  My tests require a Bluetooth (BLE) connection between the device and my external HW. What should I do?

For Public Cloud you could try to mock the BLE connection data as required by the tests. Otherwise we can pair devices to required Bluetooth devices in Private or Enterprise Cloud environments.

###  Do you use emulators or real devices?

Real devices only.

###  A lot of our content will not work outside country X. How can this be solved in the Cloud?

For Public cloud the only way is for the customer servers to whitelist our public IPs allowing our devices to connect. For private cloud we can implement a VPN or proxy connections. In Enterprise Cloud it is up to the customer to define as the installation is in their own premise.

###  Do you support in app purchases?

In Public Cloud it is complicated to manage Google account cash. If a test account can be used to log in and do the purchase completely inside the tested app, then we can support it. For Private and Enterprise environments we can set accounts controlled by the customer to enable such purchases.

###  Do you support testing of push notifications?

If the used test framework supports testing push notifications, then we can support them too. Triggering of push notifications is up to the customer to handle.

###  Can we change device settings on Testdroid?

In Public Cloud it is not allowed to access device settings at all. For Private and Enterprise environments settingscan be changed through remote access to the device.

###  What types of device performance data does Testdroid provide for test runs?

We provide CPU and Memory usage data. We have also the ability to provide Gamebench statistics on test runs. To get more information about this please contact our <sales@bitbar.com>.

###  Can we do remote manual testing with Testdroid devices?

For most Android models yes, some are incompatible with the VNC technology in use. We are adding this same functionality to iOS devices too for our Private and Enterprise customers.

###  Does Testdroid support parallel or concurrent test runs?

Yes. [Here is more information]({{ site.github.url }}/appium/client-server/). 


###  Can I use my own Google accounts on Testdroid devices?

In Public Cloud setting a Google account on the device isn't allowed. Using a Google API/Service to log in to an app with your own account can be done. For Private and Enterprise environments a customer's own Google account can be set on the devices.

###  Where can I see a list of your devices? How often are you updating it? And how long does it take you to have new devices?

The complete list of devices - with all details – can be found under {{site.td_cloud}}. You don’t need to log in to Testdroid Cloud to see all details about our devices. The full list is here [https://cloud.testdroid.com/#public/devices](https://cloud.testdroid.com/#public/devices). We’re constantly updating our device roster, approx.. 5-20 new devices per month, depending on release cycles by OEMs.

###  Can Testdroid provide dedicated private devices for my Testing?

Dedicated devices are available through Private Cloud installations. Here the customer is able to freely select the number and type of devices 
 
###  Can I change or choose the OS on the devices? If not, how do you choose what OS should be on there?

 No, devices have certain version of OS and cannot be changed. We do the changing when time goes on and if OEM releases relevant OS update. The purpose is to keep up with the actual use of certain OS versions globally and provide as versatile setup of different devices and OS as possible.
 
###  Can the handsets under test receive an email via wifi?

 Yes, but your application needs to be configured to receive email. The regular email application in device cannot be currently configured for sending/receiving emails.
 
###  Where can I find the free test trial and how can I get started with Testdroid Cloud?

 You can create yourself a free account at {{site.td_cloud}} or [testdroid.com](http://testdroid.com). After leaving your email address in any of these forms, you’ll get an activation email. Just click the link and you’ll be guided through the registration process (only basic form is asked to be filled with your information). After this, you can log in to {{site.td_cloud}} using your credentials and access our free device group.
 
###  My test run failed on most devices. Why was that?

 There are several reasons why test runs fails at {{site.td_cloud}}. First and the most typical case is that there is something wrong with application, and instrumentation makes it crash. Errors in either app or instrumentation are also typical. Good rule of thumb is that if App Crawler run crashes with your app, then the problem is in app itself. If the execution crashes with your tests, it can be either way. Almost never test run crashes because of Testdroid Cloud infrastructure. More often you see this kind of crash (e.g. device has crashed or is not accessible) as a pending test run start or not providing information about test run status. E.g. Pending in Queue is a normal case and you app is waiting to get executed on device.
 
###  Are the devices jail broken/rooted?

 No. None of our devices are jail broken or rooted.
 
###  Our app requests Device Administrator privileges from the user. After the user grants the app Device Admin privileges these privileges cannot be removed without first entering a password. It is conceivable that some of our tests may leave the app on the device. Does any of this cause a problem for your test environment?

 No, it doesn’t cause problems to our devices or environment. Our system automatically cleans, reboots and hard resets devices before any test run.
 
###  The app connects to our internal server. Our IT department will only allow connections from known IP address ranges. Is it possible for you to tell us what IP ranges are used to originate traffic from your test devices?

We have two public cloud data centers with IP ranges 185.75.2.0/28 and 216.38.149.11/32. Public Cloud users can also implement a test app to find the current IP of used device/connection and communicate it to external service that can open that IP for connections.
For Private and Enterprise Cloud installations most special network configurations are possible.
 
###  Where is your cloud (test center) located?

Testdroid devices are located in our data centers in San Jose, CA and Wroclaw, Poland. 

 
###  How safe are you?

 All our user data, applications and results are stored in Amazon Cloud and are very safe. We also use SSL and encrypt the data as seen appropriate. Only users with valid accounts can access their own data and results. We also track all IPs connecting to our Testdroid Cloud.
 
###  How long is usually the queue? In each priority group? Do I have to wait for 2 hour or day?

 The time between a start of test run and delivering results depends entirely on test case length, current queue, time of the day and a desired device set. Typically we’re talking about 2 to 15 minutes. Sometimes it can be longer if you start multiple test runs on same devices. We have multiple copies of devices at Testdroid Cloud so some devices can ensure results in few minutes (depending on test run length). The customers with higher priority plans (platinum > gold > silver) can get their app running first in case of queue.
 
###  How long will our projects be online?

 We don't guarantee of storing data or results for longer than six months currently. Projects are typically not removed from Testdroid Cloud.
 
###  Can I take pictures, sound recording (mic) with the phones?

 Yes, you can. But our devices are not positioned for any specific photo target or recording of audio can give you arbitrary recording. However, our devices are fully functioning Android and iOS devices, and both mentioned functions are in use.
 
## Android Test Automation Frameworks
 
When people consider what framework works the best, these supplementary documents, slidedecks and webinars can be recommended:
 
Appium, Calabash, Espresso, Robotium, uiautomator:
http://www.slideshare.net/bitbar/different-android-test-automation-framework-what-works-you-the-best
 
Robotium vs. uiautomator:
http://testdroid.com/testdroid/4684/the-pros-and-cons-of-different-android-testing-methods
 
Appium:
http://www.slideshare.net/bitbar/testdroid-webinar20140107
 
 
## UIAutomator
 
###  As we write scripts we notice that there are subtle differences between the user interfaces of various manufacturers and OS versions. This makes it complicated to deal with the different cases when doing typical tasks such as clicking on items on the Android Settings menu. Do you have a set of libraries that carry out these common tasks? Or a set of existing Uiautomator test scripts that we can copy from?

 No, but there are plenty of good resources of information for uiautomator provided by Google:
[http://developer.android.com/tools/help/uiautomator/index.html](http://developer.android.com/tools/help/uiautomator/index.html)

Bitbar’s info video:
[http://www.youtube.com/watch?v=uA54T6R8nhs](http://www.youtube.com/watch?v=uA54T6R8nhs)
 
 
## iOS Test Automation Frameworks
 
We support [KIF](https://github.com/kif-framework/KIF), [UI Automation](https://developer.apple.com/library/tvos/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/UIAutomation.html), [Jasmine](http://jasmine.github.io/), [Calabash](http://calaba.sh/) and [Appium](http://appium.io/) for iOS test automation with Testdroid Cloud.
 
###  Is iOS Test based on UI Automation, which means it can only test UIKit components or?

 UI Automation is only one supported framework in Testdroid Cloud.
 
###  How are you handling the provisioning profiles to be able to test on devices?

 We replace your provisioning profile with our provisioning profile. No need to root or jailbreak devices to get this done.
 
###  Can I test Cocos2d or C++ OpenGL based games?

 Yes, you can. To get this done effectively you have to think what test automation framework fits to best for your needs and will the framework work with your app/game.

###  Is there support to automatically handle iOS dialogues?

Currently the handling of iOS dialogues is handled through used test framework. We're working on ways to handle such dialogues outside testrun scope as well.


## Testdroid Recorder

**Testdroid Recorder is not supported anymore by us. There are newer and better tools for this purpose, eg. [Google search Appium Inspector](https://www.google.com/search?q=appium+inspector&gws_rd=cr,ssl&ei=ZR_XVtmKDInF6AS1na6YCw)**
 
###  My device doesn't connect to Recorder. How to make it work?

 Testdroid Recorder is just a plug-in to Eclipse so if Eclipse/ADB cannot find your device this has an implication also in Testdroid Recorder. The common trick to get your device recognized and usable with Testdroid Recorder, please always make sure appropriate options (e.g. Developer options in older Android versions) are enabled and try unplugging-plugging again if device cannot be found. Typically adb provides information about misfunctioning in Eclipse views.
 
###  Is it possible to download the Testdroid Recorder in more than one machine with the same account?

 Yes, but only one concurrent Testdroid Recorder can be authorized at the time. There is an authorization step at the beginning when launching Testdroid Recorder. This will take connection to Testdroid Cloud and ensure user has a right to use the product (unlimited steps). In other cases, Testdroid Recorder is limited to 30 steps.
 
###  Do you have a recorder for iOS? If not, will you have that soon?

 No. If users are OK to use UI Automation, we typically recommend Xcode Instruments. More information about this can be found here:
https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/Introduction/Introduction.html
 
###  Can I test my recorded script on my own devices, instead of always pushing it to the cloud?

 Of course. You can record any interactions with your app/game and then replay it as Android JUnit Test or Android JUnit Test From APK (under Run As menu) by highlighting the generated test project.
 
 
## Testdroid Enterprise
 
###  Can I cluster my Testdroid Enterprise device set over various locations? E.g. 15 Android devices in UK, 10 iOS in India? And is that one installation?

 Yes, of course. This depends how you want to set up your environment. You can have one server connecting a certain device group (e.g. Android devices in UK) and another one in India for iOS devices. Those two servers can be grouped together in Testdroid Enterprise under your firewall and results can be viewed anywhere in your premises/locations.
 
 
## Testdroid API
 
More information about Testdroid Integration API can be found here:
[docs.testdroid.com/testdroid-cloud-integration/api/]({{site.github.url}}/testdroid-cloud-integration/api/)
<!-- http://help.testdroid.com/customer/portal/topics/810087-testdroid-cloud-integration-api/articles  -->
  
Java source code + client can be found at Github repository:
[https://github.com/bitbar/testdroid-api](https://github.com/bitbar/testdroid-api)
 
###  Do you have an API? Where can I find a documentation? Can I integrate Jenkins or my system to it?

 Yes, the documentation with full API description can be found at [docs.testdroid.com]({{site.github.url}}/testdroid-cloud-integration/api/). You can integrate your CIs or any scripts with Testdroid using API's JSON based calls.
 
###  Do you provide Jenkins and other CI plug-ins for Testdroid?

We provide a Jenkins plugin, which is available at [JenkinsCI Github](https://github.com/jenkinsci/testdroid-run-in-cloud-plugin).

## Support
 
###  Where is your support located/What are the business hours?  Is it email support or also call?

 Our support is located in USA, Finland and Poland. We provide 24/5 (business days) support for all test runs on devices at Testdroid Cloud as well as an email answers for any questions related to Testdroid products. Business hours – as defined in Pricing – apply for European CET time zone 9am-5pm.

###  Do you offer devices with pre-released OS versions of Android and iOS?

Not for regular app testing. Maintaining pre-release OS is problematic as such releases can be very unstable and out of our hands to handle.
 
## Generic Questions
 
###  Is your solution strictly for testing mobile apps, or is it possible to use it also for testing mobile sites?

 Testdroid products are not limited to apps only. E.g. Appium framework can be used to test mobile websites using Testdroid device cloud.
 
###  How many people are you? And where are you located? Are you guys like 5 guys in garage or...

 Currently (mid Feb 2016), we’re about 55 in headcount, located in 4 countries. We have two major R&D sites and two bigger sales offices. Totally 5 different offices in the USA, Finland and Poland.
 

###  Testing manually is very slow.

Manual remote testing is powered by a direct VNC connection. Latency can be expected as the connection is live.

