---
layout: default
title: Appium Setup 
---


## Appium Setup

To get started, you can first download our Appium examples from Github. These examples are available in C#, Python, Java and Ruby, and we’ll be using these as a basis for some of these tutorials. Depending on which programming language you will be using, select the appropriate client library as listed below.

There are different examples available for regular app testing, game testing and some web-related testing using Appium. To make most out of the existing samples you should have Git installed. If you are new to Git, there is a very good guide on how to install Git on popular operating system here. 

<h2>Mac OS X</h2>

Download the latest Git command line tool from [http://git-scm.com/download/mac](http://git-scm.com/download/mac) and install it using the normal Mac installation procedure.

<h2>Linux</h2>

Use the following command to get Git installed on your Linux machine:

<pre>$ sudo apt-get install git</pre>

<h2>Windows</h2>

The easiest and the most straightforward way is to install the Github Windows application.

<h1>PYTHON</h1>

<h2>Mac OS X and Linux</h2>

Our Python samples have been created with 2.7.x version in use, so best compatibility can be expected with the same. Check that newest Python 2.7.x version is installed by using the following command:

<pre>$ python --version</pre>

If not installed, you can install Python by using the following commands:

<pre>Linux: $ sudo apt-get install python2.7
OSX: $ brew install python</pre>

Brew is a handy package manager tool, similar to apt-get. If you don’t have it, check the brew website for its one-liner installation.

Then, check if ‘pip’ module is installed. Use the following command:

<pre>$ pip --version</pre>

If ‘pip’ is appropriately installed, you’ll see something like this:

<code>pip 1.5.6 from /Library/Python/2.7/site-packages (Python 2.7)</code>

If not, use the following command to install it:

<pre>Linux: $ sudo apt-get install python-pip
OSX: $ sudo easy_install pip</pre>

Next, install the Selenium module for Python:

<pre>$ pip install selenium</pre>

And finally, verify that Selenium got installed:

<pre>$ pip list | grep selenium</pre>

<h2>Windows</h2>

Ensure that the latest Python (2.7.x or newer) version is installed. Go to command line and use the following:

<pre><code>&gt; python --version</code></pre>

If Python 2.7 or newer is not installed, download and run the setup from [Python Download Center](https://www.python.org/downloads/). To add Python into environment variables, go to Windows “System properties” → “Advanced System Settings” → “Environment Variables” → “System Variables” →  choose “Path” and press "Edit..." and then insert (assuming you have installed Python in the default location) <code>;C:\Python27;C:\Python27\Scripts</code> at the end separating each path with semicolon ; . Make sure to re-launch the command prompt to bring new environment variables into effect.

Then, check whether Python’s pip module is already installed:

<pre><code>&gt; pip --version</code></pre>

Install pip if it’s not already (we assume here that you have cURL installed. If not, check the [cURL Instruction and Installation](http://curl.haxx.se/) out.

<pre><code>&gt; curl https://raw.github.com/pypa/pip/master/contrib/get-pip.py &gt; get-pip.py
&gt; python get-pip.py
&gt; del get-pip.py</code></pre>

Install Python’s Selenium module:

<pre><code>$ pip install selenium</code></pre>

<h1>Java</h1>

Appium testing supports writing tests in multiple programming languages, including Java. Testing can be done against native or hybrid apps or responsive web pages on both iOS and Android devices. Only the test setups differ.

With Java, things are pretty simple and you only need to configure your test file accordingly. You can use [Testdroid Configuration for Java file](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/java) as an example/template.

In case you don't have an IDE with Maven included and would like to launch the example from command line, you will need to make sure that Maven is properly installed. Here's a link to the [Maven](https://maven.apache.org/install.html) installation instructions.

<h1>C#</h1>

<h2>Windows</h2>

Launch the [AppiumTest.sln file](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/csharp) on Visual Studio and make sure that NUnit Test Adapter is installed through the Extension Manager. Use Test Explorer to run your tests.

<h2>Linux/OSX</h2>

First, install [Monodevelop](http://www.monodevelop.com/download/) for C# support. Then, download dependencies using [Nuget](https://www.nuget.org/):

<pre><code>$ nuget install Test123/packages.config -OutputDirectory packages</code></pre>

To build the package, simply use the following command on correct path:

<pre><code>$ xbuild</code></pre>

<h1>Ruby</h1>

First, install the latest stable release of Ruby:

<pre><code>$ curl -sSL https://get.rvm.io | bash -s stable
$ rvm install ruby</code></pre>

Then, make sure RVM is using the correct Ruby by default:

<pre><code>$ rvm list
$ rvm --default use 2.1.1</code></pre>

In case you have an old Ruby/RVM, you can upgrade those with the following commands:

<pre><code>$ rvm get head
$ rvm autolibs homebrew
$ rvm install ruby</code></pre>

Check that it’s installed properly by printing out the Ruby version:

<pre><code>$ ruby --version</code></pre>

Update RubyGems and Bundler:

<pre><code>$ gem update --system
$ gem install --no-rdoc --no-ri bundler
$ gem update
$ gem cleanup</code></pre>

Check that RubyGems is &gt;= 2.1.5

<pre><code>$ gem --version</code></pre>

Run bundler at the [Ruby example](https://github.com/bitbar/testdroid-samples/tree/master/appium/sample-scripts/ruby) to install dependencies:

<pre><code>$ bundle install</code></pre>

<h1>All Programming Languages: How to Configure Testdroid Specific Settings</h1>

If you used any of those example files as a template, add your Testdroid user credentials in this script. You can also use environmental variables TESTDROID_USERNAME and TESTDROID_PASSWORD to get your credentials used:

<pre><code>String testdroid_username = env.get("TESTDROID_USERNAME");
String testdroid_password = env.get("TESTDROID_PASSWORD");
</code></pre>

Or alternatively, you can edit <code>testdroid_username</code> and <code>testdroid_password</code> in your source file:

<pre><code>capabilities.setCapability("testdroid_username", 'john.doe@bitbar.com');
capabilities.setCapability("testdroid_password", 'secretPassword123');</code></pre>

If you are new with desired capabilities or if you are looking for more information on how to use those efficiently, take a look at [Testdroid Desired Capabilities]({{ site.github.url }}/appium/desiredcaps.html).

Also, if you want to run tests against your application, make sure to change a file path to your application binary (whether you are running against APK or IPA):

<pre><code>private static final String TARGET_APP_PATH = "../../../apps/builds/BitbarSampleApp.apk";</code></pre>

In addition, there are lots of possible ways to configure your test run for our devices. In order to do this, you need to configure those desired capabilities. We'll get the bottom of this later in the blog series, but the current examples are as follows:

<pre><code>DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("platformName", "Android");
capabilities.setCapability("testdroid_target", "Android");
capabilities.setCapability("deviceName", "Android Device");

capabilities.setCapability("testdroid_project", "LocalAppium");
capabilities.setCapability("testdroid_testrun", "Android Run 1");

// See available devices at: https://cloud.testdroid.com/#public/devices
capabilities.setCapability("testdroid_device", "Samsung Galaxy Nexus GT-I9250 4.2.2"); 
capabilities.setCapability("testdroid_app", fileUUID); </code></pre>

In this Java example, you only really need to configure <code>testdroid_username</code> and <code>testdroid_password</code>, since sample application upload is included.

<h1>Running Your First Test</h1>

Before the test can start you need to upload you application to <a title="Testdroid Cloud" href="https://cloud.testdroid.com/" target="_blank">Testdroid Cloud</a>. This can be done either via <a title="API" href="http://testdroid.com/tech/the-powerful-api-for-your-mobile-app-game-and-web-testing" target="_blank">API</a> or you can do it <a title="Manual upload" href="http://testdroid.com/news/free-android-app-game-and-web-testing-on-intel-devices" target="_blank">manually</a> as well.

<h2>Python</h2>

To upload your app file (either APK or IPA) to Testdroid Cloud, open and configure the <a title="upload.py file" href="https://github.com/bitbar/testdroid-samples/blob/master/appium/sample-scripts/python/upload.py" target="_blank"><code>upload.py</code></a> script. As we walked it through, you only need to configure your username (email) and password that you registered with to Testdroid Cloud. Also, you need to set the full path to your mobile app. This can be an Android or iOS application. Then execute this:

<pre><code>$ python upload.py</code></pre>

To run a test:

<pre><code>$ python testdroid_android.py</code></pre>

<h2>Java</h2>

You can run test from your IDE or directly from command line using Maven:

<pre><code>&gt; mvn clean test -Dtest=SampleAppiumTest</code></pre>

Or to be more precise:

<pre><code>&gt; mvn clean test -Dtest=com.testdroid.appium.android.sample.SampleAppiumTest</code></pre>
or run all the tests:

<pre><code>&gt; mvn clean test </code></pre>

<h2>C#</h2>

To run tests, either launch them in Visual Studio via the Text Explorer or use the nunit console command:

<pre><code>$ nunit-console Test123/bin/Debug/TestdroidAndroidSample.dll</code></pre>

<h2>Ruby</h2>

Run the tests with rspec:

<pre><code>$ rspec testdroid_android.rb</code></pre>





