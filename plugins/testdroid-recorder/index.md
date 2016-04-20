---
layout: default
title: Testdroid Recorder Tutorial
---

## Prerequisites

Use [Eclipse (Luna 4.4)](http://www.eclipse.org/downloads/packages/release/luna/sr2) and make sure you have the [Android SDK tools](http://developer.android.com/sdk/index.html#downloads) and [ADT Plugin](https://dl.google.com/android/ADT-23.0.7.zip).

Testdroid recorder does not work with Android Studio.

## Installation Video

You can see a video of how the installation is done or you can read a tutorial how below.

[![Installation video](https://img.youtube.com/vi/eeTc1loPPo8/0.jpg)](https://www.youtube.com/watch?v=eeTc1loPPo8 "Recorder installation tutorial")
 
## Eclipse IDE

Testdroid Recorder is provided as an Eclipse plugin.
Recorder requires Eclipse 3.6 or greater. If you don't have correct version, you can find it on [http://www.eclipse.org/downloads/packages/release/luna/sr2/](http://www.eclipse.org/downloads/packages/release/luna/sr2). We recommend the Eclipse Classic configuration.


## Android SDK 

You need to have [Android SDK](http://developer.android.com/tools/studio/index.html) installed before installing Testdroid Recorder.
Please, visit [http://developer.android.com/sdk/installing.html](http://developer.android.com/sdk/installing.html) for the comprehensive instructions for downloading and installing the tools.

 
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