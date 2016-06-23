---
layout: default
title: Testdroid Releases
---


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