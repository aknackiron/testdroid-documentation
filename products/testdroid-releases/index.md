---
layout: default
title: Testdroid Releases
---


## Release 2.20 May 11, 2016

Technical release mostly intended to fixing some back end
issues. Release targetted for Enterprise installations.

### Fixed bugs

* Unable to use function buttons in manual testing: Using Firefox 44
  some UI elements on the manual testing view did not react correctly.

* Our resign-ipa script did not handle app Bundle display name with spaces correctly: Fixed.

### Added Features

* UI improvements to device run view. To ease access to the project
  information, like downloading log files, screenshots etc. we moved
  the project information up above the test run status view.

![]({{site.github.url}}/assets/products/testdroid-releases/2.20/new-doughnut.png)

* Bread crumbs to improve navigation. To help navigation inside of
  projects we added bread crumbs under top menu so it's easy to
  navigate back to where you came from.

![]({{site.github.url}}/assets/products/testdroid-releases/2.20/bread-crumbs.png)

## Release 2.19 April 27, 2016

Technical release with improvements for Private Cloud users and bug fixes.

### Fixed bugs

* Changes to IBM Marketplace integration

* Performance issues for administrator users (Enterprise and Private Clouds)

### Added Features

* Improved usage details reporting

## Release 2.18 April 4, 2016

Release for Private and Enterprise installations in mind.

### Fixed bugs

* Improvement to Calabash iOS test run reporting

### Added Features

* Removed old administration interface

* [Integration to IBM Marketplace](https://www.ibm.com/marketplace/next/search/us/en-us/?terms=testdroid). IBM Marketplace users can now get started using Testdroid Cloud. 

![]({{site.github.url}}/assets/products/testdroid-releases/2.18/td-ibm-marketplace.png)

* Possibility to reprioritize test runs in queue (Enterprise & Private
  Clouds). While an other team is running long regression tests
  reserving all the devices, you might want to prioritize your bug fix
  test run higher to get your fix tested. You can now do so by setting
  the priority of your test run in the admin panel of your Enterprise
  Cloud installation. Clicking the "edit pencil" admin is able to set
  the wanted priority to the test run.

![]({{site.github.url}}/assets/products/testdroid-releases/2.18/td-reprioritize-runs.png)