---
layout: default
title: Requirements For .IPA
---

In order to run your .IPA on Testdroid Cloud iOS devices, it must be Ad Hoc Distribution version. Follow these steps to build the correct IPA:

1. Select target and click Archive from product menu:
    ![]({{site.github.url}}/assets/appium/ipa-requirements-archive.png)
1. Click Distribute.
    ![]({{site.github.url}}/assets/appium/ipa-requirements-distribute.png)
1. Select option Ad Hoc Deployment.
    ![]({{site.github.url}}/assets/appium/ipa-requirements-adhoc-deployment.png)
1. Select the Provisioning Profile and click Next.
    ![]({{site.github.url}}/assets/appium/ipa-requirements-provisioning-profile.png)
   Your IPA should be now compatible with iOS devices on Testdroid Cloud.  
1. Validate your IPA in Testdroid cloud using an Appcrawler run.
   1. Create an IOS UI Automation project
   1. Upload ipa
   1. Select appcrawler test
   1. Pick the device(s)
   1.  Run