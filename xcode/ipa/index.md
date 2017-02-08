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


## Good to Know

### Armv7

If building for iPhone 5 or iPhone 5C (having Armv7 32 bit processor) devices then an additional step is needed before creating the build. Starting from Xcode7 onwards armv7s is [no more part of the default](https://github.com/jverkoey/iOS-Framework/issues/115) `$(ARCHS_STANDARD)` and so should be added as target build architecture.

![]({{site.github.url}}/assets/xcode/ipa/xc-armv7-build-option.png)

### iOS 9.3.5

By default Xcode8 builds apps against the latest available iOS (10.2 at the time of writing). For testing against devices running previous iOS versions the app and the tests need to be built for these separately.

First the project level *Deployment Target* needs to be set to 9.3.

![]({{site.github.url}}/assets/xcode/ipa/project-target-version.png)

Then the same needs to be done for the app target (Calculator in these example screenshots) 

![]({{site.github.url}}/assets/xcode/ipa/app-target-version.png)

and still for the tests (CalculatorUITests).

![]({{site.github.url}}/assets/xcode/ipa/test-target-version.png)


<!-- ![]({{site.github.url}}/assets/xcode/ipa/xc-cli-create-ipa.png) -->

