---
layout: default
title: Projects
---


Under **Projects** view users are able to create, remove and manage their
projects.  By clicking '+' button new projects can be created after
the type of project is selected. The types of projects are: Android,
iOS UI Automation, Android UIAutomator, Calabash Android, and Calabash
iOS.

**NOTE!** Appium projects are generated on the fly and automatically
detected by Testdroid Cloud. These projects cannot be created manually
in this view.

![]({{site.github.url}}/assets/user-manuals/projects_projects.png)

On the right hand side, users can create project specific test runs,
reports or share projects with other valid Testdroid Cloud user
accounts.
 
In test run section users can edit, insert tags or delete test
runs. The view also shows the percentage of successful test runs,
success of tests, the status of test run (how many devices have been
finalized the test run), date and time information, as well as
application specific information (e.g. the name of test and
application file).  Create a new test run (multi-page widget) Step #1:
Upload your application

## Create a new test run (multi-page widget)

1. Upload your application

	Click **Choose File** button to locate APK or IPA file from your
  	local harddisk. For further configuration, click *Next* (either
  	on bottom or top of the view).

	![]({{site.github.url}}/assets/user-manuals/projects_choose_file.png)
	

1. Select the test type

   Testdroid Cloud provides a feature called App Crawler that
   automatically crawls through the app and tests its functionality by
   exercising UI components (e.g. button clicks, opening menus,
   changing views). App Crawler automatically handles the screenshot
   taking, log writing and generally it keeps the record of
   application's status.

   When user selects 'File' instead of App Crawler the view asks
   user to locate test script files for the app.

   When proper test method has been selected, click *Next* (either
   on bottom or arrow on top).

   ![]({{site.github.url}}/assets/user-manuals/projects_choose_file_2.png)

1. Select devices for the test run
 
	The view shows all created device groups. User can also create
	a new device group by clicking the left-top icon with a '+'
	button. Device groups are either for Android or iOS. By
	default, Free device group is selected.
 
	**NOTE!** Device groups can include only Android or iOS devices.

	![]({{site.github.url}}/assets/user-manuals/projects_device_groups.png)

1. Advanced options for the test run

   User can specify test run name, tags, scheduling of the test run
   (if tests is desired to be executed simultaneously on all devices,
   one device at a time or on a first available device for test run).

   User can select the language for devices. There is great variety of
   different languages available and all devices will be configured
   with selected language for the test run.

   User can input login credentials for the application. If app
   requires user authentication at the beginning, login and password
   information can be included here.

   User can specify how test cases are used - e.g. from specific
   package or class and then definitely the name in given field.

   User can also specify hooks for finished tests by giving an URL. If
   this option is used, the POST call will be performed when test run
   is finished.

   ![]({{site.github.url}}/assets/user-manuals/projects_advanced_options.png)


   Start the test run by clicking Start button. User will now
   redirected to Test Run view.

## Test run / Overview

User can access **Test Run view** either by starting a test run or
clicking any of older test runs in projects view. This view presents
test run execution information, execution time as well as a summary of
test runs.

A Testdroid Cloud test run starts always with device cleaning
(removing all content from devices, cleaning SD card and rebooting
device), followed by installation and launch of the app and tests.

The first widget in Test Run View shows a summary about device sessions and their success ratio.

![Picture. Test run view summary -widget]({{site.github.url}}/assets/user-manuals/projects_run_overview.png) ![Picture. Test run view devices summary -widget]({{site.github.url}}/assets/user-manuals/projects_run_overview-device.png)

Tests success status

* shows percentage of successful tests
* shows number of passed tests / number of total tests in test run

Overall device execution status

* Finished - No errors, everything went fine
* Finished with failures - finished but some of test cases failed.
* Finished with errors - finished but errors in test execution. This
  is for example application or device crash.

In addition to summary information you can download the application
and test files as well as all log files. You can also access
screenshots comparison views, compare screenshots by devices or
compare screenshots by test steps (for Calabash runs only) from the
Summary widget. Device specific logs are available by going to each
device run.

