---
layout: default
title: Bitbar Testing Releases
---

## Release 2.35 February 16, 2017

This release consisted mostly of technical improvements to our iOS test runs infrastructure. With the last releases of Xcode there has been a lot of changes in [mobile testing behavior](http://bitbar.com/whats-trending-with-mobile-test-automation-frameworks/).

Old Apple UI Automation framework got removed from the supported test frameworks as it hasn't been supported by Apple either for years.

There are visible UI changes on the My Account page. For those interested in the reasons behind the changes [can be read here](http://bitbar.com/from-the-desk-of-the-developer-bitbar-ui-update-2-35/).

Support for integrating to Gamebench service directly from the UI. Also note that the other possible integrations are now grouped here under My account.

![]({{site.github.url}}/assets/products/testdroid-releases/2.35/my-integrations.png)


## Release 2.34 February 1, 2017

* iOS AppCrawler enabled again. Due to the iOS side updates that were done since the beginning of the year, now the AppCrawler was done from scratch. Because of this the AppCrawler won't work exactly the same as the old one. Also, for now, it won't be able to fill in login or other forms.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/ios-appcrawler.png)

* UI modifications and improvements. Notably changes in the My Account page which now contains available and enabled integrations and the list of account users. Account users are users that are allowed to run test runs billed to the current user.


    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/integrations.png)

* Interested in getting deeper hardware statistics about how apps behave on various devices in Bitbar Testing? It's now possible by providing existing Gamebench credentials to get device and app statistics gathered from each test run in Bitbar Testing. This same Gamebench integration is also supported on On-premise and private cloud setups.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/gb-integration.png)

  Once a testrun is executed and Gamebench has been enabled then a link to the results is presented in the test run results page. 

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/gb-results-link.png)

  This link will take you directly to the Gamebench portal where the results for the used devices are presented.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/gb-page.png)

* A ton of small fixed here and there, especially on our iOS side Appium execution.


## Release 2.33 January 17, 2017

During the past month there have been multiple updates done to Bitbar public cloud. Some have been visible to end users and some not. The below list of enhancements are avaible on the public cloud but also available to our On-Premise and Private cloud customers. To get all latest features whole or parts of On-Premise or Private cloud needs to be updated. Please contact your dedicated support contact.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.34/gb-integration.png)



### Added Features

* XCTest and XCUITest frameworks are available to all users of Bitbar Testing cloud! These have been available to a limit number of users already since December but now all public cloud users get access to these. Bitbar [Github samples](https://github.com/bitbar/testdroid-samples/tree/master/xcode) present an example test project with both XCTest and XCUITest test steps.

    The documentation on how to prepare your Xcode project for these frameworks is available [here]({{site.github.url}}/xcode/xctest).

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.33/projects.gif)

