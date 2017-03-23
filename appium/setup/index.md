---
layout: default
title: Starting With Appium
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/appium/setup/">
<link rel="canonical" href="http://docs.bitbar.com/testing/appium/setup/"/>

There are a number of samples on [Bitbar Github](https://github.com/bitbar/testdroid-samples/) repository that help getting started with running Appium tests either remotely or as server side tests in Bitbar Testing cloud.

To get started with the samples, the user should have Git installed and the programming language of choice. Below steps guide in installing Git on different environments followed by rought guides on getting different programming languages set up.

* Mac OS X

  Download the latest Git command line tool from [http://git-scm.com/download/mac](http://git-scm.com/download/mac) and install it using the normal Mac installation procedure.

* Linux

  Use the following command to get Git installed on your Linux machine:

  ```
  $ sudo apt-get install git
  ```

* Windows

  The easiest and the most straightforward way is to install the [Github Desktop application](https://desktop.github.com/) for Windows.


# Installing Python

## Python on Mac OS X and Linux

Bitbar Appium Python samples use Python version 2.7.x and will not work with Python 3.. To know the currently installed version run the below command.

```
$ python --version</pre>
```

If Python is not installed, it can be installed by using the following commands:

```
# on Linux
$ sudo apt-get install python2.7

# on Mac OSX
$ brew install python
```

Brew is a handy package manager tool, similar to apt-get. More information available at the [brew website](http://brew.sh/) for its one-liner installation.

For easier Python package management ‘pip’ should also be installed. Use the following command:

```
$ pip --version
```

If ‘pip’ is appropriately installed, it should print something like this:

```
pip 1.5.6 from /Library/Python/2.7/site-packages (Python 2.7)
```

If not, pip can be installed as follows:

```
# on Linux
$ sudo apt-get install python-pip
# on Mac
$ sudo easy_install pip
```

With Pip installed, let's install the Selenium module needed by Appium tests.

```
$ pip install selenium
```

And finally, verify that Selenium got installed:

```
$ pip list | grep selenium
```

## Python on Windows

Ensure the latest Python version 2 (2.7.x or newer) is installed. Go to command line and use the following:

```
> python --version
```

If Python 2.7 is not installed, download and run the setup from [Python Download Center](https://www.python.org/downloads/). To add Python into environment variables, go to Windows “System properties” → “Advanced System Settings” → “Environment Variables” → “System Variables” → choose “Path” and press "Edit..." and then insert (assuming you have installed Python in the default location) `;C:\Python27;C:\Python27\Scripts` at the end separating each path with semicolon ';' . Make sure to re-launch the command prompt to bring new environment variables into effect.

Then, check whether Python’s pip module is already installed:

```
> pip --version
```

Install pip if it’s not already (we assume here that you have cURL installed. If not, check the [cURL Instruction and Installation](http://curl.haxx.se/) out.

```
curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py > get-pip.py
python get-pip.py
del get-pip.py
```

Now that Python and Pip are available let's install Python’s Selenium module:

```
$ pip install selenium
```

# Installing Java

Appium testing supports writing tests in multiple programming languages, including Java. The Java [installation guide](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) helps in getting Java working on the environment of choice.

With Java, things are simple and only the configure test file needs to be updated accordingly. Use the Bitbar [Configuration for Java file](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java) `pom.xml` as example/template.

In case no IDE is used, Maven can be used to launch the example from command line. Make sure  Maven is properly installed. Here's a link to  [Maven](https://maven.apache.org/install.html) installation instructions.

# Installing C\#

## C# on Windows

Launch the [AppiumTest.sln file](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/csharp) on Visual Studio and make sure that NUnit Test Adapter is installed through the Extension Manager. Use Test Explorer to run your tests.

## C# on Linux/OSX

First, install [Monodevelop](http://www.monodevelop.com/download/) for C# support. Then, download dependencies using [Nuget](https://www.nuget.org/):

```
$ nuget install Test123/packages.config -OutputDirectory packages
```

To build the package on Mac OSX, simply use the following command on correct path:

```
$ xbuild
```

# Installing Ruby

First, install the latest stable release of Ruby:

```
$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install ruby
```

Let's make sure RVM is using the correct Ruby by default:

```
$ rvm list
$ rvm --default use 2.1.1
```

In case of old Ruby/RVM, it can be upgraded with the following commands:

```
$ rvm get head
$ rvm autolibs homebrew
$ rvm install ruby</code></pre>
```

Check that it’s installed properly by printing out the Ruby version:

```
$ ruby --version
```

Update RubyGems and Bundler:

```
$ gem update --system
$ gem install --no-rdoc --no-ri bundler
$ gem update
$ gem cleanup
```

Check that RubyGems is >= 2.1.5

```
$ gem --version
```

Run bundler at the [Ruby example](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/ruby) to install dependencies:

```
$ bundle install
```






