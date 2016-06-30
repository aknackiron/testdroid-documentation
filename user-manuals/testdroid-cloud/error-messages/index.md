---
layout: default
title: Typical Error Messages in Testdroid Cloud
---

## Appium Errors				

| Phase                | Error Message  | Description     | Resolution  |
| :------------------- | :----------------- | :------------- | : --------------|
|Execution             | Failed to start an Appium session, err was: Error: Bad app: /Path/to/your/application.app | User has defined "app" desired capability, which points to his local file system. This will not work on Testdroid Appium tests | Remove/Comment "app" desired capability from test script.


## Upload Errors

| Phase                | Error Message      | Description  |
| :------------------- | :----------------- | :------------- |
| Upload apk           | File too big       | The apk file is too big |
| Upload zip data file | File too big       | The zip data file is too big |
| Upload test apk      | File too big       | The test apk file is too big |

## Excecution Errors

Phase       | Error Message  | Description                                               | Resolution                
:-----      | :------------- | :-------------------------------------------------------- | : -------------------------------------------------
N/A         | Not executed.      | Run was manually cancelled by an user/admin.    | Contact admin 
Execution   | Timeout for running tests exceeded. | This might be a popup or another application preventing test execution. | Take a look at the logs for details.
Execution   | Testrun failed to complete. Expected 14 tests received 0. | Test run execution was started for 14 tests, but there's not results for all or some of the tests. This is typically, because application crashed before all the tests were executed. 
           | Device related problem. Typically related to some low-end devices. |   
           | Unable to find instrumentation info for: ComponentInfo( com.example.android.apis.test/android.<br />test.Instrumentation.Testrunner) | 
           | Instrumentation run failed due to "process crashed" | Typically device or instrumentation related problem. Process crashed because of some unknown reason. The best way to find this reason is to check the device logcat and find the moment when it happens. 
           | Instrumentation run failed due to "android.content.ActivityNotFoundException" | An activity expected by the test script was not found. | Take a look at the logs and look for what activity was not found. 
           | Instrumentation run failed due to "process crashed" | Application has crashed |  
           | Instrumentation run failed due to "android.content.ActivityNotFoundException" | Test didn't find activity. 
           | Timeout for running tests exceeded. | Test execution took too long and the run was killed by Testdroid. 
           | Testrun failed to complete. Expected 14 tests received 0. | Test run execution was started for 14 tests, but there's results for all or some of the tests. This is typically, because application crashed before all the tests were executed. 
Execution  | Instrumentation timed out after 600 seconds | | 
           | Oops, something went wrong                  | Random error caused by Testdroid. | Retry run. Contact support, if this does not help.            
           | Instrumentation run failed due to 'java.lang.NullPointerException' | Application has a bug | Inspect the stacktrace, find the error and fix it. 
           | Instrumentation run failed due to 'java.lang.ClassNotFoundException' | Wrongly build .apk  | Rebuild your application and retry.                
Execution  | Instrumentation run failed due to "process crashed" | Typically device or instrumentation related problem. Process crashed because of some unknown reason. | Best way to find this reason is to check the device logcat and find the moment when it happens. 
Execution  | Instrumentation run failed due to "android.content.ActivityNotFoundException" | An activity expected by the test script was not found. | Take a look at the logs and look for what activity was not found. 
           | Not executed. | Run was manually cancelled by an user/admin. | 
           | Excluded.     | Device run was not executed because of API level requirements or "first available device only" scheduling mode was selected during creating the test run. In this case test run is executed on the first available device, others are excluded. | 
           | Timeout for running tests exceeded. | This might be a popup or another application preventing test execution. | Take a look at the logs for details. 
           | Testrun failed to complete. Expected 14 tests received 0. | | 
Install    | Server build has failed "INSTALL_FAILED_INSUFFICIENT_STORAGE" | No space for app install in device storage | Please contact *support AT bitbar.com*
Install    | Server build has failed [Failure [INSTALL_FAILED_ALREADY_EXISTS]] | For some reason the app already exists on device and reinstallation fails | Please contact *support AT bitbar.com*
Install    | Server build has failed [Failure [INSTALL_FAILED_UID_CHANGED]] | Android Error. According to [Stackoverflow](http://stackoverflow.com/questions/16277422/android-install-failed-uid-changed) /data/data/<USER_PACKAGE_NAME> has some trash files and the installation fails. |  
Launch     | Unable to find instrumentation info for: ComponentInfo( com.example.android.apis.test/android.<br />test.Instrumentation.Testrunner) | Testrunner didn't find tests file | 