* Latest stable [Appium version 1.6.3](https://github.com/appium/appium/releases/tag/v1.6.3), supporting newest iOS and Android devices has been installed to public cloud. This is the default Appium available for client side and server side test executions. On Android server side it is still possible to select some older version if required. For iOS, this is the only supported version.

    iOS side Appium Safari testing and iOS AppCrawler support are introduced to public cloud in few weeks with separate updates.

    **Attention** Users using older versions of Appium (before 1.5) may need to update their test scripts. Appium has made changes to default desired capabilities and deprecated some methods since Appium version 1.4. For example with Android tests, the method `find_element_by_name(<some string>)` has been depracated and needs to be updated with `find_element_by_android_uiautomator('new UiSelector().text(<some string>))`. Please check our [sample tests online](https://github.com/bitbar/testdroid-samples) for updated tests or [Appium release notes](https://github.com/appium/appium/releases/tag/v1.5.0).

    Next major Appium version upgrade on Bitbar Testing is done towards end of Q1 2017.

* Public cloud iOS devices are upgraded to latest available and Apple supported versions. As with earlier version of iOS most users have already updated their devices to the latest iOS 10.2 version. In public cloud, only a limited number of devices with older iOS versions 6, 7 or 8 remain.

  [![Mixpanel stats for iOS10 adoption until Jan 2017]({{site.github.url}}/assets/products/testdroid-releases/2.33/mixpanel-ios10.png)](https://mixpanel.com/trends/#report/ios_10)

* Support for Java 8 is available for test runs.

* Chromedriver was updated to 2.27.440175. This update was done already before Christmas, but we had a bug and the update didn't go through everywhere as it should have. 



## Release 2.32 December 22, 2016

### Added Features

* XCTest for iOS10 devices available to all paid plans. iOS10 devices were introduced to public cloud about a month ago and now the support for running XCTest test on them is available to all users. For more information on how to build the app IPA and how to package the tests is available in [our documentation]({{site.github.url}}/xcode)

  Bitbar's [Github sample repository](https://github.com/bitbar/testdroid-samples/tree/master/xcode) also contains an example XCTest project that can be used as a starting point with the above documentation, when starting out.

  With the support for XCTest project type, it is now also possible to run KIF tests in Bitbar Testing public cloud. The same has been available for a long time in Private and Enterprise installations.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.32/dropdown.gif)

  XCTest is available only on newer iOS devices with iOS version 10 or above. Support for older devices is coming in the following weeks.

* Calabash project type available to all new users regardless of the registered plan. Free users are limited by number of available free devices. Existing free users get access to Calabash projects by upgrading to a [paid plan](https://cloud.testdroid.com/#public/buy).

* iOS manual testing support is now part of default Bitbar Testing. Manual testing with iOS devices was until now enabled per device for dedicated devices and for Private and Enterprise installations. Testing how the app looks and behaves on real Apple devices is now easier than ever. 

* [Jenkins Run in Cloud plugin](https://wiki.jenkins-ci.org/display/JENKINS/Bitbar+Testing+Run+In+Cloud+Plugin) updated to verion 1.0.17. This fixes issues with downloading results and starting Appium server test runs.  


## Release 2.31 November 24, 2016

### Added Features

* Calabash environment variables. For better control over Calabash test run executions  environment variables are typically used. In Bitbar Testing it is possible to give values to the two pre-existing environment variables `CALABASH_TAGS` and `CALABASH_PROFILE`, in the advanced settings of a test run. These can be used to better orchestrate in which order tests get executed.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.31/enterprise-env-variables.png)

For private and on-premise installations it is also possible to allow users create their own variable and value pairs.


* Project type names were renamed for better clarity. Bitbar Testing solution is very test framework agnostic but we have a number of predefined common project types available. Below is how we have renamed the project types.

  * Android -> Android Instrumentation

    Android's own unit testing framework meant to run on the device for functional testing. 

  * Appium Android -> Appium Android client side

    To unify the naming convention with Appium client and server side projects. Earlier naming was not explicit about the client side approach. 

  * Appium iOS -> Appium iOS client side

    Uniformity to project naming conventions between client and server side projects. 

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.31/project_animated.gif)

* Chromedriver gets a version upgrade to latest version of 2.25.


## Release 2.30 November 9, 2016

Technical release with reliability updates and preparations for upcoming features.

### Added Features

* For easier screenshot step recognition in device test run view, the screenshot names are attached below the screenshots.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.30/screenshot_names.png)

* Appium server side [image recognition sample](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition) test gets a total rework. The sample project shows step by step how to do image recognition testing using Appium for testing eg. games. 

  Setting up needed environment is much easier to earlier example with less external dependencies and libraries. Used libraries were updated to the latest ones.

  Launching server side tests is simplified by introducing the `launch-tests.sh` script. This script is able to create the test zip, handle uploading of the required files as well as creating a new test project, when needed. Ideally the script is used by CI systems, but manual usage works just as well.

  ```bash
    $ bash launch-tests.sh 
    Either -a or -i flag must be provided, but not both!
    
    launch-tests.sh - create and upload test project to Testdroid Cloud and run it
    
    Usage: launch-tests.sh -a/i -g <DEVICE_GROUP_NAME> -k <API_KEY>
     -a for Android test
     -i for iOS test
    Optional: -p <PROJECT_NAME> to choose a specific profile. If not given, a new project will be created
    Optional: -t for creating and uploading a new test zip file
    Optional: -f <APP_FILE_PATH> for uploading a new app file
    Optional: -e <API_ENDPOINT> for private cloud instances
  ```

  The `launch-tests.sh` script is already available in [image recognition samples](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition).

* We setup our Maven central proxy making any Maven installs more robust and a lot faster. This is great news for all and especially Java server side mobile test runs. For more information about Maven mirrors check [here](http://maven.apache.org/guides/mini/guide-mirror-settings.html).

* Sample demo project is removed in Bitbar testing after user creates first new project.


## Release 2.29 October 27, 2016

### Added Features

* Improvements to device filters. The back end behavior for handling various device properties was improved to make sure the search criteria are better up to date and results more accurate than before. It's now easier to add new device labels (for On-Premise installations) and to search for devices from the UI.

* Small changes make a difference. Uploaded apps to manual testing now show the upload date and time making it easy to select the latest uploaded app for testing.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.29/manual-testing-timestamp.png)

* Filtering of tests inside of test run view. To make it easier to debug the cause of failures in apps, it's now possible to filter device runs to show only those where tests have failed. It is possible to have multiple filters enabled at a time making it possible to filter out failed devices and look only at successful test runs.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.29/filter-tests.png)

* The documentation to integrate JIRA with Bitbar Testing is updated and can be found in docs at [Integrations/jira](http://docs.testdroid.com/testdroid-cloud-integration/jira/)

* Big updates in Bitbar's image recognition samples on [Github samples](https://github.com/bitbar/testdroid-samples/tree/master/image-recognition). In addition to library updates, there are a lot of new improvements. iOS screenshots speed was dramatically improved by changing screenshots mechanism to use idevicescreenshot. Image recognition does not need the testdroid-appium-driver anymore, but uses the native Appium driver.

### Bug fixes

* Improvements in iOS server side test runs. There were multiple reasons with this of which OSX upgrade was one. Work on further stabilization is in progress.

* Appium client side runs were terminated if a test could not find some element. This is now fixed.


## Release 2.28 October 17, 2016

### Added Features

Single Sign On (SSO) using Google accounts has been enabled to public cloud. This is especially useful for teams and enterprise customers using Google mail services. It is enough to invite a co-worker to own project in Bitbar Testing cloud after which the invited user is able to SSO and instantly start contributing in testing or debugging of mobile apps. 

### Bug fixes

* Device run logs widget fixed.

* Improvements to iOS test run stability. There are still issues but improvements are being rolled out in phases. 


## Release 2.27 September 29, 2016

### Added Features

Dedicated devices - a new service for getting customers devices connected to our public cloud but also available to all other clouds. Use Bitbar Testing's large device range for manual and automated testing, but run regression and continuous integration tests on named devices hosted and managed by Bitbar. To get and pick the dedicated devices, please get in contact with [Bitbar sales](mailto:sales@bitbar.com).

Enterprise customers can use this functionality to create device pools visible and accessible only to particular teams. 

### Known Issues

* Since the past week there have been issues in running tests on our iOS devices. We are investigating the issue and are fighting to get it fixed. We are really sad about this.


## Release 2.26 September 14, 2016

### Added Features

* Testdroid Cloud supports video recording of Android test runs. This is a premium feature that is available for Team and Business plans. To enable video recording of your test runs, please contact your named service representative or [Bitbar sales](mailto:sales@bitbar.com). Support for iOS test run recording is coming shortly. 

* AppCrawler quick project creator includes credential fields. Instead of having to go through creating a new AppCrawler test run from the create test run menu, it's now possible to include app credentials also in the quick AppCrawler creator.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.26/app_crawler.png)

* Enterprise customers get yet more admin capabilities to manage their dedicated device cloud. Admins can now easily create teams inside of Testsdroid Cloud which allows reporting per team based usage statistics. Getting an answer to which team uses device cloud most is then straight forward.

  * Find the user that needs to be added as sub user and on user information page click on the button to set main user

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.26/sub_user_button.png)

  * It's then possible to select the main user 

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.26/convert_to_sub_user.png)

