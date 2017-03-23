---
layout: default
title: XCUITest
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/xcode/xcuitest/">
<link rel="canonical" href="http://docs.bitbar.com/testing/xcode/xcuitest/"/>
XCUITest testing framework is the default framework promoted by Apple for testing iOS applications. Typically XCUITest framework is used for functional testing, automating testing of common workflows, demo sequences or behavior of customer views.

To try out the framework one can try to use XCUITest Recorder for recording the first steps of the automated test. To find elements, their properties and navigating through the elements tree of the application one can also make use of the interface builder. 

The mobile application IPA needs to be created as described in [creating iOS Application Package]({{site.github.url}}/xcode/ipa/). Once the IPA file created the XCUITest Runner application should be located in the same folder as the application itself. Right click on the .app file and click *Show in Finder*. 

![]({{site.github.url}}/assets/xcode/xcuitest/xcuitest-project.png)

This folder contains a file ending with "-Runner.app".

![]({{site.github.url}}/assets/xcode/xcuitest/xcuitest-find-app.png)

For example if the UI test target name is `LocalizationDemoUITests` the app folder should contain an `LocalizationDemoUITests-Runner.app` file.

Next this file is compressed into a zip-package. Right click on the file ending "-Runner.app" and select *Compress <-Runner.app>*. This creates a .zip file that can be upload to Bitbar Testing cloud as the test package of the Bitbar Testing XCUITest test project.

![]({{site.github.url}}/assets/xcode/xcuitest/xcuitest-compress-app.png)

For an example Xcode project with XCTest and XCUITest cases please check our [online samples](https://github.com/bitbar/testdroid-samples/tree/master/xcode).


