---
layout: default
title: Bitbar Testing Run In Cloud Plugin
---


Bitbar Run In Cloud Jenkins plugin can be used to launch test runs directly from Jenkins job. It is an open source project [available](https://github.com/jenkinsci/testdroid-run-in-cloud-plugin) on Github.


## Configuration Instructions

To install Run in Cloud (RiC) Plugin navigate to Jenkins main page. From there navigate to: *Manage Jenkins -> Manage plugins -> Available* and search for Testdroid. After plugin installation and restarting Jenkins, plugin can be configured in Jenkins Configuration page. The plugin adds a new build step that can be used in any Jenkins job to launch builds in Bitbar Testing cloud.

## Configure

Open Jenkins main configuration page(*Manage Jenkins -> Configure System*)
in Testdroid Cloud section and fill necessary Bitbar Testing account information. Click *Authorize* button to validate account details.

![]({{site.github.url}}/assets/testdroid-cloud-integration/ric-main-config.png)


## Run In Cloud - Build step

Open existing Jenkins job or create a new one. From job
configuration add a new build step. 

To run tests in Bitbar Testing select a target project, upload a new application
or/and instrumentation package to that project and define file name
in corresponding field. If you need to customize projects settings click "Edit project on Testdroid Cloud website" button and it will open Cloud.

![]({{site.github.url}}/assets/testdroid-cloud-integration/ric-build-step.png)

Annotations can be configured in the following section. [Here is more
information on how to use annotations](using-annotations) to execute subsets of tests.


![]({{site.github.url}}/assets/testdroid-cloud-integration/ric-build-step-2.png)

___

The following fields are only for Android Instrumentation runs:

+ Device group        
+ Device language     
+ Screenshots configuration   
+ Custom test runner  
+ Tests with annotation   
+ Tests without annotation    
+ Use test cases from

___

**Note** 

Calabash Android and iOS:

+ Application  
   
   This field defines the path to .apk or .ipa file (this is relative to job workspace)
   
+ Test 
   
  This field defines the path to .zip file which contains the feature files. 
  See [http://docs.testdroid.com/calabash/creating-calabash-tests/](http://docs.testdroid.com/calabash/creating-calabash-tests/) for more details how to create calabash test zip

___


There are two ways to get notification from Bitbar Testing about finished test runs.
 
### API CALL

Jenkins is polling Bitbar Testing for results. Test results are copied to Jenkins workspace after the tests are finished.

![]({{site.github.url}}/assets/testdroid-cloud-integration/ric-api-call.png)

### HOOK URL

Bitbar Testing sends post message to defined URL when test run is finished. RiC listens the message in default location and downloads results when post message arrives. The listened URL can be changed.

POST message body:

    testRunId=%s&projectId=%s&status=FINISHED

**Note!** This requires HOOK URL to be reachable from Internet ie. Jenkins instance can be reached from Bitbar Testing.

![]({{site.github.url}}/assets/testdroid-cloud-integration/ric-hook-url.png)

