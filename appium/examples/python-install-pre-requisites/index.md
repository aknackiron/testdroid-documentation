---
layout: default
title: Appium With Python
---

# Prerequisites

You need to have a PC or MAC machine with Linux, Windows or OSX installed.

## Setting up your machine

Testdroid Appium sample TestScripts are available in Python, Java, C#
and Ruby. Appium tests are executed remotely from user's own machine,
and the tests are executed on Testdroid Cloud in real time. Below is
explained how to run your Python scripts locally from your machine.

## Install Python

Ensure you have Python 2.7.x or later is installed (should be pre-installed on OS X)​.

```
$ python --version​
```

### Linux

You can Install Python on Linux as follows

```
$ sudo apt-get install python2.7
```

### Windows

To install Python on Windows, download and run setup from python.org
download centre To add Python environment variables, go to System
properties > Advanced System Settings > Environment Variables > System
Variables > Edit 'Path', and insert
“C:\Python27\;C:\Python27\Scripts\” in the end. (Assuming you
installed Python at default location) Make sure to restart the command
prompt for new environment variables to come in effect.

## Install pip

Check if Python's package installer 'pip' is already installed.

```
$ pip --version
```

### OSX
```
$ curl https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py > get-pip.py
$ sudo python get-pip.py
$ rm get-pip.py
```

### Linux

```
$ sudo apt-get install python-pip
```

### Windows
```
$ curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py > get-pip.py
$ python get-pip.py
$ del get-pip.py
```

## Install Python Client for Appium

```
$ pip install Appium-Python-Client
```

## Install Git

Most of the examples for starting testing using Testdroid are located
in our Github repositories. To make most out of the existing samples
you should have Git installed.
[Here's](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
a very good guide on how to install Git on popular OSes. Below is the
abbreviated version of the installation procedures.

### OSX

Download the latest git command line tool from
[http://git-scm.com/download/mac](http://git-scm.com/download/mac) install it using normal Mac
installation procedure.

### Linux (Debian based distros)

```
$ sudo apt-get install git
```

### ​Windows

The easiest and most straight forward way is to install the Github
Windows application from http://windows.github.com.  Next check out
our step by step guides on how to test native, hybrid or web apps on
Android or iOS using Appium.

# Running a Test Script

A basic step by step example on [Python Client Side Example]({{ site.github.url }}/appium/examples/python-client-side-example) from the command line using Python.
