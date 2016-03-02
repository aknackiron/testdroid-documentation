---
layout: default
title: Testdroid - Frequently Asked Questions
---

## Testdroid Cloud & Our Devices
 
**Q: Where can I see a list of your devices? How often are you updating it? And how long does it take you to have new devices?**

The complete list of devices - with all details – can be found under {{site.td_cloud}}. You don’t need to log in to Testdroid Cloud to see all details about our devices. The full list is here [https://cloud.testdroid.com/#public/devices](https://cloud.testdroid.com/#public/devices). We’re constantly updating our device roster, approx.. 5-20 new devices per month, depending on release cycles by OEMs.
 
**Q: Can I change or choose the OS on the devices? If not, how do you choose what OS should be on there?**

 No, devices have certain version of OS and cannot be changed. We do the changing when time goes on and if OEM releases relevant OS update. The purpose is to keep up with the actual use of certain OS versions globally and provide as versatile setup of different devices and OS as possible.
 
**Q: Can the handsets under test receive an email via wifi?**

 Yes, but your application needs to be configured to receive email. The regular email application in device cannot be currently configured for sending/receiving emails.
 
**Q: Where can I find the free test trial and how can I get started with Testdroid Cloud?**

 You can create yourself a free account at {{site.td_cloud}} or [testdroid.com](http://testdroid.com). After leaving your email address in any of these forms, you’ll get an activation email. Just click the link and you’ll be guided through the registration process (only basic form is asked to be filled with your information). After this, you can log in to {{site.td_cloud}} using your credentials and access our free device group.
 
**Q: My test run failed on most devices. Why was that?**

 There are several reasons why test runs fails at {{site.td_cloud}}. First and the most typical case is that there is something wrong with application, and instrumentation makes it crash. Errors in either app or instrumentation are also typical. Good rule of thumb is that if App Crawler run crashes with your app, then the problem is in app itself. If the execution crashes with your tests, it can be either way. Almost never test run crashes because of Testdroid Cloud infrastructure. More often you see this kind of crash (e.g. device has crashed or is not accessible) as a pending test run start or not providing information about test run status. E.g. Pending in Queue is a normal case and you app is waiting to get executed on device.
 
**Q: Are the devices jail broken/rooted?**

 No. None of our devices are jail broken or rooted.
 
**Q: Our app requests Device Administrator privileges from the user. After the user grants the app Device Admin privileges these privileges cannot be removed without first entering a password. It is conceivable that some of our tests may leave the app on the device. Does any of this cause a problem for your test environment?**

 No, it doesn’t cause problems to our devices or environment. Our system automatically cleans, reboots and hard resets devices before any test run.
 
**Q: The app connects to our internal server. Our IT department will only allow connections from known IP address ranges. Is it possible for you to tell us what IP ranges are used to originate traffic from your test devices?**

 This can be handled automatically. Manually we won’t go in these engagements. Automatically this can be implemented e.g. by application. The app should find out what is the IP of that device/connection and then communicate it to some external service that can open that IP range for database etc. connections. For Private and Enterprise Cloud installations most special network configurations are possible.
 
**Q: Where is your cloud (test center) located?**

 The primary data center (Testdroid Cloud devices) are in Bitbar premises in Wroclaw, Poland. We also have a data center in Oulu, Finland.
 
**Q: How safe are you?**

 All our user data, applications and results are stored in Amazon Cloud and are very safe. We also use SSL and encrypt the data as seen appropriate. Only users with valid accounts can access their own data and results. We also track all IPs connecting to our Testdroid Cloud.
 
**Q: How long is usually the queue? In each priority group? Do I have to wait for 2 hour or day?**

 The time between a start of test run and delivering results depends entirely on test case length, current queue, time of the day and a desired device set. Typically we’re talking about 2 to 15 minutes. Sometimes it can be longer if you start multiple test runs on same devices. We have multiple copies of devices at Testdroid Cloud so some devices can ensure results in few minutes (depending on test run length). The customers with higher priority plans (platinum > gold > silver) can get their app running first in case of queue.
 
**Q: How long will our projects be online?**

 We don't guarantee of storing data or results for longer than six months currently. Projects are typically not removed from Testdroid Cloud.
 
**Q: Can I take pictures, sound recording (mic) with the phones?**

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

 
**Q: As we write scripts we notice that there are subtle differences between the user interfaces of various manufacturers and OS versions. This makes it complicated to deal with the different cases when doing typical tasks such as clicking on items on the Android Settings menu. Do you have a set of libraries that carry out these common tasks? Or a set of existing Uiautomator test scripts that we can copy from?**

 No, but there are plenty of good resources of information for uiautomator provided by Google:
[http://developer.android.com/tools/help/uiautomator/index.html](http://developer.android.com/tools/help/uiautomator/index.html)

Bitbar’s info video:
[http://www.youtube.com/watch?v=uA54T6R8nhs](http://www.youtube.com/watch?v=uA54T6R8nhs)
 
 
## iOS Test Automation Frameworks
 
We support UI Automation, Jasmine, Calabash and Appium for iOS test automation with Testdroid Cloud.
 
**Q: Is iOS Test based on UI Automation, which means it can only test UIKit components or?**

 UI Automation is only one supported framework in Testdroid Cloud.
 
**Q: How are you handling the provisioning profiles to be able to test on devices?**

 We replace your provisioning profile with our provisioning profile. No need to root or jailbreak devices to get this done.
 
**Q: Can I test Cocos2d or C++ OpenGL based games?**

 Yes, you can. To get this done effectively you have to think what test automation framework fits to best for your needs and will the framework work with your app/game.

 
## Testdroid Recorder

**Testdroid Recorder is not supported anymore by us. There are newer and better tools for this purpose, eg. [Google search Appium Inspector](https://www.google.com/search?q=appium+inspector&gws_rd=cr,ssl&ei=ZR_XVtmKDInF6AS1na6YCw)"
 
**Q: My device doesn't connect to Recorder. How to make it work?**

 Testdroid Recorder is just a plug-in to Eclipse so if Eclipse/ADB cannot find your device this has an implication also in Testdroid Recorder. The common trick to get your device recognized and usable with Testdroid Recorder, please always make sure appropriate options (e.g. Developer options in older Android versions) are enabled and try unplugging-plugging again if device cannot be found. Typically adb provides information about misfunctioning in Eclipse views.
 
**Q: Is it possible to download the Testdroid Recorder in more than one machine with the same account?**

 Yes, but only one concurrent Testdroid Recorder can be authorized at the time. There is an authorization step at the beginning when launching Testdroid Recorder. This will take connection to Testdroid Cloud and ensure user has a right to use the product (unlimited steps). In other cases, Testdroid Recorder is limited to 30 steps.
 
**Q: Do you have a recorder for iOS? If not, will you have that soon?**

 No. If users are OK to use UI Automation, we typically recommend Xcode Instruments. More information about this can be found here:
https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/Introduction/Introduction.html
 
**Q: Can I test my recorded script on my own devices, instead of always pushing it to the cloud?**

 Of course. You can record any interactions with your app/game and then replay it as Android JUnit Test or Android JUnit Test From APK (under Run As menu) by highlighting the generated test project.
 
 
## Testdroid Enterprise
 
**Q: Can I cluster my Testdroid Enterprise device set over various locations? E.g. 15 Android devices in UK, 10 iOS in India? And is that one installation?**

 Yes, of course. This depends how you want to set up your environment. You can have one server connecting a certain device group (e.g. Android devices in UK) and another one in India for iOS devices. Those two servers can be grouped together in Testdroid Enterprise under your firewall and results can be viewed anywhere in your premises/locations.
 
 
## Testdroid API
 
More information about Testdroid Integration API can be found here:
[docs.testdroid.com/testdroid-cloud-integration/api/]({{site.github.url}}/testdroid-cloud-integration/api/)
<!-- http://help.testdroid.com/customer/portal/topics/810087-testdroid-cloud-integration-api/articles  -->
  
Java source code + client can be found at Github repository:
[https://github.com/bitbar/testdroid-api](https://github.com/bitbar/testdroid-api)
 
**Q: Do you have an API? Where can I find a documentation? Can I integrate Jenkins or my system to it?**

 Yes, the documentation with full API description can be found at [docs.testdroid.com]({{site.github.url}}/testdroid-cloud-integration/api/). You can integrate your CIs or any scripts with Testdroid using API's JSON based calls.
 
## Support
 
**Q: Where is your support located/What are the business hours?  Is it email support or also call?**

 Our support is located in USA, Finland and Poland. We provide 24/5 (business days) support for all test runs on devices at Testdroid Cloud as well as an email answers for any questions related to Testdroid products. Business hours – as defined in Pricing – apply for European CET time zone 9am-5pm.
 
## Generic Questions
 
**Q: Is your solution strictly for testing mobile apps, or is it possible to use it also for testing mobile sites.**

 Testdroid products are not limited to apps only. E.g. Appium framework can be used to test mobile websites using Testdroid device cloud.
 
**Q: How many people are you? And where are you located? Are you guys like 5 guys in garage or...**

 Currently (mid Feb 2016), we’re about 55 in headcount, located in 4 countries. We have two major R&D sites and two bigger sales offices. Totally 5 different offices in the USA, Finland and Poland.
 
