---
layout: default
title: Jira With Bitbar Testing
---

Intro

# Setup Integration

The basic steps to set up a personal or corporate JIRA environment up and running with Testdroid Cloud projects are as follows:

1) Login to [Bitbar Testing cloud](https://cloud.testdroid.com/).

2) Click your avatar in right top corner and select 'My Account'.

3) On 'My Account' page enable use the 'Connect to JIRA' button. Clicking this opens the following configuration:

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-connection.png)

4) Add proper JIRA URL, username and password.

5) Fetch the certificate. Now, this varies a lot depending on if you use Mac or Windows, used web browser and so on. Windows users, can get the certificate from the web browser whereas Mac users can use Keychain Access tool to obtain the file. When everything is configured properly this should be visible:

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-update.png)

6) The connection between Bitbar Testing and JIRA is now setup successfully. The details as well as deletion of certificate and connection can be done in this view.

7) In order to use the JIRA integration while working on Bitbar Testing, look for JIRA logos at the top right corner of each window and view. When clicked, a personalized view is opened as follows:

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-create-issue.png)

8) Under 'Project' menu the same projects  available in JIRA instance are visible.  JIRA issue type allows to set the type of issue to enter, Summary captures the most essential description of the issue, Priority is severity of an issue (e.g. Critical, Cosmetic) and the Description where user can write all details about the issue as well as include links back to Testdroid Cloud project/defect so that developers can quickly investigate the issue.