* Enterprise users can define how many times test runs get retried or not. There's now a new API call that can be used for changing the number of times that a test is retried. There are multiple cases when a test should not be re-run even if there's a problem with the test or device. If you have an Enterprise or Private cloud setup please be in touch with your customer success contact person to get more information about this. 


## Release 2.25 September 1, 2016

### Added Features

A small back end update focused on upgrading the Appium version used in server side test runs. Default for server side runs is still Appium 1.4.16. Modifying the run tests script `run-tests.sh`, allows using of Appium version 1.5.2.

This is the old approach of starting Appium in the script.

    # on iOS 
    /opt/appium/bin/appium.js -U ${UDID} --command-timeout 120 >appium.log 2>&1 &

    # on Android
    /opt/appium/appium/bin/appium.js >appium.log 2>&1 &

To use Appium 1.5, the above lines need to be updated to as below. It is suggested to update the script even if older Appium version is used. The launch procedure has been improved with this new approach.

    # on iOS
    #appium-1.4 -U ${UDID} --command-timeout 120 >appium.log 2>&1 &
    appium-1.5 -U ${UDID} --command-timeout 120 >appium.log 2>&1 &

    # on Android
    #appium-1.4 -U ${UDID} >appium.log 2>&1 &
    appium-1.5 -U ${UDID}  >appium.log 2>&1 &