Test run view details -widget contains summary information for each device.

![Picture. Test run view details -widget]({{site.github.url}}/assets/user-manuals/projects_run_details.png)

* On the top-right of the test run widget, user can filter data shown in
widget. For example, user can filter passed, failed, excluded, and not
executed devices for the widget. 
* More specific error of device execution from test run can be seen when clicking on the info icon on
device line. 
* User can focus on each device run by clicking the device
row. 
* User can also retry the test run for a single device by clicking
the retry button at the and of a device line, or by selecting checkbox
of one or multiple devices. 
* Clicking on the checkbox column title,
user can select also not visible devices for retry.

![Picture. Retry.]({{site.github.url}}/assets/user-manuals/projects_retry_listed.png)

**Note!** Previous test run information for the device will be
  overwritten!

## Screenshot comparison

The **Screenshot Comparison** view makes it easy to compare captured screenshots from every device test run. The **Compare By Test Steps** comparison is available for Calabash and JUnit tests enabling comparison of test steps between devices.
 
Users can select screenshots from dropdown menu that gets automatically shown on each device in the test run. Screenshots can be browsed also with arrow button on the top right-corner of the widget. For full screen mode, user can click 'Full screen button' and for downloading all screenshots 'Download screenshots' button.

![]({{site.github.url}}/assets/user-manuals/projects_run_details_sc_comparision.png)

## Device run details / Test cases
 
After clicking any row on test run view, user is directed to view
generic information about tests is shown. By selecting the name of
test (presented either as green/success or red/failure) the test steps
will be shown. The device run view presents all main information about the run. This is also the place where user is able to download for example logs and videos of the run. The test steps and errors tabs can be enlarged to full screen making it easier to debug test steps and errors.

![]({{site.github.url}}/assets/user-manuals/projects_test_steps.png)

When there are more devices clicking on the "Browse all devices" button allows the user to switch the device under inspection. 

## Device run details / Screenshots
 
The Screenshots view shows all captured screenshots during the
selected test. The number on the right-top corner of each screenshot
indicates the step when screenshot was taken. For example, test run may have 22 steps and each step could include a screenshot. If the step
includes multiple screenshots, those are named as <number of
step>.<sub-number>.  (e.g. 6.1, 6.2).

User can download all captured screenshots by clicking "Download screenshots" on the top right-corner of the widget.

## Device run details / Performance
 
The Performance view provides details of the test run for CPU and
memory usage.  User can click any given step/time to get more specific
information about resource consumption.

![]({{site.github.url}}/assets/user-manuals/projects_run_details_performance.png)

## Device run details / Logs

The log view provides line-by-line information about the test run. It allows showing the different types of log data available from the test run. These include logcat, Appium and Calabash logs. The logs can be searched by browser search or the widget's own search box. For easier debugging the view can be enlarged to full screen.

![]({{site.github.url}}/assets/user-manuals/projects_run_details_logs.png)
 
## AppCrawler

AppCrawler functionality provides easy self-contained option to test mobile application against automated 
test procedure.
Bitbar testing provides solution to run AppCrawler for both Android and iOS environments. 
Solution to achieve valuable tests is that AppCrawler will try to mimic human behavior. In order to achieve reliable tests, AppCrawler will try to mimic human behavior
AppCrawler will try to navigate through application trying to interact with elements contained within.

#Usage

There are two possible ways to use AppCrawler in Bitbar testing:
You can navigate through Projects to look for either new or existing project of type 
Android instrumentation or iOS UI Automation, then  proceed with new Test Run and add desired application and proceed to
next step. On the second step you should select App Crawler option. After selecting the devices on which test should
be performed you can start the test.
Second solution would be to navigate directly to AppCrawler button on menu in the top of the screen.
Upload application project and devices and execute test.
In both cases results of test execution with screenshots will be collected as it would be in regular test execution.

