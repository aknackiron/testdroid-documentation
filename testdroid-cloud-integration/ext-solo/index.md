---
layout: default
title: Bitbar Testing Ext-Solo
---

Extension Solo is a library extension to Robotium solo objects. The
library contains a number of neat methods to use in Robotium tests.

# Source Code

ExtSolo library was outsourced at the beginning of 2016. Sources can
be found at [https://github.com/bitbar/robotium-extensions](https://github.com/bitbar/robotium-extensions).

# ExtSolo Example

Here is an example test using the ExtSolo library, that should be
imported in your Java project's libraries. Here is an example of a
`testMethod()`.

    import android.test.ActivityInstrumentationTestCase2;
    import com.bitbar.testdroid.testapp.Bitbar TestingTestAppActivity;
    import com.bitbar.recorder.extensions.ExtSolo;

    public class Bitbar TestingTestAppActivityTest4 extends
         ActivityInstrumentationTestCase2<Bitbar TestingTestAppActivity> {
    
         private ExtSolo solo;
     
         public Bitbar TestingTestAppActivityTest() {
             super("com.app.details", Bitbar TestingTestAppActivity.class);
         }
     
         public void setUp() throws Exception {
             super.setUp();
             solo = new ExtSolo(getInstrumentation(), getActivity(), 
                                this.getClass().getCanonicalName(), getName());
         } 
         
         public void tearDown() throws Exception {
             solo.finishOpenedActivities();
             solo.tearDown();
             super.tearDown();
        }
     
         public void testMethod() throws Exception {
             // ...
         }
    }

The content of the `testMethod()` could include test calls as follows:

    solo.clickOnText("Button");
    solo.clickOnText("Settings");
    Assert.assertTrue(solo.searchText("Settings"));
    
    solo.clearEditText(2);
    solo.enterText(2, "Robotium ExtSolo Rocks!");
    solo.goBack();
    Assert.assertTrue(solo.searchText("Robotium"));

A real test would have a more interesting steps though. For more
information on the available API calls, check [ExtSolo API
definitions](api/).

# ExtSolo API

[Bitbar Testing ExtSolo API](api/)

# Latest Binary

Download latest recorder extension here:
[recorder-extensions-5.0.jar]({{site.github.url}}/assets/testdroid-cloud-integration/extsolo/recorder-extensions-5.0.jar).