Due to how Appium is started there is no more a need for a constant sleep after the launch. The following line should be commented out in the `run-tests.sh` as unnecessary.

    sleep 20 # Sleep for appium to launch properly  #<- this is not needed anymore

For now Appium client side runs continue to use older Appium 1.4 version.


## Release 2.24 August 15, 2016

### Added Features

* New project types for server side runs available to all users with SOLO plan or up. To create a server side Appium project, simply select Appium iOS or Android Server side project type from the project drop down list.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.24/server-side-project.png)

* Appium client side testing picks similar available device by default

  We updated our client side Appium to work in a way where the user does not need to provide an exact device name. The Appium client will search for a device that matches the requested device but does not guarantee that the requested device is used. The used device is visible in Testdroid Cloud test run view.
  
  For example by passing "iPhone" as testdroid_device capability name, Testdroid Appium client will pick any of the available iPhone devices, regardless of iOS or iPhone version. The test could be run on an iPhone 5s or iPhone 6.
  
  If the user wants to turn off this feature and use a specific device then the `testdroid_findDevice` Appium desired capability needs to be set to `True` like in below Python example. By default this is `False`.

    ```
    desired_capabilities_cloud['testdroid_findDevice'] = True
    ```

* Enterprise cloud admin users are now able to manage project ownership through the admin panel. Go to Admin - Projects, select the project that you want to move to other user and click on the "Project owner" icon. 

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.24/project_change_owner.png)

    You can then change the owner by selecting new user from the list.

    ![]({{site.github.url}}/assets/products/testdroid-releases/2.24/project_owner.png)


* Support for iOS 9.3.x devices using XCode 7.3.

* Python version 3.5.1 is available for server side runs. To use it, just call your Python scripts with `python3 your_test.py`.

* A touch or personalization is always fun. Testdroid Cloud now supports avatars through the [Gravatar service](https://en.gravatar.com/).

## Release 2.23 July 5, 2016

### Fixed Bugs

* Results processing in some cases was taking a long time or even failed. Test results processing problem was solved and solution improved.

### Added Features

* AppCrawler - Testdroid Cloud has had since its very early days an automated app tester that crawls through an app, checking for correct behavior. AppCrawler can be accessed directly from the main menu, or by creating a new project. When creating a new project the user has more options on guiding AppCrawler forward.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.23/new_app_crawler.png)

  To smoke test an application the app needs to be uploaded, then choose project to include the results or create a new one and select the number of devices the app needs to be tested on. If device groups are defined then these can also be used. Clicking 'Go' starts the test run. 
  Free users are limited to running on only one free device at a time. 

* The view to read and debug a test run's test steps or error logs can now be enlarged for better clarity. Once the view enlarged it's easy to use the search box to find keywords. Of course browser's own search is also supported.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.23/drv_expanded_steps.png)
  ![]({{site.github.url}}/assets/products/testdroid-releases/2.23/drv_expanded_errors.png)

* A better support for presenting results as test steps for users using Cucumber with Appium. 


## Release 2.22 June 23, 2016

### Fixed Bugs

* Getting always the same device from device group. Some customers had an issue when running sequential tests on a device group where the test + first device configuration failed. In future the devices from a selected group are proposed in a randomized order to increase success of sequential test runs.

### Added Features

* Enterprise and Private cloud administrators get a new menu element for managing used test frameworks. This gives Testdroid Cloud administrators the possibility of sharing test projects configurations between teams and modify the configurations of a specific test project.

* Calabash test framework is updated to latest version in Enterprise Clouds. Available versions are 0.19.0 for iOS and 0.7.3 for Android Calabash.

