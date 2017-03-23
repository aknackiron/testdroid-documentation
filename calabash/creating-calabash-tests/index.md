---
layout: default
title: Creating Calabash Tests 
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/calabash/creating-calabash-tests/">
<link rel="canonical" href="http://docs.bitbar.com/testing/calabash/creating-calabash-tests/"/>

## Creating Calabash Tests

Before writing tests, the proper directory structure needs to be created to house the tests and the supporting files for the tests. Calabash provides some helper commands to create a basic directory structure. These helpers are run at the command line from within the solution directory. For an Android project, the `calabash-android gen` command would be executed, as illustrated by the following snippet:

    $ calabash-android gen

The executed command automatically creates the directory structure as follows:

![Calabash]({{site.github.url}}/assets/calabash/feature-folder-structure.png)

Furthermore, `calabash-ios gen` creates the features folder, a sample `my_first.feature` file, and the folders `step_definitions` and `support`. The tests can be then written in a plain text editor.

The two subdirectories hold Ruby source code files. The files in the step_definitions hold the step definitions - the code snippets that make up the steps that make up the feature. The support directory holds the source code that is shared amongst the step definitions.

The `calabash-android gen` command is the corresponding command for Android projects. It creates the same directory structure for Android projects.

**Note:** `calabash-ios gen` or `calabash-android gen` only need to run once. These commands will terminate if they detect an existing features directory.

