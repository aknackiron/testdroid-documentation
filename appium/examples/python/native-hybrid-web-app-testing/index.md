---
layout: default
title: Appium Python App Testing
---


So far you should have the necessary environment set up. The
prerequisite documentation for running Appium tests with Python can be
found at [Appium
Prerequisite]({{ site.github.url }}/appium/setup).

You'll find information here how to run your Appium tests against your
native, hybrid or web-applications. Most of the documentation here
below refers to our
[Github](https://github.com/bitbar/testdroid-samples) repos that
contain step by step guides and sample scripts to get you started.

# Getting Started

Clone to your local machine the sample Python scripts from our repository.

```
$ git clone https://github.com/bitbar/testdroid-samples
```

You now have all necessary examples for starting testing of native,
hybrid or web applications. The example scripts are found under:

```
$ cd appium/sample-scripts/python/
```

The content of the files and how to use them is described in the
Github repo page itself. Let's continue this guide
[there](https://github.com/bitbar/testdroid-samples).

# [Examples on Github](https://github.com/bitbar/testdroid-samples)

Most examples for native and hybrid app testing are described in the
sample scripts repo page.

# Example: Testing Mobile Website

If you cloned the sample git repository, find the sample Appium test
script for mobile web testing with Chrome browser:
*testdroid_chrome.py*.

Open the test script *testdroid_chrome.py* in your preferred text
editor. Set the *screenshotDir* path to where you want screenshots to
be saved on your machine. Also update your credentials
*testdroid_username* and *testdroid_password* in the desired
capabilities.

Details on all testdroid_ desired capabilities can be [found
here]({{site.github.url}}/appium/testdroid-desired-caps), but you
can use default values for now.

## Run the TestScript

```
$ python testdroid_chrome.py
```

## Get results from Testdroid Cloud
 
The screenshots are available locally on your machine inside the
directory you specified in Step 1.  Log into [Testdroid
Cloud](https://cloud.testdroid.com) and navigate to project name
defined in *testdroid_project* desired capability in
*testdroid_chrome.py* to get the following log files.

1. Appium server log
1. Logcat / Instruments log
 
## Extending sample TestScript

Using the sample script as a base, you can extend the tests for your
own website.  In the Testscript find the line like:

```
elem = driver.find_element_by_xpath('//*[@id="xxx"]')
```

This is the command that tries to find an element on the web page. We
are finding elements referring them with their XPath. You are free to
use [other
methods](http://selenium-python.readthedocs.org/en/latest/locating-elements.html)
supported by Appium if you prefer.
