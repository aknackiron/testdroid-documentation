---
layout: default
title: Using Calabash on Testdroid Cloud
---


If you are interested to start testing your apps with Calabash, please
contact us at <sales@bitbar.com> and we’ll be happy to enable it for
you. Here are some basic details of Calabash and how to use it in
Testdroid.

![Calabash]({{site.github.url}}/assets/calabash/calabash.png)

# Getting Calabash for Android

[https://github.com/calabash/calabash-android](https://github.com/calabash/calabash-android)

# Installation

The general installation guide for Calabash is found here
[https://github.com/calabash/calabash-android/blob/master/documentation/installation.md](https://github.com/calabash/calabash-android/blob/master/documentation/installation.md). Check
that you have the needed tools installed. These are basically Ruby and
Android SDK. Then you can do:


    $ sudo gem install calabash-android

and you should have command *calabash-android* in your path.

# Creating a New Test

    $ mkdir new-calabash-test
    $ cd new-calabash-test
    $ calabash-android gen

Now you should have a new *features*-directory inside
*new-calabash-test* directory. Features directory contains
*my_first.feature-file*, *step_definitions-directory* and
*support-directory*. For a simple test you will need to only edit
*my_first.feature-file*. Here is the list of predefined steps
required:
[https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md](https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md)

# Running Your First Test

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

# Run Calabash Android Test in Testdroid Cloud

Access [Testdroid Cloud](https://cloud.testdroid.com/) and login. The
following steps will help you get your Calabash tests up and running
on over 250 Android devices:
 
1. Login to Testdroid Cloud
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
 
# Additional Information

If you need some particular Ruby gem for your tests please contact <support@bitbar.com>.
