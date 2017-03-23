---
layout: default
title: Typical Error Messages in Bitbar Testing
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/user-manuals/error-messages/">
<link rel="canonical" href="http://docs.bitbar.com/testing/user-manuals/error-messages/"/>
## Appium Errors				

| Phase                | Error Message  | Description     | Resolution  |
| :------------------- | :----------------- | :------------- | : --------------|
|Execution             | Failed to start an Appium session, err was: Error: Bad app: /Path/to/your/application.app | User has defined "app" desired capability, which points to his local file system. This will not work on Bitbar Testing Appium tests | Remove/Comment "app" desired capability from test script.


## Upload Errors

| Phase                | Error Message      | Description  |
| :------------------- | :----------------- | :------------- |
| Upload apk           | File too big       | The apk file is too big |
| Upload zip data file | File too big       | The zip data file is too big |
| Upload test apk      | File too big       | The test apk file is too big |

## Excecution Errors

Phase       | Error Message  | Description                                               | Resolution                
:-----      | :------------- | :-------------------------------------------------------- | : -------------------------------------------------
N/A         | Not executed.      | Run was manually cancelled by an user/admin    | Contact admin 
Execution   | Timeout for running tests exceeded. | This might be a popup or another application preventing test execution | Take a look at the logs for details
Execution   | Testrun failed to complete. Expected 14 tests received 0 | Test run execution was started for 14 tests, but there's not results for all or some of the tests. This is typically, because application crashed before all the tests were executed. 
           | Instrumentation run failed due to "process crashed" | Typically device or instrumentation related problem. Process crashed because of some unknown reason. The best way to find this reason is to check the device logcat and find the moment when it happens
           | Instrumentation run failed due to "android.content.ActivityNotFoundException" | An activity expected by the test script was not found. | Take a look at the logs and look for which activity was not found
           | Instrumentation run failed due to "process crashed" | Application has crashed |  
           | Timeout for running tests exceeded. | Test execution took too long and the run was killed by Bitbar Testing
Execution  | Instrumentation timed out after 600 seconds | | 
           | Instrumentation run failed due to 'java.lang.NullPointerException' | This usually means some variable or object in the test was unexpectedly null | Inspect the stacktrace, find the error and fix it
           | Instrumentation run failed due to 'java.lang.ClassNotFoundException' | Bad `.apk` build  | Rebuild your application and retry
           | Not executed. | Run was manually cancelled by an user/admin. | 
           | Excluded     | Device run was not executed because of API level requirements or "first available device only" scheduling mode was selected during creating the test run. In this case test run is executed on the first available device, others are excluded | 
           | Timeout for running tests exceeded | This might be a popup or another application preventing test execution. | Take a look at the logs for details
Install    | Server build has failed "INSTALL_FAILED_INSUFFICIENT_STORAGE" | No space for app install in device storage | Please contact *support AT bitbar.com*
Install    | Server build has failed [Failure [INSTALL_FAILED_ALREADY_EXISTS]] | For some reason the app already exists on device and reinstallation fails | Please contact *support AT bitbar.com*
Install    | Server build has failed [Failure [INSTALL_FAILED_UID_CHANGED]] | Android Error. According to [Stackoverflow](http://stackoverflow.com/questions/16277422/android-install-failed-uid-changed) /data/data/<USER_PACKAGE_NAME> has some trash files and the installation fails. Please contact *support AT bitbar.com* | 
Launch     | Unable to find instrumentation info for: ComponentInfo( com.example.android.apis.test/android.<br />test.Instrumentation.Testrunner) | Testrunner didn't find tests file | 

## Bitbar Testing Errors

Phase                    | Error Message                               | Description                | Resolution
:---------               | :------------------------------------------ | :------------------------- | :------------------------------------------------
Login to Bitbar Testing | Oops, something went wrong                  | Error message received after login to Bitbar Testing | Try again and verify you are using correct credentials. It's also possible Cloud is under maintenance. Please check [Cloud status](http://bitbar.com/testdroid-status)
