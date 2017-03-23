---
layout: default
title: Bitbar Testing Manual Testing
---
<meta http-equiv="refresh" content="0; url=http://docs.bitbar.com/testing/user-manuals/manual-testing/">
<link rel="canonical" href="http://docs.bitbar.com/testing/user-manuals/manual-testing/"/>
Bitbar Testing Cloud Manual Testing feature provides users a way to take
manual access to Bitbar Testing devices. By clicking Manual Testing in
the main menu, user will be directed to the Manual Testing setup view.

Users can upload their applications by clicking *Upload new app* on
top of the widget and then select application for a manual session. It
is also possible to simply start using a device by clicking on *Start
without and app*.

Bitbar Testing supports manual testing for Android and iOS devices. Android manual testing is available to all users, but iOS manual testing is available through dedicated devices in public cloud. Enterprise and private cloud customers can decide to make iOS devices available to all or not.

## Getting Started 

1. Select application for the session

   The interactive session gets started by clicking the application or
   by starting without. More applications can be uploaded and all are
   visible in this view. Both Android and iOS application are supported.

   ![]({{site.github.url}}/assets/user-manuals/interactive_choose_application.png)


1. Select a device for the session

   User can pick up the device and use filters on the left-hand side
   to quickly browse desired device. NOTE! If certain device is not
   available (used by some other user) it will be shown with grayed
   lock picture on top of it.

   Some rare Android devices do not support the used remote connection technology and for this reason are not visible in the manual testing device selector. Manual testing on iOS devices is not supported on public cloud devices. We are bringing this functionality to Enterprise and Private Cloud customers.

   ![]({{site.github.url}}/assets/user-manuals/interactive_select_device.png)

   After this the Manual Testing session will be opened with the selected
   application installed on device.

   ![]({{site.github.url}}/assets/user-manuals/interactive_view.png)

   During the session, users can use external buttons to do the following
   adjustments for the device, session and tests:

   **Power** - Switch the device off / end session.

   **Volume** - speaker volume can be turned up or down.

   **Rotate** - the device under session can be switched to portrait and landscape mode.

   **Screenshot** - Take a screenshot of device session. The screenshot will
   be shown in **Taken screenshots** widget next to the Interactive widget.

   Users can also change the file (application), device or restart the
   session with current device using buttons on top of the widget.
 
## Device logs
 
The **device logs** for Manual Testing session will show live log details
next to the interactive session widget.

![]({{site.github.url}}/assets/user-manuals/interactive_device_logs.png)
   
## Screenshots
 
The **Taken screenshots** view shows all captured screenshots during the
Manual Testing session.

All captured screenshots can be downloaded by clicking Download
screenshots button on the top right-corner of the widget.

![]({{site.github.url}}/assets/user-manuals/interactive_screenshots.png)
