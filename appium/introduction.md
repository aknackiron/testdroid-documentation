---
layout: default
title: Introduction and Prerequisites
---


## Introduction and Prerequisites

Appium is a mobile test automation framework (and tool) for native, hybrid and mobile-web apps for iOS and Android. It uses [JSONWireProtocol](https://code.google.com/p/selenium/wiki/JsonWireProtocol) internally to interact with iOS and Android apps using [Selenium’s WebDriver](http://docs.seleniumhq.org/projects/webdriver/).

In its architecture, Appium is an HTTP server written in Node.js that creates and handles multiple WebDriver sessions. Appium starts tests on the device and listens for commands from the main Appium server. It is almost the same as the Selenium server that gets HTTP requests from Selenium client libraries.

In fact, Appium is a pretty good choice for both apps and games because, in many cases, apps and games tend to be identical (or at least very similar) on both platforms, Android and iOS — and so the same test script can be applied to both. Another significant benefit of Appium is that users can write tests using their favorite development tools, environment and programming language, such as Java, Objective-C, JavaScript, PHP, Ruby, Python or C#, among many others.

Appium enables users to execute tests on mobile devices regardless of OS. This is possible because the Appium framework is basically a wrapper that translates Selenium’s WebDriver commands to UIAutomation (iOS), UIautomator (Android, API level 17 or higher) or Selendroid (Android, API level 16 or lower) commands, depending on the device’s type.

For Android, this is how Appium compares to other test automation frameworks:

![]({{site.baseurl}}/assets/appium/10-framework-families-opt.png)

Android test suites are based on JUnit. In addition, Android provides an architecture and fully integrated testing capabilities with its standard tools, which help developers to test at every level, from unit to framework. Android instrumentation is a set of control methods in the Android system. These methods control an Android component independently of its normal life cycle.

One of the best things about Appium is that, despite sounding architecturally complex, it actually isn’t — at all. For developers, it provides support for various programming languages, freedom from having to select tools, compatibility across the most important platforms (Android and iOS), freedom from having to install and configure devices to test and more.

If you are familiar with Selenium, then you’ve got Appium covered. An Appium test is pretty much the same as a Selenium test: They use the same WebDriver, and DesiredCapabilities is used the same way. Configuring an application to run on Appium has a lot of similarities to Selenium — for example, those DesiredCapabilities.

Also, Appium includes a component called the [Appium Inspector](http://testdroid.com/news/appium-tip-13-use-inspector-or-uiautomatorviewer-for-ui-element-inspection). This inspector enables a host of functionality — for example, showing all of those UI elements in the application and enabling basic recording and playback.

