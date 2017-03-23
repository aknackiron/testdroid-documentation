---
layout: default
title: Calabash Android Support
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/calabash/examples/details-of-calabash-android-support/">
<link rel="canonical" href="http://docs.bitbar.com/testing/calabash/examples/details-of-calabash-android-support/"/>

# Examples

[https://github.com/bitbar/testdroid-samples/tree/master/calabash](https://github.com/bitbar/testdroid-samples/tree/master/calabash)
         
# Supported Calabash Android versions

Calabash Android versions from 0.5.2 to 0.5.8 are supported. If you
need specific version of the gem provide it in Gemfile:

    gem 'calabash-android', '= 0.5.2'

If there is no Gemfile the latest calabash-android gem will be used.
More information how to use Gemfiles at
http://bundler.io/gemfile.html.
 
# How To Package My Tests?

The basic test.zip file must contain folder called features. You can
include other files too like Gemfile or config folder with
cucumber.yml file.
 
# How To Use Tags in My Tests?

Add config folder with cucumber.yml to your zip file. This example
will only run tests marked with smoke tag


    # config/cucumber.yml
    ##YAML Template
    ---
    default: >
      --tags @smoke


Currently only default profile is supported. If you have other
profiles locally you need to edit cucumber.yml to use default profile
before testing in Bitbar Testing.

# Why RESET_BETWEEN_SCENARIOS Is Not Working?

Calabash Android does not support this option for real devices.

# Third Party Ruby Gems

If you need some particular Ruby gem for your tests please contact
<support@bitbar.com>.