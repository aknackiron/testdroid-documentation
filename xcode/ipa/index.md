---
layout: default
title: iOS Application Package
---

Regardless of whether testing with XCTest or XCUITest, the application under test needs to be built and imported to Bitbar Testing cloud. The below steps present how to create the appropriate IPA build. 

## Create Test IPA

This guide has been tested with Xcode8. First the application needs to be built for testing. In Xcode *Product* menu select *Build for* and then *Testing*.

![]({{site.github.url}}/assets/xcode/ipa/xc-build-for-testing.png)

The application still needs to be packaged into an IPA zip. For this the location of the app is needed. In Xcode select the built .app, right click and select *Show it in Finder*.

![]({{site.github.url}}/assets/xcode/ipa/xc-show-in-finder.png)

In Finder right click the .app file and copy its location for later use. This location does not change from build to build so this step needs to be done only once. 

![]({{site.github.url}}/assets/xcode/ipa/xc-copy-in-finder.png)

The IPA package needed for XCTests in Bitbar Testing is a zip package and its creation can be automated and made part of a CI integration. Open a terminal and create the IPA.

    $ mkdir /tmp/Payload
    $ cd /tmp/Payload
    $ cp -r /Users/username/Desktop/Build/Products/Debug-iphoneos/LocalizationDemo.app .  # app path can be pasted
    $ cd ..
    $ zip --symlinks -qr "LocalizationDemo.ipa" Payload
    $ ls -lrt LocalizationDemo.ipa
    -rw-r--r--  1 username  staff  0 Dec 16 12:42 LocalizationDemo.ipa


<!-- ![]({{site.github.url}}/assets/xcode/ipa/xc-cli-create-ipa.png) -->

