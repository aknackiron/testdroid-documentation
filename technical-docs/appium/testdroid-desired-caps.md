---
layout: default
title: Testdroid Desired Capabilities
---

1. **testdroid_username**  
   _Mandatory_: yes  
   _Description_: The email registered at Testdroid Cloud  
   _Example_: username@domain.com  
 
1. **testdroid_password**  
   _Mandatory_: yes  
   _Description_: The password for your Testdroid Cloud account  

1. **testdroid_apiKey**  
   _Mandatory_: no  
   _Description_: You can use API key to authentication instead of user name and password. This is available in "My Accounts" -view.  
   _Default_: none  
   _Example_: e4f86ac5b94e39810f33ad4ab71850a6  

1. **testdroid_target**  
   _Mandatory_: yes  
   _Description_: The target test type. Use one of the following value. android and ios are for native apps, selendroid when testing a hybrid app and chrome and safari for web testing using the respective web browsers.  
   _Values_: android | selendroid | ios | chrome | safari  
 
1. **testdroid_project**  
   _Mandatory_: yes  
   _Description_: The project name that will be displayed on Web UI. See [FAQ]({{site.github.url}}/appium/faq.html) for more details.  
   _Example_: Appium iOS Project  

1. **testdroid_description**  
  _Mandatory_: no  
  _Description_: Project description.  
  _Example_: "My first Appium project at Testdroid Cloud"
 
1. **testdroid_testrun**  
  _Mandatory_: yes  
  _Description_: The name given to each Test Run under a Project. See [FAQ]({{site.github.url}}/appium/faq.html) for more details.  
  _Example_: Test Run 1

1. **testdroid_device**  
  _Mandatory_: yes  
  _Description_: The device name that uniquely identifies a device on Testdroid Cloud. (Copy the name from Web UI, as shown in the snapshot). Alternatively you can use a script to query for free devices (eg. a [python example](https://github.com/bitbar/testdroid-samples/blob/master/appium/sample-scripts/python/device_finder.py)).  
  _Example_: iPhone 5c 7.0.4 A1532

      ![Browse devices in Cloud]({{site.github.url}}/assets/browse-devices.png)

1. **testdroid_app**  
  _Mandatory_: yes - when not using "browserName" capability for browser automation  
  _Description_: Specifies the Application file (.app/.apk) that would be installed on the device. The App can be given as a public URL, or the SessionId received on uploading the application to Testdroid Cloud. For an example on uploading your app to Testdroid Cloud see eg. this [Python example](https://github.com/bitbar/testdroid-samples/blob/master/appium/sample-scripts/python/upload.py).  
  _Example_: http://www.example.com/MyApp.ipa  
  _Example_: "abcdefg-1234-5678-abcd-111122223333/BitbarIOSSample.ipa"
  _Example_: "latest" - This option will use the latest apk/ipa uploaded to the selected project. Upload can be done either from UI or API.  
 
1. **testdroid_locale**  
  _Mandatory_: no  
  _Description_: Device language, identified by java.util.locale [Locale ID](http://www.oracle.com/technetwork/java/javase/javase7locales-334809.html)  
  _Default_: EN  
  _Example_: fi_FI  

1. **testdroid_junitWaitTime**  
  _Mandatory_: no  
  _Description_: The time Cloud will wait anticipating a JUnit XML upload after receiving driver.quit()  
  _Default_: 0
  _Legal_ range: 0~300
  _Example_: 120

1. **testdroid_testrunId**  
  _Scope_: Private Cloud & Enterprise only  
  _Mandatory_: no
  _Description_: You can add a new Appium run as a new device run to an existing testrun by providing a testrunid. Note! New testrun is created, if there's already a run for similar device.
  _Default_: none
  _Example_: 12345678

1. **testdroid_testTimeout**  
  _Mandatory_: no  
  _Description_: The timeout for whole test execution (in seconds). It's configurable only, if you have active plan/subscription  
  _Default_: 600
  _Example_: 1200
 

***Note!*** In iOS case BundleID -capability is mandatory.  

The reason is the difference in mechanism to install ipa in Testdroid
compared to local case. Appium framework maps bundle ID automatically
in case of local run/installation. In cloud case we must notify Appium
framework about the correct bundle ID.
