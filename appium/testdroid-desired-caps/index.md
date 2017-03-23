---
layout: default
title: Desired Capabilities
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/testdroid-desired-caps/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/testdroid-desired-caps/"/>
## Desired Capabilities

Desired capabilities are a set of keys and values sent to the Appium server to tell the server what kind of automation session should be started. There are also various capabilities to modify the behavior of the server during automation. For example the platformName capability can be set to 'iOS' to tell Appium an iOS session is needed, rather than an Android one. Or the safariAllowPopups capability can be set to true in order to ensure that, during a Safari automation session, JavaScript is allowed to open up new windows. 

Appium is very similar to Selenium. An Appium test is very similar as a Selenium test: Both use the same WebDriver, and DesiredCapabilities is used the same way. Configuring an application to run on Appium has a lot of similarities to Selenium — for example, those DesiredCapabilities. 

## Bitbar Testing Desired Capabilities

In order to take advantage of Bitbar Testing infrastructure, devices and testing capabilities, additional Desired Capabilities have been introduced. When running your Appium tests from client-side some of these desired capabilities are mandatory and some not:

### testdroid_username
```
Mandatory: yes
Description: The email registered at Bitbar Testing
Example: username@domain.com
Java: capabilities.SetCapability("testdroid_testTimeout", 1200);
```

### testdroid_password
```
Mandatory: yes
Description: The password for your Bitbar Testing account
```

### testdroid_target
```
Mandatory: yes
Description: The target test type. Use one of the following value. 'android' and 'ios' are for native apps, 'selendroid' when testing a hybrid app and 'chrome' and 'safari' for web testing using the respective web browsers. 'selendroid' is also needed for older devices with API strictly lower than 17.
Values: android | selendroid | ios | chrome | safari
```

### testdroid_project
```
Mandatory: yes
Description: The project name that will be displayed on Web UI. See FAQs for more details.
Example: Appium iOS Project
```

### testdroid_description
```
Mandatory: no
Description: Project description.
Example: "My first Appium project at Bitbar Testing cloud"
```

### testdroid_testrun
```
Mandatory: yes
Description: The name given to each Test Run under a Project. See FAQs for more details.
Example: Test Run 1
```

### testdroid_device
```
Mandatory: yes
Description: The device name that uniquely identifies a device on Bitbar Testing cloud. (Copy the name from Web UI, as shown in the snapshot). Alternatively you can use a script to query for free devices (eg. a python example)
Example: iPhone 5c 7.0.4 A1532
```

### testdroid_app
```
Mandatory: yes - when not using "browserName" capability for browser automation
Description: Specifies the Application file (.app/.apk) that would be installed on the device. The App can be given as a public URL, or the SessionId received on uploading the application to Bitbar Testing cloud. For an example on uploading App to Cloud see section this Python example.
Example: http://www.example.com/MyApp.ipa
Example: "abcdefg-1234-5678-abcd-111122223333/BitbarIOSSample.ipa"
Example: "latest" - This option will use the latest apk/ipa uploaded to the selected project. Upload can be done either from UI or API.
```

### testdroid_locale
```
Mandatory: no
Description: Device language, identified by java.util.locale Locale ID
Default: EN
Example: fi_FI
```

### testdroid_junitWaitTime
```
Mandatory: no
Description: The time Cloud will wait anticipating a JUnit XML upload after receiving driver.quit()
Default: 0
Legal range: 0~300
Example: 120
```

### testdroid_testTimeout
```
Mandatory: no
Description: The timeout for whole test execution (in seconds). It's configurable only, if you have active plan/subscription
Default: 600
Example: 1200
```

### testdroid_apiKey
```
Mandatory: no
Description: You can use API key to authentication instead of user name and password. This is available in "My Accounts" -view.
Default: none
Example: e4f86ac5b94e39810f33ad4ab71850a6
```

### testdroid_testrunId
```
Scope: Private Cloud & Enterprise only
Mandatory: no
Description: You can add a new Appium run as a new device run to an existing testrun by providing a testrunid. Note! New testrun is created, if there's already a run for similar device.
Default: none
Example: 12345678
```

### testdroid_forceRetryDeviceModel
```
Scope: Private Cloud & Enterprise only
Mandatory: no
Description: This is used with testdroid_testrunId -capability. Bitbar Testing will replace the device run data of an existing device run, if one for the same device model is found.
Default: false
Example: true
```

### testdroid_findDevice
```
Scope: Public, Private and Enterprise
Mandatory: no
Description: This can be used to turn off Appium client's feature of finding a close match to request device. This allows the requested device name to not be a perfect match but Appium client will search for a similar device.
Default: true
Example: false
```

### bundleId
```
Mandatory: Yes (for all iOS runs), No (for any Android runs)
Description: The reason is the difference in mechanism to install ipa in Bitbar Testing compared to local case. Appium framework maps bundle ID automatically in case of local run/installation. In cloud case we must notify Appium framework about the correct bundle ID.
Example: desired.bundleId = 'com.bitbar.testdroid.BitbarIOSSample';</pre>
```

Some desired capabilities can be used as environment variables. For example, username and password can be fetched from your local environment and don't need to be replicated in the test script:

```
String testdroid_username = env.get("TESTDROID_USERNAME");
String testdroid_password = env.get("TESTDROID_PASSWORD");
```

See the [Appium desired capabilities documentation](http://appium.io/slate/en/master/?ruby#appium-server-capabilities) for the complete list of capabilities available for Appium.




