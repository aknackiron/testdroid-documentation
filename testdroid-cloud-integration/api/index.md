---
layout: default
title: Testdroid API
---

## General 

Testdroid provides a very powerful and useful API for its users to
manage all aspects of mobile development and testing
automatically. The API allows access our device farm, manage projects,
test runs and results, plus many other things that make mobile app,
game and web testing smoother, faster and less stressful.

![]({{site.github.url}}/assets/testdroid-cloud-integration/api/testdroid_api.jpg)

Testdroid API is an easy-to-use gateway for managing development and
testing effort on real Android and iOS devices. The API provides all
infrastructure through a RESTful architecture returning JSON
structures with appropriate HTTP response codes.

## The Basics - Testdroid Cloud and Testdroid API

In case you are unfamiliar with REST APIs,
[here](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
is a good article with basic information.

In a nutshell, HTTP allows for communication between a variety of
hosts and clients and supports a variety of network
configurations. The communication usually takes place over TCP/IP, but
any reliable transport can be used.

![]({{site.github.url}}/assets/testdroid-cloud-integration/api/http-req-resp.png)

Full API documentation is available [here.]({{site.github.url}}/testdroid-cloud-integration/api/rest-api/)

### HTTP Request - Response

Communication between a host and a client occurs, via a
request/response pair. The client initiates an HTTP request message,
which is serviced through a HTTP response message in return. We will
look at this fundamental message-pair in the next section - with
Authentication/Authorization example.

We're using [cURL](http://curl.haxx.se) in the following examples. In case you are not
familiar with it, cURL is a software providing a library and
command-line tool for transferring data using various protocols. You
can download it from [here](http://curl.haxx.se/download.html).

## Examples


By default all of the api calls respond in XML format. To switch to JSON_ format, include header `Accept: application/json` to the header.

Note that all request timeouts are in seconds.

### Authentication/Authorization

This example shows how to get access to {{site.td_cloud}} using the
API. Testdroid API uses OAuth 2.0 - an open standard for
authorization. The OAuth 2.0 focuses on client developer simplicity
while providing specific authorization flows for web apps. As it is
seamlessly used with Testdroid API, you can use it to authorize
further API calls to our cloud back-end.

An optional, but better suited for shared scripts, is to identify user
using the *apiKey* approach. An [apiKey](https://en.wikipedia.org/wiki/Application_programming_interface_key) is a secret token that is
available from Testdroid Cloud from under *My Account* link. If needed
the apiKey token can also be re-generate to invalidate old scripts.

```
curl -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: https://cloud.testdroid.com/api/me
```

### Create a Testdroid Project

To create a new project from the command line using cURL and apiKey:

```
curl -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: -X POST -d "name=NewProject"  https://cloud.testdroid.com/api/me/projects
```

### Project Listing

Returns project listing containing details, Test Runs and Device Runs
(accept application JSON). 

```
curl -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: -X GET https://cloud.testdroid.com/api/me/projects
```

### Details of a Specific Project

Query the details of a specific project defined by the project's id PROJECT_ID and authenticating using apiKey:

```
curl -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: -X GET https://cloud.testdroid.com/api/me/projects/PROJET_ID
```

### Get Test Run Details

Get a test run's details by authenticating using the apiKey:

```
url -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: -X GET   https://cloud.testdroid.com/api/me/projects/PROJECT_ID/runs
```

### Get Details of Certain Device Run

Authenticating using the API key:

```
url -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: -X GET   https://cloud.testdroid.com/api/me/projects/PROJECT_ID/runs/RUN_ID/device-runs
```
