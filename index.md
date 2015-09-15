---
layout: default
title: Home
---

# Landing page

index.html or index.md is the default landing page when pointing to base url.

The table of contents is created only when the page has at least one
top level chapter ('#' in md). If this is missing then none of the
lower level chapters aren't included into the TOC either.

Page's title is defined in the yml-script at the beginning of the
page source.

## Example of link to page in root

Here is the link to the [first page]({{ site.baseurl }}/first_page.html).

## Example of link to page in sub-folder

Linking to some [appium documentation]({{ site.baseurl }}/appium/python/index.html).

## Example of linking to  an image

Below is a screenshot image about a settings dialog.

![Settings dialog]({{ site.baseurl }}/assets/settings.png)

## Second level chapter

Is presented in table of contents if the first level chapter title is
present.

### Third level of chapter

Followed a second level of chapter.