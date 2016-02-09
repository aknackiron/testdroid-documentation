---
layout: default
title: Moving Appium Test To Testdroid Cloud
webui: <a href="https://cloud.testdroid.com">\<WebUI\></a>
webdriver: <a href="http://appium.testdroid.com">\<WebDriver\></a>
---

To switch from using Appium on localhost to using Appium at
{{site.td_cloud}}, a couple of minor changes in your test scripts need
to be made.

Testdroid samples are available from
[Github](https://github.com/bitbar/testdroid-samples). To continue
environment should be set up as described
[here]({{site.github.url}}/appium/setup/).

The addresses that are needed below are defined as such:

{{ page.webui }}: https://cloud.testdroid.com    
{{ page.webdriver }}: http://appium.testdroid.com 


# Step 0: Upload you app to Testdroid Cloud

The app has to uploaded to Testdroid Cloud via command line using a
POST request.

    POST: \<WebDriver\>/upload  
    Authentication: Basic Auth  
    Multipart: True  
    Parameter Name: any  
    Parameter Value: File (.ipa/.apk)  

You can also just upload the app using curl:

``` 
$ curl -s --user 'user.name@cloudaccount.com:password' -F myAppFile=@"/path/to/app/file.apk" http://appium.testdroid.com/upload
```

or rather using the api key from under *My account* from the cloud:

```
$ curl -s --user <api key>: -F myAppFile=@"/path/to/app/file.apk" http://appium.testdroid.com/upload
```

Note, be sure to save the app identifier received as upload
response. Let's call it \<myAppFile\> in this guide.

# Step 1: Select a device

Log into {{ page.webui }}, select a device you want to run your tests
on, and copy its name (example: iPhone 5c 7.0.4 A1532)

# Step 2: Add Testdroid_ Desired Capabilities in your test script

Add the Testdroid_ Desired Capabilities in your TestScript. You would
now need the \<myAppFile\> and the device name from the two previous
steps to be placed as values against relevant Desired Capability.

Here is a comparison of how the Desired Capabilities part of the
test script should look like before and after this Step.

![Desired capabilities]({{ site.github.url }}/assets/appium/desired-caps-for-cloud.png)

# Step 3: Change the WebDriver address

Point the WebDriver address to {{ page.webdriver }}/wd/hub.


# Step 4: Run the Test Script

After making the above changes in your test script, you can proceed
with running it exactly the same way as you would do with Appium
Server running on your localhost.

# Step 5: Get results from Cloud

Get the screenshots, Appium.log and Logcat (Android) or Trace (iOS)
output from {{ page.webui }}.