* Users are now able to cancel a test run with multiple devices and keep the results for the finished devices. Earlier when canceling a test run, the execution and results processing was canceled for all devices. Even those that had already finished test execution. With this release cancellation cancels only tests for those devices that have not yet started or finished running the tests. Results are presented for device runs that already have results.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.22/abort-test-run.png)

* Throughout the spring there has been updates to better visualize the test results. The last part (for now) comes to end with the updates to the device run view. The view has changed to give a better overall view of the device run. 
The page is divided in four. First view lets the user to switch which device from the run is inspected and present general relevant information on that device run. 

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.22/device-test-run-view-steps.png)

Logs are in their own widget. Different logs have their own syntax highlighting and everything can be text searched. Switching between various gathered logs is easy. The test framework specific logs are highlighted (eg. Appium and Calabash) and additional logs can be selected from the drop down. 

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.22/device-run-view-logs.png)

### Know Issues

* There is an issue with post processing of some test results in our Public Cloud. This release fixes part of the problem but there can still be issues with some runs. A robust solution is being implemented. More on this when final solution is coming out.


## Release 2.21 May 30, 2016

Release has mostly changes important to Enterprise Cloud users and internal to Testdroid Cloud handling of project related data. More on this with the upcoming releases, with more visible changes.

### Fixed bugs

* Performance fixes to creating new device groups. There was an annoying bug when creating a new device group by dragging new devices to the "New group" icon. The group got created but the correct number of devices in the group was slow to get updated.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.21/device-groups-improvement.png)

### Added Features

* Jenkins plugin, [Testdroid Run in Cloud Jenkins Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Testdroid+Run+In+Cloud+Plugin) was published to Jenkins Wiki. Also an update release (1.0.12) was made available and can be installed through the Jenkins Manager. 

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.21/jenkins-manager.png)

* Improved the presentation of test steps in View Screenshots by Test Step view. This functionality is available for Calabash users but also for AppCrawler (automated test runner) and Android UiAutomation tests. Now the screenshot comparison view presents erroneous steps and devices. 

  The comparison view also got some new icons next to device titles. These show whether there were errors in the tests or running the tests. As elsewhere when everything is good we give it green color, otherwise orange or red when things got really bad.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.21/shots-by-test-steps.png)


## Release 2.20 May 11, 2016

Technical release mostly intended to fixing some back end
issues. Release targeted for Enterprise installations.

### Fixed bugs

* Unable to use function buttons in manual testing: Using Firefox 44
  some UI elements on the manual testing view did not react correctly.

* Our resign-ipa script did not handle app Bundle display name with spaces correctly: Fixed.

### Added Features

* UI improvements to device run view. To ease access to the project
  information, like downloading log files, screenshots etc. we moved
  the project information up above the test run status view.

![]({{site.github.url}}/assets/products/testdroid-releases/2.20/new-doughnut.png)

* Bread crumbs to improve navigation. To help navigation inside of
  projects we added bread crumbs under top menu so it's easy to
  navigate back to where you came from.

![]({{site.github.url}}/assets/products/testdroid-releases/2.20/bread-crumbs.png)

## Release 2.19 April 27, 2016

Technical release with improvements for Private Cloud users and bug fixes.

### Fixed bugs

* Changes to IBM Marketplace integration

* Performance issues for administrator users (Enterprise and Private Clouds)

### Added Features

* Improved usage details reporting

## Release 2.18 April 4, 2016

Release for Private and Enterprise installations in mind.

### Fixed bugs

* Improvement to Calabash iOS test run reporting

### Added Features

* Administration interface was upgarded. Administrators can now use the same look and feel throughout the whole service.

* [Integration to IBM Marketplace](https://www.ibm.com/marketplace/next/search/us/en-us/?terms=testdroid). IBM Marketplace users can now get started using Testdroid Cloud. 

![]({{site.github.url}}/assets/products/testdroid-releases/2.18/td-ibm-marketplace.png)

* Possibility to reprioritize test runs in queue (Enterprise & Private
  Clouds). While an other team is running long regression tests
  reserving all the devices, you might want to prioritize your bug fix
  test run higher to get your fix tested. You can now do so by setting
  the priority of your test run in the admin panel of your Enterprise
  Cloud installation. Clicking the "edit pencil" admin is able to set
  the wanted priority to the test run.

![]({{site.github.url}}/assets/products/testdroid-releases/2.18/td-reprioritize-runs.png)
