---
layout: default
title: Using annotations in Android instrumentation tests
---

Android InstrumentationTestRunner allows you to filter test runs from
specific Java package or class, but in addition, you can also use
custom Java annotations in your test methods to filter tests runs.

## Create custom annotations 

All you have to do is to create class like this:



    package com.testdroid.test.annotations;  
    
    import java.lang.annotation.*;  
   
    @Retention(RetentionPolicy.RUNTIME)  
   
    @Target(ElementType.METHOD)  
   
    public @interface MyAnnotation {  
    }


Then annotate your test method:


    @MyAnnotation
    public void testButtonClick() throws Exception {
        /*
        test code
        */
    } 


When running your tests in Testdroid Cloud, open the run's *Advanced
options -> Test case options* and define your annotation class in the
Test cases with specific annotations.


Tests are then executed including or excluding given annotation used
in configurations.

Annotations can be mixed with package or class. Those settings are
also available from Testdroid Run in Cloud plug-in with Jenkins

## Example

[Here]({{site.github.url}}/assets/testdroid-cloud-integration/annotations.zip)
is an example Eclipse project with annotations in use.

