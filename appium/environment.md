---
layout: default
title: App & Environment Requirements
---


## App & Environment Requirements

<h1>iOS App Requirements</h1>

In order to run your .IPA on Testdroid Cloud iOS devices, it must be Ad Hoc Distribution version. Follow these steps to build the correct IPA:

1. Select target and click Archive from product menu:

![]({{site.baseurl}}/assets/appium/ipa-requirements-archive.png)

2. Click Distribute.

![]({{site.baseurl}}/assets/appium/ipa-requirements-distribute.png)

3. Select option Ad Hoc Deployment.

![]({{site.baseurl}}/assets/appium/ipa-requirements-adhoc-deployment.png)

4. Select the Provisioning Profile and click Next.

![]({{site.baseurl}}/assets/appium/ipa-requirements-provisioning-profile.png)

Your IPA should be now compatible with iOS devices on Testdroid Cloud. In order to ensure everything is properly set up and to validata that your IPA is properly built, you can do as follows:

1. Login to Testdroid Cloud
2. Create an iOS UI Automation project
3. Upload your IPA file and select 'App Crawler'
4. Pick any of those free iOS devices and start a test run.

Now, Testdroid Cloud will instantly notify if the test run cannot be started due wrongly built IPA.

<h1>Appium Doctor</h1>

To verify that all of Appium's dependencies are met you can use appium-doctor. Run appium-doctor and supply the --ios or --android flags to verify that all of the dependencies are set up correctly. If running from source, you may have to use ./bin/appium-doctor.js or node bin/appium-doctor.js.

![]({{site.baseurl}}/assets/appium/appium-behind-the-scene.png)




