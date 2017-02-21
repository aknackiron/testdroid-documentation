---
layout: default
title: Jira With Bitbar Testing
---

JIRA integration enables creating JIRA issues directly from Bitbar Testing with links back to projects, test runs and even single device runs.

# Integration Steps

The basic steps to set a personal or corporate JIRA environment up and running with Bitbar Testing projects are as follows:

1) Login to [Bitbar Testing cloud](https://cloud.testdroid.com/).

2) Click your avatar in right top corner and select 'My Account'.

3) On 'My Account' under 'My Integrations' use the JIRA button. Clicking this opens the following configuration:

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-connection.png)

4) Add proper JIRA URL, username and password.

5) Add the certificate. Location of the certificate varies depending on operating system, used web browser and so on. Windows users, can get the certificate from the web browser whereas Mac users can use Keychain Access tool to obtain the file. 

Also, if you have `open_ssl` in use the certificate can be retrieved from command line.

```
echo -n | openssl s_client -connect {HOSTNAME}:{PORT}  | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/jira_server.cer
```

The above command stores JIRA server's certificate to `/tmp/jira_server.cer` file that needs to be uploaded to Bitbar Testing.

When everything is configured properly, this should be visible:

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-update.png)

6) The connection between Bitbar Testing and JIRA is now setup successfully. Changing credentials and certificate deletion can be done in this view.

7) In order to use the JIRA integration while working on Bitbar Testing, look for JIRA logos at the top right corner of each window and view. 

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira_logo_in_cloud.png)

When the logo is clicked, a personalized view is opened allowing the user to create a new bug or story to JIRA.

![]({{site.github.url}}/assets/testdroid-cloud-integration/jira/jira-integration-create-issue.png)

8) The fields in JIRA's dialog:

  * **Project** menu shows the available project types from JIRA. 
  * **Issue Type** allows to set the type of the issue to be created. 
  * **Summary** field captures the essential description of the issue. 
  * **Priority** is severity of an issue (e.g. Critical, Cosmetic) and
  * **Description** contains all details about the issue with links back to Bitbar Testing cloud project/defect so that developers can quickly investigate the issue.
