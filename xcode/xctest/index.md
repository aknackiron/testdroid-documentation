---
layout: default
title: XCTest Sample
---

Guide on getting existing XCTest test projects running on Bitbar Testing cloud. To start testing on cloud the application package and the test package need to be uploaded to cloud. 


Compiling Unit tests - This should be the default setting, but it's worth double checking. Open the Build action settings for the scheme in the Scheme Editor.
 Verify that in the Run column, your test targets are checked. This means that when typing Command-B or even running the app, the tests are compiled too.
 
![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-1.png)


In order for the classes under test to be available within the test bundle, they need to be included with test target membership. 
In the example project, MyModel.swift was a class under test, so it needed to be added to the test target membership. Normally this isn't required with Swift, because the `@testable` annotation imports the required modules.


![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-2.png)


Compile tests for device, select *Real device* from the menu and press Command-B:

![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-3.png)

In Xcode 7 one can right click on .xctest under *Product*, and select *Show in Finder*:

![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-4.png)

In Xcode8 .xctest can be found inside of the .app, so in order to locate it, right click on  app and select *Show in Finder*. Right click app again in *Finder* and select *Show Package Contents*.

![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-5.png)

Then go to the Plugins folder and right click top of the .xctest and select compress:

![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-6.png)

Now the  XCtest package (zip) exists and can be uploaded to Bitbar Testing cloud with the IPA package created earlier.

![]({{site.github.url}}/assets/xcode/xctest/xc-xctest-7.png)


## XCTest Test Run

To run XCTest tests, an XCTest test project needs to be created in Bitbar Testing.

When creating the test run, upload the .ipa file when asked for the application file and and the zip package for test cases. 