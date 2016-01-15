---
layout: default
title: Creating Calabash Tests 
---


## Creating Calabash Tests

Before we can start writing tests, we need to create the proper directory structure to house the tests and the supporting files for the tests. Calabash provides some helper commands to create the basic directory structure. These helpers are run at the command from within the solution directory. If we want to start writing tests for an Android project, we would run calabash-android gen at the command line, as illustrated by the following snippet:

<pre>$ calabash-android gen</pre>

The executed command automatically creates the directory structure as follows:

![Calabash]({{site.baseurl}}/assets/calabash/feature-folder-structure.png)

Furthermore, <code>calabash-ios</code> creates the features folder, a sample <code>my_first.feature</code> file, and the folders <code>step_definitions</code> and <code>support</code>. The tests can be then written in a plain text editor.

The two subdirectories will hold Ruby source code files. The files in the step_definitions hold the step definitions - the code snippets that make up the steps that make up the feature. The support directory holds the source code that is shared amongst the step definitions.

The calabash-android gen command is the corresponding command for Android projects. It will create the same directory structure for Android projects.

<strong>Note: calabash-ios gen or calabash-android gen only need to run once. These commands will terminate if they detect an existing features directory.</strong>

