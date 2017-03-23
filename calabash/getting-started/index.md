---
layout: default
title: Using Calabash on Bitbar Testing
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/calabash/getting-started/">
<link rel="canonical" href="http://docs.bitbar.com/testing/calabash/getting-started/"/>

![Calabash]({{site.github.url}}/assets/calabash/new-calabash-logo.png)

# Getting Calabash for Android

[https://github.com/calabash/calabash-android](https://github.com/calabash/calabash-android)

# Getting Calabash for iOS

[https://github.com/calabash/calabash-ios](https://github.com/calabash/calabash-ios)

# General Installation Steps

The general installation guide for Calabash for Android is found here
[https://github.com/calabash/calabash-android/blob/master/documentation/installation.md](https://github.com/calabash/calabash-android/blob/master/documentation/installation.md). Once all the needed tools are installed (Ruby and Android SDK), then:

    $ sudo gem install calabash-android

and command *calabash-android* should be available in path.

# Creating a New Test

    $ mkdir new-calabash-test
    $ cd new-calabash-test
    $ calabash-android gen

This generates a new *features*-directory inside *new-calabash-test* directory. Features directory contains *my_first.feature-file*, *step_definitions-directory* and *support-directory*. For a simple test only edit *my_first.feature-file*. Here is the list of predefined steps required:
[https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md](https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md)

# Running The First Test

Here is an example Calabash test: 

    Feature: Click items
      Scenario: Run whole app
       When I press view with id "radio0"
       Then I wait
       Then I press view with id "radio1"
       Then I wait
       Then I press view with id "radio2"
       Then I take a screenshot
       Then I wait
       Then I enter text "Hello Calabash" into field with id "editText1"
       Then I take a screenshot
       Then I wait
       Then I press view with id "button1"
       Then I wait
       Then I take a screenshot
       Then I go back
       Then I wait
       Then I press view with id "radio1"
       Then I wait
       Then I press view with id "button1"
       Then I wait
       Then I take a screenshot

**NOTE**: Calabash requires the application to have INTERNET
  permission enabled in the AndroidManifest.xml
 
If the application is not yet signed you can do it with Calabash:

    $ calabash-android resign {path-to-apk}

Now you should be ready to run Calabash test locally. Go to *new-calabash-test-directory* and run:

    $ calabash-android run {path-to-apk}

Output should look something like this:

     Feature: Click items
      Scenario: Run whole app # features/my_first.feature:3
       2485 KB/s (554161 bytes in 0.217s)
       2282 KB/s (100963 bytes in 0.043s)
       When I press view with id "radio0" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I press view with id "radio1" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I press view with id "radio2" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I take a screenshot # calabash-android-0.4.14/lib/calabash-android/steps/screenshot_steps.rb:9
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I enter text "Hello Calabash" into field with id "editText1" # calabash-android-0.4.14/lib/calabash-android/steps/enter_text_steps.rb:25
       Then I take a screenshot # calabash-android-0.4.14/lib/calabash-android/steps/screenshot_steps.rb:9
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I press view with id "button1" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I take a screenshot # calabash-android-0.4.14/lib/calabash-android/steps/screenshot_steps.rb:9
       Then I go back # calabash-android-0.4.14/lib/calabash-android/steps/navigation_steps.rb:1
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I press view with id "radio1" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I press view with id "button1" # calabash-android-0.4.14/lib/calabash-android/steps/press_button_steps.rb:13
       Then I wait # calabash-android-0.4.14/lib/calabash-android/steps/progress_steps.rb:5
       Then I take a screenshot # calabash-android-0.4.14/lib/calabash-android/steps/screenshot_steps.rb:9
       1 scenario (1 passed)
       20 steps (20 passed)
       0m47.002s

If your test takes screenshots they should be as png-files in *new-calabash-test-directory*.

# Run Calabash Android Test in Bitbar Testing

Access [Bitbar Testing](https://cloud.testdroid.com/) and login. The
following steps will help you get your Calabash tests up and running
on over 250 Android devices:
 
1. Login to Bitbar Testing
1. Create a new project
   ![create new project]({{site.github.url}}/assets/calabash/calabash-android-new-project.png)
1. Upload your application (.APK)
   ![upload apk]({{site.github.url}}/assets/calabash/calabash-android-upload-application.png)
1. Create zip-package from your features-directory
1. Upload test zip-package
   ![upload zip]({{site.github.url}}/assets/calabash/calabash-android-upload-test.png)

1. Select devices
   ![select devices]({{site.github.url}}/assets/calabash/calabash-android-select-devices.png)

1. Check advanced configurations
1. Run the project
1. Verify results
 

# Advanced Settings

When creating a Calabash test project, it is possible to defined some environment variables to be used during test execution.

In Bitbar Testing it is possible to give values to the two pre-existing environment variables `CALABASH_TAGS` and `CALABASH_PROFILE`, in the advanced settings of a test run. These can be used to better orchestrate in which order tests get executed.

  ![]({{site.github.url}}/assets/products/testdroid-releases/2.31/enterprise-env-variables.png)

Users of Private and Enterprise Bitbar Testing clouds can create their own additional variables. 