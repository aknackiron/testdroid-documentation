---
layout: default
title: Testdroid Releases
---

## Release 2.29 September 29, 2016

### Added Features

* Dedicate devices - a new service for getting customers devices connected to our public cloud but also available to all other clouds. Use Bitbar Testing's large device range for manual and automated testing, but run regression and continuous integration tests on named devices hosted and managed by Bitbar. To get and pick the dedicated devices, please get in contact with [Bitbar sales](mailto:sales@bitbar.com).

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