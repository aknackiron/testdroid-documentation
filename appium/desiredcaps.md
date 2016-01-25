---
layout: default
title: Desired Capabilities
---


## Desired Capabilities

Desired capabilities are a set of keys and values sent to the Appium server to tell the server what kind of automation session should be starting up. There are also various capabilities which can modify the behavior of the server during automation. For example, we might set the platformName capability to iOS to tell Appium that we want an iOS session, rather than an Android one. Or we might set the safariAllowPopups capability to true in order to ensure that, during a Safari automation session, we’re allowed to use JavaScript to open up new windows. 

If you are familiar with Selenium, then you’ve got Appium covered. An Appium test is pretty much the same as a Selenium test: They use the same WebDriver, and DesiredCapabilities is used the same way. Configuring an application to run on Appium has a lot of similarities to Selenium — for example, those DesiredCapabilities. We’ll configure a sample test later in this article.

<h1>Testdroid Desired Capabilities</h1>

In order to take advantage of Testdroid infrastructure, devices and testing capabilities, we've created some Testdroid Desired Capabilities. When running your Appium tests from client-side some of these desired capabilities are mandatory and some are additional ones:

<pre>
<strong>“testdroid_username”</strong>
Mandatory: yes
Description: The email registered at Testdroid Cloud
Example: username@domain.com
Java: capabilities.SetCapability("testdroid_testTimeout", 1200);

<strong>“testdroid_password”</strong>
Mandatory: yes
Description: The password for your Testdroid Cloud account

<strong>“testdroid_target”</strong>
Mandatory: yes
Description: The target test type. Use one of the following value. android and ios are for native apps, selendroid when testing a hybrid app and chrome and safari for web testing using the respective web browsers.
Values: android | selendroid | ios | chrome | safari

<strong>“testdroid_project”</strong>
Mandatory: yes
Description: The project name that will be displayed on Web UI. See FAQs for more details.
Example: Appium iOS Project

<strong>“testdroid_description”</strong>
Mandatory: no
Description: Project description.
Example: "My first Appium project at Testdroid Cloud"

<strong>“testdroid_testrun”</strong>
Mandatory: yes
Description: The name given to each Test Run under a Project. See FAQs for more details.
Example: Test Run 1

<strong>“testdroid_device”</strong>
Mandatory: yes
Description: The device name that uniquely identifies a device on Testdroid Cloud. (Copy the name from Web UI, as shown in the snapshot). Alternatively you can use a script to query for free devices (eg. a python example)
Example: iPhone 5c 7.0.4 A1532

<strong>“testdroid_app”</strong>
Mandatory: yes - when not using "browserName" capability for browser automation
Description: Specifies the Application file (.app/.apk) that would be installed on the device. The App can be given as a public URL, or the SessionId received on uploading the application to Testdroid Cloud. For an example on uploading App to Cloud see section this Python example.
Example: http://www.example.com/MyApp.ipa
Example: "abcdefg-1234-5678-abcd-111122223333/BitbarIOSSample.ipa"
Example: "latest" - This option will use the latest apk/ipa uploaded to the selected project. Upload can be done either from UI or API.

<strong>“testdroid_locale”</strong>
Mandatory: no
Description: Device language, identified by java.util.locale Locale ID
Default: EN
Example: fi_FI

<strong>“testdroid_junitWaitTime”</strong>
Mandatory: no
Description: The time Cloud will wait anticipating a JUnit XML upload after receiving driver.quit()
Default: 0
Legal range: 0~300
Example: 120

<strong>“testdroid_testTimeout”</strong>
Mandatory: no
Description: The timeout for whole test execution (in seconds). It's configurable only, if you have active plan/subscription
Default: 600
Example: 1200

<strong>“testdroid_apiKey”</strong>
Mandatory: no
Description: You can use API key to authentication instead of user name and password. This is available in "My Accounts" -view.
Default: none
Example: e4f86ac5b94e39810f33ad4ab71850a6

<strong>“testdroid_testrunId”</strong>
Scope: Private Cloud & Enterprise only
Mandatory: no
Description: You can add a new Appium run as a new device run to an existing testrun by providing a testrunid. Note! New testrun is created, if there's already a run for similar device.
Default: none
Example: 12345678

<strong>“testdroid_forceRetryDeviceModel”</strong>
Scope: Private Cloud & Enterprise only
Mandatory: no
Description: This is used with testdroid_testrunId -capability. Testdroid will replace the device run data of an existing device run, if one for the same device model is found.
Default: false
Example: true

<strong>bundleId</strong>
Mandatory: Yes (for all iOS runs), No (for any Android runs)
Description: The reason is the difference in mechanism to install ipa in Testdroid compared to local case. Appium framework maps bundle ID automatically in case of local run/installation. In cloud case we must notify Appium framework about the correct bundle ID.
Example: desired.bundleId = 'com.bitbar.testdroid.BitbarIOSSample';</pre>

You can also use some desired capabilities as environment variables. For example, username and password can be fetched from your local environment and doesn't need to be replicated with the test script:

<pre>String testdroid_username = env.get("TESTDROID_USERNAME");
String testdroid_password = env.get("TESTDROID_PASSWORD");</pre>

See the [Desired Capabilities documentation](http://appium.io/slate/en/master/?ruby#appium-server-capabilities) for the complete list of capabilities available for Appium.




