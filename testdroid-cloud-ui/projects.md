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

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_projects.png)

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

	![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_choose_file.png)
	

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

   ![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_choose_file_2.png)

1. Select devices for the test run
 
	The view shows all created device groups. User can also create
	a new device group by clicking the left-top icon with a '+'
	button. Device groups are either for Android or iOS. By
	default, Free device group is selected.
 
	**NOTE!** Device groups can include only Android or iOS devices.

	![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_device_groups.png)

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

   ![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_advanced_options.png)


   Start the test run by clicking Start button. User will now
   redirected to Test Run view.

## Test run / Overview

User can access **Test Run view** either by starting a test run or
clicking any of older test runs is dashboard or projects view. In this
view test run execution information, execution time as well as success
of test runs is shown in summary type of perspective.

The Testdroid Cloud test run starts always with device cleaning
(removing all content from devices, cleaning SD card and rebooting
devices), followed by installation and launch of the app and tests.

The first widget in Test Run View is summary.

![Picture. Test run view summary -widget]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_overview.png)

Overall statuses

* Finished - No errors, everything went fine
* Finished with failures - finished but some of test cases failed.
* Finished with errors - finished but errors in test execution. This
  is for example application or device crash.

In addition to summary information you can download the application
and test files as well as as all the log files.  You can also access
Test Case and Screenshots comparison views from the Summary widget.

Test run view details -widget contains summary information for each device.

![Picture. Test run view details -widget]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details.png)

On the top-right of the test run widget, user can filter data shown in
widget. For example, user can filter passed, failed, excluded, and not
executed devices for the widget.  More specific error of test
execution from test run can be seen when mouse is hovered on the top
of red colored error message.  User can focus on each device run by
clicking the device row.  User can open all device runs by clicking
Show all X devices where X indicated the number of used devices in the
test run.  User can also retry the test run for visible devices.

![Picture. Retry.]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_retry_listed.png)

**Note!** Previous test run information for the device will be
  overwritten!
 
## Device run details / Test cases
 
After clicking any row on test run view, user is directed to view
generic information about tests is shown. By selecting the name of
test (presented either as green/success of red/failure) the test steps
will be shown. User can also filter successful test runs by clicking
the eye icon on the top-right corner.

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_test_steps.png)

## Device run details / Screenshots
 
The Screenshots view shows all captured screenshots during the
selected test. The number on the right-top corner of each screenshot
indicates the step when screenshot was taken. For example, test run
may have 22 steps. Each step will include a screenshot and if the step
includes multiple screenshots, those are named as <number of
step>.<sub-number>.  (e.g. 6.1, 6.2).

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details_screenshots.png)

User can download all captured screenshots by clicking Download
screenshots on the top right-corner of the widget.

## Device run details / Performance
 
The Performance view provides details of the test run for CPU and
memory usage.  User can click any given step/time to get more specific
information about resource consumption.

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details_performance.png)

The performance log can be also downloaded by clicking the Download
performance log button on the top right-corner of the widget.


## Device run details / Logs

The log view provides line-by-line information about the test run. It
can be configured with types of information user wants to investigate
and show in Logs view. Available configurations are: Info, Debug,
Warning, Error, Assert and Verbose.

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details_logs.png)

## Device run details / Device files
 
If the test or device run includes additional files those can be
reviewed and download from this view. For example, if test run
generates additional logs, users can get those files through this view
after the test run is completed.

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details_device_files.png)

All additional files can be downloaded by clicking Download all files
button on the top right-corner of the widget.
 
## Screenshot comparison

The **Screenshot Comparison** view makes it easy to compare captured
screenshots from every test run.
 
Users can select screenshots from dropdown menu that gets
automatically shown on each device in the test run. Screenshots can be
browsed also with arrow button on the top right-corner of the
widget. For full-screen mode, user can click Full screen button and
for downloading all screenshot Download screenshots button.

![]({{site.baseurl}}/assets/testdroid-cloud-ui/projects_run_details_sc_comparision.png)
