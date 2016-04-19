---
layout: default
title: Testdroid Recorder Tutorial
---

## Prerequisites

You can use your own installed Eclipse just make sure you have the Android SDK and ADT Plugin.
Another way is to just download ADT Bundle which has Eclipse with almost everything you need.  You can download the ADT Bundle here: http://developer.android.com/sdk/index.html

## Installation Video

You can see a video of how the installation is done or you can read a tutorial how below.

[![Installation video](https://img.youtube.com/vi/eeTc1loPPo8/0.jpg)](https://www.youtube.com/watch?v=eeTc1loPPo8 "Recorder installation tutorial")
 
## Eclipse IDE

Testdroid Recorder is provided as an Eclipse plugin.
Recorder requires Eclipse 3.6 or greater. If you don't have correct version, you can find it on [http://www.eclipse.org/downloads/](http://www.eclipse.org/downloads/). We recommend the Eclipse Classic configuration.


## Android SDK and ADT Plugin for Eclipse

You need to have Android SDK and ADT Plugin for Eclipse installed before installing Testdroid Recorder.
Please, visit [http://developer.android.com/sdk/installing.html](http://developer.android.com/sdk/installing.html) for the comprehensive instructions for downloading and installing both of the tools.

## ADT Bundle

ADT Bundle provides everything, what you need to install Testdroid Recorder. You can download it from: [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html).
 
## Installation

The easiest way to install Testdroid Recorder is by using the Update Manager feature in Eclipse.
Start Eclipse and go to Help -> Install New Software...
Click Add... button next to field asking you a site to work with.
Fill in "Testdroid plugin" for the Name
For the Location provide URL to Testdroid repository: http://www.testdroid.com/updates/

If you install it inside Eclipse from ADT Bundle, be sure to uncheck "Contact all update sites during install to find required software" as on screen below.
 
![]({{ url.github.sites }}/assets/plugins/testdroid-recorder/install.png)


If you get a security warning telling you that the authenticity of the software cannot be established, click OK.
 
![]({{ url.github.sites }}/assets/plugins/testdroid-recorder/security_warning.png)
 
Select the box next to Testdroid and click Next.
You will have to wait for a moment as Eclipse calculates requirements and dependencies. Click Next.
Click Next on Installation details - the list of the tools to be downloaded.
Read and accept the license agreement and click Finish. Eclipse starts to install the software.
Celebrate.