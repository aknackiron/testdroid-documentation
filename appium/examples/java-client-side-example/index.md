---
layout: default
title: Java Client Side Example
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/examples/java-client-side-example/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/examples/java-client-side-example/"/>
For a guide on how to get started with remote Appium testing using Java, check out [our
sample](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java) on Github.

Clone the [Appium Sample](https://github.com/bitbar/testdroid-samples) repository to local machine. It contains sample apps for iOS and Android (in apps/builds/-directory) and sample tests in various languages and frameworks. Samples for Java Appium are located in `appium/sample-scripts/java`.

    $ git clone https://github.com/bitbar/testdroid-samples
    $ cd testdroid-samples/appium/sample-scripts/java


## Setup

The setup needs Java and Maven to be installed. Additionally the user's API key and the app under test are required. 

  * Java, can be installed from [https://java.com/en/download/](https://java.com/en/download/) and
  * Maven, can be installed from [http://maven.apache.org/](http://maven.apache.org/)
  * User's API key can be found from Bitbar Testing cloud, under "My account" under the user avatar at the top right corner.

    ![]({{site.github.url}}/assets/appium/examples/my-account.png)

    ![]({{site.github.url}}/assets/appium/examples/api-key.png)

  * Sample applications (iOS and Android) are located in current repository at apps/builds/.

### Starting Andoid Test

In directory `testdroid-samples/appium/sample-scripts/java`, on the command line call the following command. Replace <you_testdroid_apiKey> with the key copied from under My account.

    mvn clean test \
    -Dtest=AndroidAppiumExampleTest \
    -DexecutionType=clientside \
    -DapiKey=<your_testdroid_apiKey> \
    -DapplicationPath=../../../apps/builds/BitbarSampleApp.apk

If the application has already been uploaded earlier (previous test run), then the `applicationPath` can be omitted. 

### Starting iOS Test

Start iOS test with the following command from `testdroid-samples/appium/sample-scripts/java`, by replacing <your_testdroid_apiKey> with key copied from under My account previously.

    mvn clean test \
    -Dtest=IosAppiumExampleTest \
    -DexecutionType=clientside \
    -DapiKey=<your_testdroid_apiKey> \
    -DapplicationPath=../../../apps/builds//BitbarIOSSample.ipa


### Example Output

Running the above commands will print output similar to the following..

        [INFO] Scanning for projects...
        [INFO]
        [INFO] ------------------------------------------------------------------------
        [INFO] Building SampleAppiumJava 2.0
        [INFO] ------------------------------------------------------------------------
        [INFO]
        ...
        ------------------------------------------------------
        T E S T S
        -------------------------------------------------------
        Running com.testdroid.appium.android.sample.AndroidAppiumExampleTest
        22:27:24.179 [main] DEBUG com.testdroid.appium.BaseTest - Setting desiredCapabilities defined in desiredCapabilities.android.clientside.properties
        ...
        Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

        [INFO] ------------------------------------------------------------------------
        [INFO] BUILD SUCCESS
        [INFO] ------------------------------------------------------------------------
        [INFO] Total time: 02:36 min
        [INFO] Finished at: 2016-12-14T22:29:57+02:00
        [INFO] Final Memory: 24M/315M
        [INFO] ------------------------------------------------------------------------
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/examples/java-client-side-example/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/examples/java-client-side-example/"/>
## Checking Results in Cloud

After test executions has finished, the test results are available in Bitbar Testing cloud for later review or checking of captured screenshots.

![]({{site.github.url}}/assets/appium/examples/client-side-results.png)

## What Next

After the above cloud setup is working. Running Appium tests as client side can be error prone. The requested device might not be available at the time of running the test or there might be some network error during the test execution. A more robust approach is to run Appium in the cloud as [server side]({{site.github.url}}/appium/examples/server-side-appium-in-tc-java/). With this approach it is possible to queue the test run and run the same test on multiple devices.

