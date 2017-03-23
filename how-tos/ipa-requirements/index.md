---
layout: default
title: Requirements For .IPA
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/how-tos/ipa-requirements/">
<link rel="canonical" href="http://docs.bitbar.com/testing/how-tos/ipa-requirements/"/>
In order to run .IPA-files on Bitbar Testing iOS devices, it must be
Ad Hoc Distribution version. These steps guide to build the correct
IPA:

1. Select target and click Archive from product menu:
    ![]({{site.github.url}}/assets/appium/ipa-requirements-archive.png)
1. Click Distribute.
    ![]({{site.github.url}}/assets/appium/ipa-requirements-distribute.png)
1. Select option Ad Hoc Deployment.
    ![]({{site.github.url}}/assets/appium/ipa-requirements-adhoc-deployment.png)
1. Select the Provisioning Profile and click Next. Your IPA should be now compatible with iOS devices on Bitbar Testing.  
    ![]({{site.github.url}}/assets/appium/ipa-requirements-provisioning-profile.png)
   
1. Validate your IPA in Bitbar Testing cloud using an Appcrawler run:
   1. Create an IOS UI Automation project
   1. Upload ipa
   1. Select appcrawler test
   1. Pick the device(s)
   1.  Run