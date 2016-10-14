---
layout: default
title: Testdroid Cloud API

ISO_639-1: <a href="http://www.loc.gov/standards/iso639-2/php/code_list.php">ISO 639-1</a>
ISO_3166-1: <a href="https://www.iso.org/obp/ui/#search">ISO 3166-1</a>
docs_oracle_com: <a href="http://docs.oracle.com/javase/6/docs/api/java/util/Locale.html">docs.oracle.com</a>
codenomicon: <a href="https://fuzzomatic.codenomicon.com/">Condenomicon</a>
Compatibility_Test_Suite: <a href="http://source.android.com/compatibility/cts-intro.html">Compatibility Test Suite</a>
Android_UIAutomator_Framework: <a href="http://developer.android.com/tools/help/uiautomator/index.html">Android UIAutomator Framework</a>
InstrumentationTestRunner: <a href="http://developer.android.com/reference/android/test/InstrumentationTestRunner.html">InstrumentationTestRunner</a>
---


By default all of the api calls responds in XML format.  To switch to
`JSON`_ format send header *Accept: application/json*.  **This
documentation is using responds in JSON format.**
   
[JSON: http://json.org/](http://json.org/)


# Testdroid Cloud API Clients


* java: [http://github.com/bitbar/testdroid-api](http://github.com/bitbar/testdroid-api)
* python: [https://github.com/bitbar/testdroid-api-client-python](https://github.com/bitbar/testdroid-api-client-python)
* ruby: [https://github.com/bitbar/testdroid-api-client-ruby](https://github.com/bitbar/testdroid-api-client-ruby)
 
# Swagger

**note:**
   Swagger is available **only for enterprise** customers with administrator priviledges. Swagger is a tool which allows browsing and test a REST API in real-time.

[Open Swagger](https://cloud.testdroid.com/swagger) in your Testdroid Enterprise setup.


# Authorization

The best authentication method is to identify user
using the *apiKey* approach. An [apiKey](https://en.wikipedia.org/wiki/Application_programming_interface_key) is a secret token that is
available from Testdroid Cloud from under *My Account* link. If needed
the apiKey token can also be re-generate to invalidate old scripts.

```
curl -H "Accept: application/json" -u xYY5hsdPXAXsBBd1G3ijnb18wlqPeOA6: https://cloud.testdroid.com/api/me
```

If the apiKey is not available for some reason then registration email
(*your.email@account.com*) and associated password (*XXXXXXXX*) can
also be used for authentication.

```
$ curl -X POST -H "Accept: application/json" -d "client_id=testdroid-cloud-api&grant_type=password&username=your.email@account.com&password=XXXXXXXX" https://cloud.testdroid.com/oauth/token
```

More examples:
[Authentication/Authorization](http://docs.testdroid.com/testdroid-cloud-integration/api/#authenticationauthorization)

API v2 uses [OAuth 2.0](http://oauth.net/2/)_ - an open standard for authorization.

## Request

    GET /oauth/token

Request body:

| Name          | Type   | Required | Description                                      |
|---------------|--------|----------|--------------------------------------------------|
| client_id     | String |   yes    |  Client ID                                      |
|               |        |          |  Use: *testdroid-cloud-api*                     |
|---------------|--------|----------|--------------------------------------------------|
| grant_type    | String |   yes    | Grant type                                       |
|               |        |          |---------------|----------------------------------|
|               |        |          | password      | start new session                |
|               |        |          |---------------|----------------------------------|
|               |        |          | refresh_token | refresh existing session         |
|---------------|--------|----------|--------------------------------------------------|
| username      | String |   yes*   | User name                                        |
|---------------|--------|----------|--------------------------------------------------|
| password      | String |   yes*   | User password                                    |
|---------------|--------|----------|--------------------------------------------------|
| refresh_token | String |   yes**  | Refresh token                                    |
|---------------|--------|----------|--------------------------------------------------|
 
| * - Required only when *grant_type* is *password*
| ** - Required only when *grant_type* is *refresh_token*

## Response  


    {  
     "access_token":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",  
     "token_type":"aaaaaa",  
     "refresh_token":"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",  
     "expires_in":####,  
     "scope":"aaaaa"  
    }  

Response body:

|---------------|--------|---------------------------------------------------------|
| Name          | Type   | Description                                             |
|---------------|--------|---------------------------------------------------------|
| access_token  | String | Access token                                            |
|---------------|--------|---------------------------------------------------------|
| token_type    | String | Token type                                              |
|               |        |---------|-----------------------------------------------|
|               |        | bearer  | if requested to start new session             |
|               |        |---------|-----------------------------------------------|
|               |        | refresh | if requested refresh existing session         | 
|---------------|--------|---------|-----------------------------------------------|
| refresh_token | String | Refresh token - needed to refresh existing session      |
|---------------|--------|---------------------------------------------------------|
| expires_in    | Number | Seconds to token expiration                             |
|---------------|--------|---------------------------------------------------------|
| scope         | String | Token scope: *read* and/or *write* separated by a space |
|---------------|--------|---------------------------------------------------------|

 
## Example

### Starting new session
 
Request:

    GET /oauth/token?client_id=testdroid-cloud-api&grant_type=password&username=example@bitbar.com&password=P4s$w0rd
   
Response
 
    {  
     "access_token":"4cf57a0a-7c8b-42a4-b447-6e05ff8f94ab",  
     "token_type":"bearer",  
     "refresh_token":"f1bc0a64-a4bd-46c0-b230-d8977b1d0cbb",  
     "expires_in":3599,  
     "scope":"read write"  
    }  


### Refreshing existing session
 
Request:
   
    GET /oauth/token?client_id=testdroid-cloud-api&grant_type=refresh_token&refresh_token=f1bc0a64-a4bd-46c0-b230-d8977b1d0cbb
   
Response:
 
    {  
     "access_token":"59f0ca4c-f56a-433f-80c7-242290ab206b",  
     "token_type":"bearer",  
     "refresh_token":"f1bc0a64-a4bd-46c0-b230-d8977b1d0cbb",  
     "expires_in":3599,  
     "scope":"read write"  
    }  


 
# Project basics

**Note:** Please remember to put your **access_token** to HTTP **request
URL**

## Create new project

### Request

    POST /api/v2/me/projects
  
Request body:

|--------------|--------|----------|----------------------------------------------------------------------------------|
| Name         | Type   | Required | Description                                                                      |
|==============|========|==========|==================================================================================|
| name         | String |   yes    | New project name                                                                 |
|--------------|--------|----------|----------------------------------------------------------------------------------|
| type         | String |   yes    | New project type                                                                 | 
|              |        |          |----------------|-----------------------------------------------------------------|
|              |        |          | ANDROID        | Android project based on `Android Test Framework`               |
|              |        |          |----------------|-----------------------------------------------------------------|
|              |        |          | CTS            | `Compatibility Test Suite` project                              |
|              |        |          |----------------|-----------------------------------------------------------------|
|              |        |          | IOS            | iOS project                                                     |
|              |        |          |----------------|-----------------------------------------------------------------|
|              |        |          | UIAUTOMATOR    | Android project based on new `Android UIAutomator Framework`    |
|              |        |          |                | *Note that UIAUTOMATOR requires API Level 16*                   |
|--------------|--------|----------|----------------|-----------------------------------------------------------------|
 
* [Android Test Framework](http://developer.android.com/tools/testing/testing_android.html)
* [Compatibility Test Suite](http://source.android.com/compatibility/cts-intro.html)
* [Android UIAutomator Framework](http://developer.android.com/tools/help/uiautomator/index.html)
 
 
### Response status codes

 |-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
 |=======================|==========================================================|
 | 201                   | Success                                                  |
 |-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
 |-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
 |-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
 |-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
 |-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
 |-----------------------|----------------------------------------------------------|
 

**Success response:** 

*project Object*
 

**Failure response:**

*error Object*

 
### Example
 
Request:
   
    POST /api/v2/me/projects?name=Hello+world&type=ANDROID
   
Response:
 
    {  
     "id": 31945182,  
     "name": "Hello world",  
     "description": "",  
     "type": "ANDROID",  
     "common": false,  
     "sharedById": null  
    }  


## Get user project

### Request

    GET /api/v2/me/projects/{projectID}  
  
Request body:

|--------------|--------|----------|-----------------------------------------------|
| Name         | Type   | Required | Description                                   |
|==============|========|==========|===============================================|
| projectId    | Number |   yes    | Project ID                                    |
|--------------|--------|----------|-----------------------------------------------|
 
 
### Response status codes

|-----------------------|----------------------------------------------------------|
| HTTP status code      | Reason                                                   |
|=======================|==========================================================|
| 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
| 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
| 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
| 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
| 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:** 

*project Object*
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182
   
Response:
 
    {  
     "id": 31945182,  
     "name": "Hello world",  
     "description": "",  
     "type": "ANDROID",  
     "common": false,  
     "sharedById": null  
    }  
 
 
## Update user project

**Request:**

    POST /api/v2/me/projects/{projectID}  
  
Request body:

|--------------|---------|----------|-----------------------------------------------|
 | Name         | Type    | Required | Description                                   |
|==============+=========+==========+===============================================+
 | projectId    | Number  |   yes    | Project ID                                    |
|--------------|---------|----------|-----------------------------------------------|
 | name         | String  |    no    | New project name                              |
|--------------|---------|----------|-----------------------------------------------| 
 | description  | String  |    no    | New project description                       |
|--------------|---------|----------|-----------------------------------------------|
 | common       | Boolean |    no    | Says if project is available for anyone       |
|--------------|---------|----------|-----------------------------------------------| 

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 202                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:** 

*project Object*
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182?name=Great+project
   
Response:
 
    {  
     "id": 31945182,  
     "name": "Great project",  
     "description": "",  
     "type": "ANDROID",  
     "common": false,  
     "sharedById": null  
    }  
 
 
## Delete user project

**Request:**

    DELETE /api/v2/me/projects/{projectID}  
  
Request body:

|--------------|--------|----------|-----------------------------------------------|
 | Name         | Type   | Required | Description                                   |
|==============+========+==========+===============================================+
 | projectId    | Number |   yes    | Project ID                                    |
|--------------|--------|----------|-----------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    DELETE /api/v2/me/projects/31945182
   
Response:
 
 (empty string)
 
 
## Get list of user projects

**Request:**

    GET /api/v2/me/projects
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of *project Objects*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects
   
Response:
 
   {  
    "next": null,  
    "previous": null,  
    "data": [
          project Object
    ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false  
   } 


Get project icon


Icon extracted from uploaded application

**Request:**

    GET /api/v2/me/projects/{projectID}/icon
  
Request body:

|--------------|--------|----------|-----------------------------------------------|
 | Name         | Type   | Required | Description                                   |
|==============+========+==========+===============================================+
 | projectId    | Number |   yes    | Project ID                                    |
|--------------|--------|----------|-----------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 respurce
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/icon
   
Response:
 
 resource

 
## Project config

**note:** Please remember to put your **access_token** to HTTP **request URL**

### Update project config


**Request:**

    POST /api/v2/me/projects/{projectId}/config
 
  
Request body:

|------------------------|---------|----------|------------------------------------------------------------------------|
 | Name                   | Type    | Required | Description                                                            |
|========================+=========+==========+========================================================================+
 | projectId              | Number  |   yes    | Project ID                                                             |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | scheduler              | String  |    no    | Way of running tests on devices                                        |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | PARALLEL       | *Default* Tests are being fired on all devices        |
 |                        |         |          |                | simultaneously                                        |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | SERIAL         | Tests are being fired one by one                      |
|------------------------|---------|----------|----------------|-------------------------------------------------------|
 | mode                   | String  |    no    | Test run mode                                                          |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | FULL_RUN       | *Android only* *Default* Using your test file         |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | APP_CRAWLER    | *Android only* Using our app crawler                  |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | CTS            | *Android only* Using {{ page.Compatibility_Test_Suite }}      |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | UIAUTOMATOR    | *Android only* Using {{ page.Android_UIAutomator_Framework }} |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | IOS            | *IOS only* *Default* iOS test                         |
|------------------------|---------|----------|----------------|-------------------------------------------------------|
 | autoScreenshots        | Boolean |    no    | *FULL_RUN mode only:* Take screenshots before and after every          |
 |                        |         |          | test-method (by default *false*)                                       |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | screenshotDir          | String  |    no    | Specified device directory where the screenshots will be store         |
 |                        |         |          | (by default *empty string*)                                            |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | limitationType         | String  |    no    | Choose a package or class from instrumentation to test                 |
 |                        |         |          | (by default *null*)                                                    |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | PACKAGE        | Test package                                          |
 |                        |         |         |----------------|-------------------------------------------------------|
 |                        |         |          | CLASS          | Test class                                            |
|------------------------|---------|----------|----------------|-------------------------------------------------------|
 | limitationValue        | String  |    no    | | If *limitationType* is *PACKAGE*: name of package to test            |
 |                        |         |          | | If *limitationType* is *CLASS*: name of class to test                |
 |                        |         |          | | (by default *empty string*)                                          |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | withAnnotation         | String  |    no    | *FULL_RUN mode only:* With annotation filtering (by default *null*)    |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | withoutAnnotation      | String  |    no    | *FULL_RUN mode only:* Without annotation filtering (by default *null*) |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | applicationUsername    | String  |    no    | *APP_CRAWLER mode only:* Username used during authorization            |
 |                        |         |          | (by default *empty string*)                                            |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | applicationPassword    | String  |    no    | *APP_CRAWLER mode only:* Password used during authorization            |
 |                        |         |          | (by default *empty string*)                                            |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | usedDeviceGroupId      | Number  |    no    | Device group ID used to test run. (by default *Free devices* group id) |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | deviceLanguageCode     | String  |    no    | | Language code set to the devices during tests in format *xx_YY*.     |
 |                        |         |          | | *xx* - is ISO Language Code ({{ page.ISO_639-1 }})                           |
 |                        |         |          | | *YY* - is ISO Country Code ({{ page.ISO_3166-1 }})                           |
 |                        |         |          | | See more on {{ page.docs_oracle_com }}                                       |
 |                        |         |          | | (by default *en_US*)                                                 |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | hookURL                | String  |    no    | Page URL which should be notified when test has been completed         |
 |                        |         |          | (by default *empty string*)                                            |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | uiAutomatorTestClasses | String  |   yes*   | *UIAUTOMATOR mode only:* Which classes should be tested (you can give  |
 |                        |         |          | few separating with coma) (by default *null*)                          |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | launchApp              | Boolean |    no    | *UIAUTOMATOR mode only:* Set *true* to launch app on test start        |
 |                        |         |          | (default *false*)                                                      |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | instrumentationRunner  | String  |    no    | *FULL_RUN mode only:* Your class which extends                         |
 |                        |         |          | {{ page.InstrumentationTestRunner }} (by default *empty string*)               |
|------------------------|---------|----------|------------------------------------------------------------------------|
 | checkApp               | Boolean |    no    | Should application be verified by {{ page.codenomicon }} (by default *false*)  |
|------------------------|---------|----------|------------------------------------------------------------------------|

 | * - only for *UIAUTOMATOR* mode
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfig Object
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/config?usedDeviceGroupId=4148
   
Response:
 
    {  
    "id": 31425,
    "projectId": 31945182,  
    "scheduler": "PARALLEL",  
    "mode": "FULL_RUN",  
    "autoScreenshots": false,  
    "runAvailable": true,  
    "screenshotDir": "",  
    "limitationType": null,  
    "limitationValue": "",  
    "withAnnotation": "",  
    "withoutAnnotation": null,  
    "applicationUsername": "",  
    "applicationPassword": "",  
    "usedDeviceGroupId": 4148,  
    "creditsPrice": 0,  
    "deviceLanguageCode": "en_US",  
    "hookURL": "",  
    "uiAutomatorTestClasses": null,  
    "launchApp": false,  
    "instrumentationRunner": "",  
    "checkApp": false    
    }  

### Get project config

**Request:**

    GET /api/v2/me/projects/{projectId}/config
 
  
Request body:

|------------------------|---------|----------|------------------------------------|
 | Name                   | Type    | Required | Description                        |
|========================+=========+==========+====================================+
 | projectId              | Number  |   yes    | Project ID                         |
|------------------------|---------|----------|------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfig Object
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/config
   
Response:
 
    {  
    "id": 31425,  
    "projectId": 31945182,  
    "scheduler": "PARALLEL",  
    "mode": "FULL_RUN",  
    "autoScreenshots": false,  
    "runAvailable": true,  
    "screenshotDir": "",  
    "limitationType": null,  
    "limitationValue": "",  
    "withAnnotation": "",  
    "withoutAnnotation": null,  
    "applicationUsername": "",  
    "applicationPassword": "",  
    "usedDeviceGroupId": 4148,  
    "creditsPrice": 0,  
    "deviceLanguageCode": "en_US",  
    "hookURL": "",  
    "uiAutomatorTestClasses": null,  
    "launchApp": false,  
    "instrumentationRunner": "",  
    "checkApp": false    
    }  


Add user defined config parameter to project


**Request:**

    POST /api/v2/me/projects/{projectId}/config/parameters
 
  
Request body:

|--------------|---------|----------|----------------------------------------------|
 | Name         | Type    | Required | Description                                  |
|==============+=========+==========+==============================================+
 | projectId    | Number  |   yes    | Project ID                                   |
|--------------|---------|----------|----------------------------------------------|
 | key          | String  |   yes    | Parameter key name                           |
|--------------|---------|----------|----------------------------------------------|
 | value        | String  |   yes    | Parameter value                              |
|--------------|---------|----------|----------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfigParameter Object
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/config/parameters?key=devel&value=true
   
Response:
 
    {  
    "id": 1,  
    "key": "devel",  
    "value": "true"    
    }  

## Get list of user defined config parameters for project

**Request:**

    GET /api/v2/me/projects/{projectId}/config/parameters
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `projectConfigParameter Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/config/parameters
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	projectConfigParameter Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false    
    }  
 

### Get user defined config parameter for project

**Request:**

    GET /api/v2/me/projects/{projectId}/config/parameters/{parameterId}  
 
  
Request body:

|------------------------|---------|----------|------------------------------------|
 | Name                   | Type    | Required | Description                        |
|========================+=========+==========+====================================+
 | projectId              | Number  |   yes    | Project ID                         |
|------------------------|---------|----------|------------------------------------|
 | parameterId            | Number  |   yes    | Parameter ID                       |
|------------------------|---------|----------|------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfigParameter Object *
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/config/parameters/1
   
Response:
 
    {  
    "id": 1,  
    "key": "devel",  
    "value": "true"    
    } 

 
Delete user defined config parameter for project


**Request:**

    DELETE /api/v2/me/projects/{projectId}/config/parameters/{parameterId}  
 
  
Request body:

|------------------------|---------|----------|------------------------------------|
 | Name                   | Type    | Required | Description                        |
|========================+=========+==========+====================================+
 | projectId              | Number  |   yes    | Project ID                         |
|------------------------|---------|----------|------------------------------------|
 | parameterId            | Number  |   yes    | Parameter ID                       |
|------------------------|---------|----------|------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    DELETE /api/v2/me/projects/31945182/config/parameters/1
   
Response:
 
 (empty string)
 
 
## Project files

**note:** Please remember to put your **access_token** to HTTP **request URL**
 
Upload application file


**note:** Resources which are used for uploading files must have HTTP header set *Content-Type: multipart/form-data*

**Request:**

    POST /api/v2/me/projects/{projectId}/files/application
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | file         | Resource |   yes    | File to be uploaded                         |
|--------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

file Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/files/application
   
Response:
 
    {  
    "id": 27170,  
    "originalName": "BitbarSampleApp.apk",  
    "readableSize": "4.9 MB",  
    "uploadTime": 1383042074000    
    }  

 
### Download application file

**Request:**

    GET /api/v2/me/projects/{projectId}/files/application
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/files/application
   
Response:
 
 resource
 

Upload data file


**note:** Resources which are used for uploading files must have HTTP header set *Content-Type: multipart/form-data*

Data file should be ZIP package. Data from package will be extraced to device SD card.

**Request:**

    POST /api/v2/me/projects/{projectId}/files/data
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | file         | Resource |   yes    | File to be uploaded                         |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

file Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/files/application
   
Response:
 
    {  
    "id": 27212,  
    "originalName": "BitbarSampleAppData.zip",  
    "readableSize": "2 MB",  
    "uploadTime": 1383831059589    
    }  

 
### Download data file

**Request:**

    GET /api/v2/me/projects/{projectId}/files/data
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/files/data
   
Response:
 
 resource`
 

Upload test file


**note:** Resources which are used for uploading files must have HTTP header set *Content-Type: multipart/form-data*

**Request:**

    POST /api/v2/me/projects/{projectId}/files/test
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | file         | Resource |   yes    | File to be uploaded                         |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

fileTest Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/files/test
   
Response:
 
    {  
    "id": 27171,  
    "originalName": "BitbarSampleAppTest.apk",  
    "readableSize": "82 KB",  
    "uploadTime": 1383045389000,  
    "mainActivity": null,  
    "minSdk": 4,  
    "packageName": "com.bitbar.testdroid.test"    
    }  
 
 
### Download test file

**Request:**

    GET /api/v2/me/projects/{projectId}/files/test
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/files/test
   
Response:
 
 resource
 
 
Download all uploaded files


**Request:**

    GET /api/v2/me/projects/{projectId}/files.zip
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/files.zip
   
Response:
 
 resource

 
## Project sharing

This feature allows you to share your project with another Testdroid Cloud user.

**note:** Please remember to put your **access_token** to HTTP **request URL**

Create new share 


**Request:**

    POST /api/v2/me/projects/{projectId}/sharings
  
Request body:

|--------------|----------|----------|------------------------------------------------|
 | Name         | Type     | Required | Description                                    |
|==============+==========+==========+================================================+
 | projectId    | Number   |   yes    | Project ID                                     |
|--------------|----------|----------|------------------------------------------------| 
 | email        | String   |   yes    | Testdroid Cloud user e-mail                    |
|--------------|----------|----------|------------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

share Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/sharings?email=example@bitbar.com
   
Response:
 
    {  
    "id": 173,  
    "userId": 278815,  
    "userEmail": "shared.email  @bitbar.com"  
    }  


## Get list of project sharings

**Request:**

    GET /api/v2/me/projects/{projectId}/sharings
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------| 
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `share Objects `


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/sharings
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	share Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false    
    }  


### Get project share

**Request:**

    GET /api/v2/me/projects/{projectId}/sharings/{sharingId}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | projectId     | Number   |   yes    | Project ID                                  |
|---------------|----------|----------|---------------------------------------------|
 | sharingId     | Number   |   yes    | Share ID                                    |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

share Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31981820/sharings/173
   
Response:
 
    {  
    "id": 173,  
    "userId": 278815,  
    "userEmail": "shared.email  @bitbar.com"  
    }  
 
 
Delete project share


**Request:**

    DELETE /api/v2/me/projects/{projectId}/sharings/{sharingId}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | projectId     | Number   |   yes    | Project ID                                  |
|---------------|----------|----------|---------------------------------------------|
 | sharingId     | Number   |   yes    | Share ID                                    |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    DELETE /api/v2/me/projects/31981820/sharings/173
   
Response:
 
 (empty string)


## Test run basics

**note:** Please remember to put your **access_token** to HTTP **request URL**
 
### Start new test run

**Request:**

    POST /api/v2/me/projects/{projectId}/runs
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | name         | String   |   yes    | Test run name                               |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

testRun Object *
 
**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/runs
   
Response:
 
    {  
    "id": 31945210,  
    "number": 1,  
    "createTime": 1383052550308,  
    "displayName": "First run",  
    "executionRatio": null,  
    "successRatio": null,  
    "startedByDisplayName": "Mr Testrunner",  
    "state": "WAITING",  
    "screenshotZipState": "BLANK"    
    }  

 
### Get user test run

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

testRun Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210
   
Response:
 
    {  
    "id": 31945210,  
    "number": 1,  
    "createTime": 1383052550308,  
    "displayName": "First run",  
    "executionRatio": null,  
    "successRatio": null,  
    "startedByDisplayName": "Mr Testrunner",  
    "state": "WAITING",  
    "screenshotZipState": "BLANK"    
    }  
 
 
Update user test run


**Request:**

    POST /api/v2/me/projects/{projectId}/runs/{runId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | name         | String   |   yes    | Test run name                               |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 202                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

testRun Object *
 
**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/runs/31949792?name=New+run+name
   
Response:
 
    {  
    "id": 31945210,  
    "number": 1,  
    "createTime": 1383052550308,  
    "displayName": "New run name",  
    "executionRatio": null,  
    "successRatio": null,  
    "startedByDisplayName": "Mr Testrunner",  
    "state": "FINISHED",  
    "screenshotZipState": "BLANK"    
    }  

 
Delete user test run


**Request:**

    DELETE /api/v2/me/projects/{projectId}/runs/{runId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)

 
**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    DELETE /api/v2/me/projects/31945182/runs/31949792
   
Response:
 
 (empty string)

 
## Get list of user test runs

**Request:**

    GET /api/v2/me/runs
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `testRun Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/runs
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	testRun Object,
	testRun Object,
	testRun Object,
	testRun Object,
	testRun Object,
	testRun Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 6,  
    "search": "",  
    "sort": "",  
    "empty": false    
    } 

 
## Get list of user test runs in project

**Request:**

    GET /api/v2/me/projects/{projectId}/runs
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `testRun Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	testRun Object,
	testRun Object,
	testRun Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 3,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  

 
# Test run device runs


**Note:** Please remember to put your **access_token** to HTTP **request URL**
  
## Get list of device runs in test run

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `deviceRun Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	deviceRun Object,
	deviceRun Object,
	deviceRun Object,
	deviceRun Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 4,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  


### Get device run in test run

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

deviceRun Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802
   
Response:
 
    {  
    "id": 31949802,  
    "runTime": 1383570817000,  
    "device": device Object,  
    "testCaseSuccessNo": 6,  
    "testCaseAllNo": 6,  
    "testCaseCount": 6,  
    "softwareVersion": softwareVersion Object,  
    "createTime": 1383570570000,  
    "startTime": 1383570574000,  
    "currentState": state Object,  
    "interruptedByState": null,  
    "runStatus": "SUCCEEDED"    
    }  

 
### Download device run junit.xml file

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}/junit.xml
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (resource)


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/junit.xml
   
Response:
 
 (resource)


### Download device run logs file

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}/logs
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (resource)


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/logs
   
Response:
 
 (resource)

 
## Get list of device run performance

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}/performance
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 Array of `performanceItem Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/performance
   
Response:
 
 [
  performanceItem Object,
  performanceItem Object,
  performanceItem Object,
  performanceItem Object
 ]


## Get list of device run screenshots

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/screenshots
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `screenshot Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/screenshots
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	screenshot Object,
	screenshot Object,
	screenshot Object  
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 3,  
    "search": "",  
    "sort": "",  
    "empty": false    
    }  


### Get device run screenshot

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/screenshots/{screenshotId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|
 | screenshotId | Number   |   yes    | Screenshot ID                               |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

screenshot Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/screenshots/31950177
   
Response:
 
    {  
    "id": 31950177,  
    "originalName": "com.bitbar.moviestests.MoviesTesting.testDetailTabs_scr_1.png",  
    "fail": false,  
    "type": "PORTRAIT"    
    }  

 
## Get list of device run states

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}/states
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `state Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/states
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	state Object,
	state Object,
	state Object,
	state Object,
	state Object,
	state Object,
	state Object  
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 7,  
    "search": "",  
    "sort": "",  
    "empty": false    
    }  


Get device run state


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/device-runs/{deviceRunId}/states/{stateId}  
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | deviceRunId  | Number   |   yes    | Device run ID                               |
|--------------|----------|----------|---------------------------------------------|
 | stateId      | Number   |   yes    | State ID                                    |
|--------------|----------|----------|---------------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

state Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31945210/device-runs/31949802/states/4717188
   
Response:
 
    {  
    "id": 4717188,  
    "deviceRunId": 31949802,  
    "startTimeMS": 1383570817797,  
    "finishTimeMS": 1383570829052,  
    "retryTime": null,  
    "failReason": null,  
    "status": "SUCCEEDED",  
    "deviceRunStateType": "RESULTS_PROCESSING"    
    }  
 
 
# Test run config

**note:** Please remember to put your **access_token** to HTTP **request URL**

Get test run config


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/config
 
  
Request body:

|------------------------|---------|----------|------------------------------------|
 | Name                   | Type    | Required | Description                        |
|========================+=========+==========+====================================+
 | projectId              | Number  |   yes    | Project ID                         |
|------------------------|---------|----------|------------------------------------|
 | runId                  | Number  |   yes    | Run ID                             |
|------------------------|---------|----------|------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfig Object *
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/config
   
Response:
 
    {  
    "id": 31425,  
    "projectId": 31945182,  
    "scheduler": "PARALLEL",  
    "mode": "FULL_RUN",  
    "autoScreenshots": false,  
    "runAvailable": true,  
    "screenshotDir": "",  
    "limitationType": null,  
    "limitationValue": "",  
    "withAnnotation": "",  
    "withoutAnnotation": null,  
    "applicationUsername": "",  
    "applicationPassword": "",  
    "usedDeviceGroupId": 4148,  
    "creditsPrice": 0,  
    "deviceLanguageCode": "en_US",  
    "hookURL": "",  
    "uiAutomatorTestClasses": null,  
    "launchApp": false,  
    "instrumentationRunner": "",  
    "checkApp": false  
    }  


## Get list of user defined config parameters used in test run

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/config/parameters
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object*
  *data* field in this object is array of `projectConfigParameter Objects *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/config/parameters
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	projectConfigParameter Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  
 

### Get user defined config parameter used in test run

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/config/parameters/{parameterId}  
 
  
Request body:

|------------------------|---------|----------|------------------------------------|
 | Name                   | Type    | Required | Description                        |
|========================+=========+==========+====================================+
 | projectId              | Number  |   yes    | Project ID                         |
|------------------------|---------|----------|------------------------------------|
 | runId                  | Number  |   yes    | Run ID                             |
|------------------------|---------|----------|------------------------------------|
 | parameterId            | Number  |   yes    | Parameter ID                       |
|------------------------|---------|----------|------------------------------------|

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

projectConfigParameter Object *
 

**Failure response:**

*error Object*

 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/config/parameters/1
   
Response:
 
    {  
    "id": 1,  
    "key": "devel",  
    "value": "true"  
    }  
 

## Test run files

**note:** Please remember to put your **access_token** to HTTP **request URL**

### Download test run application file

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/files/application
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/files/application
   
Response:
 
 resource

 
Download test run data file


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/files/data
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/files/data
   
Response:
 
 resource`
 
 
Download test run test file


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/files/test
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/files/test
   
Response:
 
 resource
 
 
Download all test run files


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/files.zip
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 *resource*


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/files.zip
   
Response:
 
 resource
 
 
## Test run tagging

This feature allows you to tag your test runs which can increase order
and speed up finding tests.

**note:** Please remember to put your **access_token** to HTTP **request URL**

### Create new tag

**Request:**

    POST /api/v2/me/projects/{projectId}/runs/{runId}/tags
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------| 
 | name         | String   |   yes    | Tag name                                    |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

tag Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/runs/31949792/tags?name=important
   
Response:
 
    {  
    "id": 32058490,  
    "name": "important"  
    }  


## Get list of test run tags

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/tags
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Run ID                                      |
|--------------|----------|----------|---------------------------------------------| 
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `tag Objects `


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/tags
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	tag Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  


Get test run tag


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runId}/tags/{tagId}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | projectId     | Number   |   yes    | Project ID                                  |
|---------------|----------|----------|---------------------------------------------|
 | runId         | Number   |   yes    | Run ID                                      |
|---------------|----------|----------|---------------------------------------------| 
 | tagId         | Number   |   yes    | Tag ID                                      |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

tag Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31981820/runs/31949792/tags/32058490
   
Response:
 
    {  
    "id": 32058490,  
    "name": "important"  
    }  
 
 
Delete test run tag


**Request:**

    DELETE /api/v2/me/projects/{projectId}/runs/{runId}/tags/{tagId}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | projectId     | Number   |   yes    | Project ID                                  |
|---------------|----------|----------|---------------------------------------------|
 | runId         | Number   |   yes    | Run ID                                      |
|---------------|----------|----------|---------------------------------------------| 
 | tagId         | Number   |   yes    | Tag ID                                      |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    DELETE /api/v2/me/projects/31981820/runs/31949792/tags/32058490
   
Response:
 
 (empty string)
 
 
## Test run results

**note:** Please remember to put your **access_token** to HTTP **request URL**
 
### Get summary report

**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runID}/reports/summary
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | type         | String   |   yes    | Report presentation type                    |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | HTML        | ZIPed HTML report             |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | PDF         | Nice PDF report               |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | CSV         | Get report data in CSV format |
|--------------|----------|----------|-------------|-------------------------------|
 | preview      | Boolean  |   no     | Set *true* to get fast but short report.    |
 |              |          |          | Note that the full report can be generated  |
 |              |          |          | much longer. (by default *false*)           |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 File according to the selected *type*
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/reports/summary?type=PDF
   
Response:
 
 PDF file
 
 
Get summary report for whole project


**Request:**

    GET /api/v2/me/projects/{projectId}/reports/summary
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | type         | String   |   yes    | Report presentation type                    |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | HTML        | ZIPed HTML report             |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | PDF         | Nice PDF report               |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | CSV         | Get report data in CSV format |
|--------------|----------|----------|-------------|-------------------------------|
 | preview      | Boolean  |   no     | Set *true* to get fast but short report.    |
 |              |          |          | Note that the full report can be generated  |
 |              |          |          | much longer. (by default *false*)           |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 File according to the selected *type*
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/reports/summary?type=PDF
   
Response:
 
 PDF file

 
Get failures report


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runID}/reports/failures
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | type         | String   |   yes    | Report presentation type                    |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | HTML        | ZIPed HTML report             |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | PDF         | Nice PDF report               |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | CSV         | Get report data in CSV format |
|--------------|----------|----------|-------------|-------------------------------|
 | preview      | Boolean  |   no     | Set *true* to get fast but short report.    |
 |              |          |          | Note that the full report can be generated  |
 |              |          |          | much longer. (by default *false*)           |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 File according to the selected *type*
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/reports/failures?type=PDF
   
Response:
 
 PDF file

 
Get detailed failures report


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runID}/reports/detail-failures
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 | type         | String   |   yes    | Report presentation type                    |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | HTML        | ZIPed HTML report             |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | PDF         | Nice PDF report               |
 |              |          |         |-------------|-------------------------------|
 |              |          |          | CSV         | Get report data in CSV format |
|--------------|----------|----------|-------------|-------------------------------|
 | preview      | Boolean  |   no     | Set *true* to get fast but short report.    |
 |              |          |          | Note that the full report can be generated  |
 |              |          |          | much longer. (by default *false*)           |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 File according to the selected *type*
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/reports/detail-failures?type=PDF
   
Response:
 
 PDF file


Request generate screenshots 


**Request:**

    POST /api/v2/me/projects/{projectId}/runs/{runID}/screenshots.zip
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**See also:**
   Please check *screenshotZipState* property of test run.
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/runs/31949792/screenshots.zip
   
Response:
 
 (empty string) 

 
Get screenshots


**Request:**

    GET /api/v2/me/projects/{projectId}/runs/{runID}/screenshots.zip
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | runId        | Number   |   yes    | Test run ID                                 |
|--------------|----------|----------|---------------------------------------------|
 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (resource)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/runs/31949792/screenshots.zip
   
Response:
 
 (resource)
 
 
 
## Device Groups

**note:** Please remember to put your **access_token** to HTTP **request URL**
 
Create new user device group


**Request:**

    POST /api/v2/me/device-groups
  
Request body:

|--------------|--------|----------|-----------------------------------------------|
 | Name         | Type   | Required | Description                                   |
|==============+========+==========+===============================================+
 | name         | String |   yes    | New device group name                         |
|--------------|--------|----------|-----------------------------------------------|
 | osType       | String |   yes    | New device group OS type                      | 
 |              |        |         |----------------|------------------------------|
 |              |        |          | ANDROID        | Android device group         |
 |              |        |         |----------------|------------------------------|
 |              |        |          | IOS            | iOS device group             |
|--------------|--------|----------|----------------|------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

deviceGroup Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/device-groups?name=Crash+test+group&osType=ANDROID
   
Response:
 
    {  
    "id": 4148,  
    "name": "2013  -10-31_12:42:52.349_7de7edf7c7",
    "displayName": "Crash test group",  
    "deviceCount": 0,  
    "creditsPrice": 0,  
    "userId": 31595291,  
    "osType": "ANDROID"  
    }  
 
 
## Get list of user device groups

**Request:**

    GET /api/v2/me/device-groups
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `deviceGroup Objects `
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/device-groups
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
    deviceGroup Object,
    deviceGroup Object,
    deviceGroup Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 3,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  

 
## Get list of user device groups for project

**Request:**

    GET /api/v2/me/projects/{projectId}/device-groups
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectID    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `deviceGroup Objects `
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/device-groups
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
    deviceGroup Object,
    deviceGroup Object,
    deviceGroup Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 3,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  

 
## Get list of public device groups for project

**Request:**

    GET /api/v2/me/projects/{projectId}/public-device-groups
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectID    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------|
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `deviceGroup Objects `
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/public-device-groups
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
    deviceGroup Object,
    deviceGroup Object,
    deviceGroup Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 3,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  
 
 
### Get user device group

**Request:**

    GET /api/v2/me/device-groups/{deviceGroupId}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | deviceGroupId | Number   |   yes    | Device group ID                             |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

deviceGroup Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/device-groups/4148
   
Response:
 
    {  
    "id": 4148,  
    "name": "2013  -10-31_12:42:52.349_7de7edf7c7",
    "displayName": "Crash test group",  
    "deviceCount": 1,  
    "creditsPrice": 0,  
    "userId": 31595291,  
    "osType": "ANDROID"  
    }  
 
 
Update user device group


**Request:**

    POST /api/v2/me/device-groups/{deviceGroupId}  
  
Request body:

|---------------|--------|----------|-----------------------------------------------|
 | Name          | Type   | Required | Description                                   |
|===============+========+==========+===============================================+
 | deviceGroupId | Number |   yes    | Device group ID                               |
|---------------|--------|----------|-----------------------------------------------|
 | name          | String |   yes    | New device group name                         |
|---------------|--------|----------|-----------------------------------------------|
 | osType        | String |   yes    | New device group OS type                      | 
 |               |        |         |----------------|------------------------------|
 |               |        |          | ANDROID        | Android device group         |
 |               |        |         |----------------|------------------------------|
 |               |        |          | IOS            | iOS device group             |
|---------------|--------|----------|----------------|------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 202                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

deviceGroup Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/device-groups/4148?name=New+group+name
   
Response:
 
    {  
    "id": 4148,  
    "name": "2013  -10-31_12:42:52.349_7de7edf7c7",
    "displayName": "New group name",  
    "deviceCount": 1,  
    "creditsPrice": 0,  
    "userId": 31595291,  
    "osType": "ANDROID"  
    }  
 
 
Delete user device group


**Request:**

    DELETE /api/v2/me/device-groups/{deviceGroupId}  
  
Request body:

|---------------|--------|----------|-----------------------------------------------|
 | Name          | Type   | Required | Description                                   |
|===============+========+==========+===============================================+
 | deviceGroupId | Number |   yes    | Device group ID                               |
|---------------|--------|----------|-----------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    DELETE /api/v2/me/device-groups/4148
   
Response:
 
 (empty string)
 
 
Add device to user device group


**Request:**

    POST /api/v2/me/device-groups/{deviceGroupId}/devices
  
Request body:

|---------------|--------|----------|----------------------------------------------|
 | Name          | Type   | Required | Description                                  |
|===============+========+==========+==============================================+
 | deviceGroupId | Number |   yes    | Device group ID                              |
|---------------|--------|----------|----------------------------------------------|
 | id            | Number |   yes    | Device ID                                    | 
|---------------|--------|----------|----------------------------------------------|

 
**See also:** 
   Get list of all devices to check out devices ID

 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/device-groups/4148/devices?id=337
   
Response:
 
 (empty string)

 
## Get list of devices in user device group


**Request:**

    GET /api/v2/me/device-groups/{deviceGroupId}/devices
 
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
  
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `device Objects `
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/device-groups/4148/devices
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
    device Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 1,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  

 
Remove device from user device group


**Request:**

    DELETE /api/v2/me/device-groups/{deviceGroupId}/devices/{deviceId}  
  
Request body:

|---------------|--------|----------|----------------------------------------------|
 | Name          | Type   | Required | Description                                  |
|===============+========+==========+==============================================+
 | deviceGroupId | Number |   yes    | Device group ID                              |
|---------------|--------|----------|----------------------------------------------|
 | deviceId      | Number |   yes    | Device ID                                    | 
|---------------|--------|----------|----------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    DELETE /api/v2/me/device-groups/4148/devices/337
   
Response:
 
 (empty string)
 
 
## Notifications

**note:** Please remember to put your **access_token** to HTTP **request URL**
 
### Add new user notification

**Request:**

    POST /api/v2/me/notifications
  
Request body:

|--------------|----------|----------|------------------------------------------------|
 | Name         | Type     | Required | Description                                    |
|==============+==========+==========+================================================+
 | email        | String   |   yes    | Target e-mail address                          |
|--------------|----------|----------|------------------------------------------------|
 | type         | String   |   yes    | Type of notification                           |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ALWAYS     | Send notification on every event  |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ON_FAILURE | Send notification only on failure |
|--------------|----------|----------|------------|-----------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 201                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

notification Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/notifications?email=example@bitbar.com&type=ALWAYS
   
Response:
 
    {  
    "id": 31981820,  
    "email": "example  @bitbar.com",
    "project": null,  
    "type": "ALWAYS"  
    }  


### Add new user notification for project

**Request:**

    POST /api/v2/me/projects/{projectId}/notifications
  
Request body:

|--------------|----------|----------|------------------------------------------------|
 | Name         | Type     | Required | Description                                    |
|==============+==========+==========+================================================+
 | projectId    | Number   |   yes    | Project ID                                     |
|--------------|----------|----------|------------------------------------------------| 
 | email        | String   |   yes    | Target e-mail address                          |
|--------------|----------|----------|------------------------------------------------|
 | type         | String   |   yes    | Type of notification                           |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ALWAYS     | Send notification on every event  |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ON_FAILURE | Send notification only on failure |
|--------------|----------|----------|------------|-----------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 409                   | Failure: Resource exists                                 |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

notification Object *

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/projects/31945182/notifications?email=example@bitbar.com&type=ALWAYS
   
Response:
 
    {  
    "id": 31981820,  
    "email": "example  @bitbar.com",
    "project": 31945182,  
    "type": "ALWAYS"  
    }  

 
## Get list of user notifications

**Request:**

    GET /api/v2/me/notifications
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `notification Objects `


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/notifications
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	notification Object,
	notification Object
  ],  
    "offset": 0,  
    "limit": 20,  
    "total": 2,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  


## Get list of user notifications for project

**Request:**

    GET /api/v2/me/projects/{projectId}/notifications
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | projectId    | Number   |   yes    | Project ID                                  |
|--------------|----------|----------|---------------------------------------------| 
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `notification Objects `


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/projects/31945182/notifications
   
Response:
 
    {  
    "next": null,  
    "previous": null,  
    "data": [  
	notification Object,
	notification Object
  ],    
    "offset": 0,  
    "limit": 20,  
    "total": 2,  
    "search": "",  
    "sort": "",  
    "empty": false  
    }  


### Get user notification

**Request:**

    GET /api/v2/me/notification/{id}  
  
Request body:

|---------------|----------|----------|---------------------------------------------|
 | Name          | Type     | Required | Description                                 |
|===============+==========+==========+=============================================+
 | id            | Number   |   yes    | Notification ID                             |
|---------------|----------|----------|---------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

notification Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/me/notification/31981820
   
Response:
 
    {  
    "id": 31981820,  
    "email": "marek.sierocinski  @bitbar.com",
    "project": null,  
    "type": "ALWAYS"  
    }  
 
 
Update user notification


**Request:**

    POST /api/v2/me/notification/{id}  
  
Request body:

|--------------|--------|----------|------------------------------------------------|
 | Name         | Type   | Required | Description                                    |
|==============+========+==========+================================================+
 | id           | Number |   yes    | Notification ID                                |
|--------------|--------|----------|------------------------------------------------|
 | type         | String |   yes    | New type of notification                       |
 |              |        |         |------------|-----------------------------------|
 |              |        |          | ALWAYS     | Send notification on every event  |
 |              |        |         |------------|-----------------------------------|
 |              |        |          | ON_FAILURE | Send notification only on failure |
|--------------|--------|----------|------------|-----------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 202                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 400                   | Failure: Data sent in request is invalid                 |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

notification Object *
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    POST /api/v2/me/notification/31981820?type=ON_FAILURE
   
Response:
 
    {  
    "id": 31981820,  
    "email": "example  @bitbar.com",
    "project": null,  
    "type": "ON_FAILURE"  
    }  
 
 
Delete user notification


**Request:**

    DELETE /api/v2/me/notification/{id}  
  
Request body:

|---------------|--------|----------|----------------------------------------------|
 | Name          | Type   | Required | Description                                  |
|===============+========+==========+==============================================+
 | id            | Number |   yes    | Notification ID                              |
|---------------|--------|----------|----------------------------------------------|
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 204                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

 (empty string)
 

**Failure response:**

*error Object*
 
 
**Example:**
 
Request:

    DELETE /api/v2/me/notification/31981820

Response:
 
 (empty string)

 
# Calls available without Authorization

 
## Get list of all devices


**Request:**

    GET /api/v2/devices
  
Request body:

|--------------|----------|----------|---------------------------------------------|
 | Name         | Type     | Required | Description                                 |
|==============+==========+==========+=============================================+
 | offset       | Number   |    no    | Result offset                               |
|--------------|----------|----------|---------------------------------------------|
 | limit        | Number   |    no    | Result limit                                |
|--------------|----------|----------|---------------------------------------------|
 | search       | String   |    no    | Filter: Search for                          |
|--------------|----------|----------|---------------------------------------------|
 | sort         | String   |    no    | Filter: Sort by                             |
|--------------|----------|----------|---------------------------------------------| 
 
**Response status codes:**

|-----------------------|----------------------------------------------------------|
 | HTTP status code      | Reason                                                   |
|=======================+==========================================================+
 | 200                   | Success                                                  |
|-----------------------|----------------------------------------------------------|
 | 403                   | Failure: User is not authorized to access this resource  |
|-----------------------|----------------------------------------------------------|
 | 404                   | Failure: Requested resource not found                    |
|-----------------------|----------------------------------------------------------|
 | 500                   | Failure: Internal error                                  |
|-----------------------|----------------------------------------------------------|
 

**Success response:**

*list Object* 
  *data* field in this object is array of `device Objects `


**Failure response:**

*error Object*
 
 
**Example:**
 
Request:
   
    GET /api/v2/devices?search=Sony
   
Response:
 
    {  
     "next": "https://cloud.testdroid.com/api/v2/devices?offset=20&limit=20&search=Sony&sort=",  
     "previous": null,  
     "data": [  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object,  
   	device Object
     ],    
     "offset": 0,  
     "limit": 20,  
     "total": 21,  
     "search": "Sony",  
     "sort": "",  
     "empty": false
    }  
 
 
API Objects
-----------

**note:**
   | This documentation is currently **under development**.
   | We apologize for the inconvenience and appreciate your patience.

| By default all of the api calls responds in XML format.
| To switch to `JSON`_ format send header *Accept: application/json*.
| **This documentation is using JSON format in examples.**
   
[JSON: http://json.org/](http://json.org/)

# device


**Object body:**

|------------------|--------------------|---------------------------------------------------------|
 | Name             | Type               | Description                                             |
|==================+====================+=========================================================+
 | id               | Number             | Device ID                                               |
|------------------|--------------------|---------------------------------------------------------|
 | displayName      | String             | Device name                                             |
|------------------|--------------------|---------------------------------------------------------|
 | softwareVersion  | `softwareVersion`_ | Software version                                        |
|------------------|--------------------|---------------------------------------------------------|
 | creditsPrice     | Number             | Credits price for running test on this device           |
|------------------|--------------------|---------------------------------------------------------|
 | imagePrefix      | String             | Prefix for image URL generation                         |
|------------------|--------------------|---------------------------------------------------------|
 | imageTop         | Number             | Device screen position: distance from top in pixels     |
|------------------|--------------------|---------------------------------------------------------|
 | imageLeft        | Number             | Device screen position: distance from left in pixels    |
|------------------|--------------------|---------------------------------------------------------|
 | imageWidth       | Number             | Device screen size: width in pixels                     |
|------------------|--------------------|---------------------------------------------------------|
 | imageHeight      | Number             | Device screen size: height in pixels                    |
|------------------|--------------------|---------------------------------------------------------|
 | frameExtraWidth  | Number             | All device screen frame calculations are made for 250px |
 |                  |                    | width. But when device image is bigger than usual       |
 |                  |                    | calculations are made for this width. (default *null*)  |
|------------------|--------------------|---------------------------------------------------------|
 | osType           | String             | Operating System type                                   |
 |                  |                   |---------|-----------------------------------------------|
 |                  |                    | ANDROID | Android                                       |
 |                  |                   |---------|-----------------------------------------------| 
 |                  |                    | IOS     | iOS                                           |
|------------------|--------------------|---------|-----------------------------------------------|
 | frame80Url       | String             | URL to device image (80px height)                       |
|------------------|--------------------|---------------------------------------------------------|
 | frame100Url      | String             | URL to device image (100px height)                      |
|------------------|--------------------|---------------------------------------------------------|
 | frame160Url      | String             | URL to device image (160px height)                      |
|------------------|--------------------|---------------------------------------------------------|
 | frame400Url      | String             | URL to device image (400px height)                      |
|------------------|--------------------|---------------------------------------------------------|
 
 
**Example:**

    {  
    "id": 304,    
    "displayName": "Sony Xperia Z C6603",    
    "softwareVersion": softwareVersion Object,    
    "creditsPrice": 0,    
    "imagePrefix": "Sony  -Xperia-Z",  
    "imageTop": 40,    
    "imageLeft": 32,    
    "imageWidth": 185,    
    "imageHeight": 340,    
    "frameExtraWidth": null,    
    "osType": "ANDROID",    
    "frame80Url": "https  ://cloud.testdroid.com/resources/images/devices/Sony-Xperia-Z-h80.png",  
    "frame100Url": "https  ://cloud.testdroid.com/resources/images/devices/Sony-Xperia-Z-h100.png",  
    "frame160Url": "https  ://cloud.testdroid.com/resources/images/devices/Sony-Xperia-Z-h160.png",  
    "frame400Url": "https  ://cloud.testdroid.com/resources/images/devices/Sony-Xperia-Z-h400.png"
    }  
 
 
# deviceGroup

**Object body:**

|---------------|---------|-----------------------------------------------------------|
 | Name          | Type    | Description                                               |
|===============+=========+===========================================================+
 | id            | Number  | Device group ID                                           |
|---------------|---------|-----------------------------------------------------------|
 | name          | String  | Device group name                                         |
|---------------|---------|-----------------------------------------------------------|
 | displayName   | String  | Device group dispay name                                  |
|---------------|---------|-----------------------------------------------------------|
 | deviceCount   | Number  | Number of devices in group (by default *0*)               |
|---------------|---------|-----------------------------------------------------------|
 | creditsPrice  | Number  | Using group cost (in credits) (by default *0*)            |
|---------------|---------|-----------------------------------------------------------|
 | userId        | Number  | User ID who created this group                            |
|---------------|---------|-----------------------------------------------------------|
 | osType        | String  | Device group OS type                                      |
|---------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 4148,    
    "name": "2013  -10-31_12:42:52.349_7de7edf7c7",  
    "displayName": "Crash test group",    
    "deviceCount": 0,    
    "creditsPrice": 0,    
    "userId": 31595291,    
    "osType": "ANDROID"  
    }  
 
 
# deviceRun

**Object body:**

|--------------------|--------------------|--------------------------------------------------------------|
 | Name               | Type               | Description                                                  |
|====================+====================+==============================================================+
 | id                 | Number             | Device run ID                                                |
|--------------------|--------------------|--------------------------------------------------------------|
 | runTime            | Number             | Run time in timestamp in milliseconds                        |
|--------------------|--------------------|--------------------------------------------------------------|
 | device             | `device`_          | Device                                                       |
|--------------------|--------------------|--------------------------------------------------------------|
 | deviceName         | String             | Name of physical device on which device run was started      |
|--------------------|--------------------|--------------------------------------------------------------|
 | deviceSerialId     | String             | Serial Id of physical device on which device run was started |
|--------------------|--------------------|--------------------------------------------------------------|
 | testCaseSuccessNo  | String             | Test case number successfully completed (default *0*)        |
|--------------------|--------------------|--------------------------------------------------------------|
 | testCaseAllNo      | Number             | Test case all number (default *0*)                           |
|--------------------|--------------------|--------------------------------------------------------------|
 | testCaseCount      | Number             | Test case count (default *0*)                                |
|--------------------|--------------------|--------------------------------------------------------------|
 | softwareVersion    | `softwareVersion`_ | Software version                                             |
|--------------------|--------------------|--------------------------------------------------------------|
 | createTime         | Number             | Create time in timestamp in milliseconds                     |
|--------------------|--------------------|--------------------------------------------------------------|
 | startTime          | Number             | Start time in timestamp in milliseconds (by default *null*)  |
|--------------------|--------------------|--------------------------------------------------------------|
 | currentState       | `state`_           | Current state                                                |
|--------------------|--------------------|--------------------------------------------------------------|
 | interruptedByState | `state`_           | State that interrupted test (default *null*)                 |
|--------------------|--------------------|--------------------------------------------------------------|
 | runStatus          | String             | Run status                                                   |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | WAITING   | Waiting                                          |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | RUNNING   | Running                                          |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | EXCLUDED  | Excluded automatically by the system             |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | WARNING   | Completed: Succeeded with warning                |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | FAILED    | Completed: Failed                                |
 |                    |                   |-----------|--------------------------------------------------|
 |                    |                    | SUCCEEDED | Completed: Succeeded                             |
|--------------------|--------------------|-----------|--------------------------------------------------|


**Example:**

    {  
    "id": 31949802,    
    "runTime": 1383570817000,    
    "device": device Object,    
    "deviceName": "",    
    "deviceSerialId": "",    
    "testCaseSuccessNo": 6,    
    "testCaseAllNo": 6,    
    "testCaseCount": 6,    
    "softwareVersion": softwareVersion Object,    
    "createTime": 1383570570000,    
    "startTime": 1383570574000,    
    "currentState": state Object,    
    "interruptedByState": null,    
    "runStatus": "SUCCEEDED"  
    }  


# error

**Object body:**

|---------------|---------|-----------------------------------------------------------|
 | Name          | Type    | Description                                               |
|===============+=========+===========================================================+
 | statusCode    | Number  | HTTP status code                                          |
|---------------|---------|-----------------------------------------------------------|
 | message       | String  | Error message                                             |
|---------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "statusCode": 401,    
    "message": "Full authentication is required to access this resource"  
    }  
 

# file

**Object body:**

|---------------|---------|-----------------------------------------------------------|
 | Name          | Type    | Description                                               |
|===============+=========+===========================================================+
 | id            | Number  | Application file ID                                       |
|---------------|---------|-----------------------------------------------------------|
 | originalName  | String  | Original file name                                        |
|---------------|---------|-----------------------------------------------------------|
 | readableSize  | String  | Readable file size                                        |
|---------------|---------|-----------------------------------------------------------|
 | uploadTime    | Number  | File upload time in timestamp in milliseconds             |
|---------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 27170,    
    "originalName": "BitbarSampleApp.apk",    
    "readableSize": "4.9 MB",    
    "uploadTime": 1383042074000  
    }  
 
 
# fileTest

**Object body:**

|------------------|---------|-----------------------------------------------------------|
 | Name             | Type    | Description                                               |
|==================+=========+===========================================================+
 | id               | Number  | File ID                                                   |
|------------------|---------|-----------------------------------------------------------|
 | originalName     | String  | Original file name                                        |
|------------------|---------|-----------------------------------------------------------|
 | readableSize     | String  | Readable file size                                        |
|------------------|---------|-----------------------------------------------------------|
 | uploadTime       | Number  | File upload time in timestamp in milliseconds             |
|------------------|---------|-----------------------------------------------------------|
 | minSdk           | Number  | *Android only:* Min SDK version                           |
|------------------|---------|-----------------------------------------------------------|
 | packageName      | String  | *Android only:* Package name                              |
|------------------|---------|-----------------------------------------------------------|
 | mainActivity     | String  | *Android only:* Main activity name                        |
|------------------|---------|-----------------------------------------------------------|
 | bundleName       | String  | *iOS only:* Bundle display name                           |
|------------------|---------|-----------------------------------------------------------|
 | bundleIdentifier | String  | *iOS only:* Bundle identifier                             |
|------------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 27171,    
    "originalName": "BitbarSampleAppTest.apk",    
    "readableSize": "82 KB",    
    "uploadTime": 1383045389000,    
    "mainActivity": null,    
    "minSdk": 4,    
    "packageName": "com.bitbar.testdroid.test"  
    }  
 
 
# list

**Object body:**

|-----------|------------------------|----------------------------------------------------------------|
 | Name      | Type                   | Description                                                    |
|===========+========================+================================================================+
 | next      | String                 | URL to next page of results (by default *null*)                |
|-----------|------------------------|----------------------------------------------------------------|
 | previous  | String                 | URL to previous page of results (by default *null*)            |
|-----------|------------------------|----------------------------------------------------------------|
 | data      | Array of Objects       | List of requested Objects. E.g. Array of `devices`  |
|-----------|------------------------|----------------------------------------------------------------|
 | offset    | Number                 | Result offset (by default *0*)                                 |
|-----------|------------------------|----------------------------------------------------------------|
 | limit     | Number                 | Result limit (by default *20*)                                 |
|-----------|------------------------|----------------------------------------------------------------|
 | total     | Number                 | Total number of devices                                        |
|-----------|------------------------|----------------------------------------------------------------|
 | search    | String                 | Filter: Search for (by default *empty string*)                 |
|-----------|------------------------|----------------------------------------------------------------|
 | sort      | String                 | Filter: Sort by (by default *empty string*)                    |
|-----------|------------------------|----------------------------------------------------------------|
 | empty     | Boolean                | *True* if there are no items in results (by default *false*)   |
|-----------|------------------------|----------------------------------------------------------------|
 
**Example:**

    {  
    "next": null,    
    "previous": null,    
    "data": [  
	Object,  
	Object,  
	Object,  
	Object
  ],    
    "offset": 0,    
    "limit": 20,    
    "total": 4,    
    "search": "",    
    "sort": "",    
    "empty": false  
    }  


# notification

**Object body:**

|--------------|----------|-----------------------------------------------------------|
 | Name         | Type     | Description                                               |
|==============+==========+===========================================================+
 | id           | Number   | Notification ID                                           |
|--------------|----------|-----------------------------------------------------------|
 | email        | String   | Target e-mail address                                     |
|--------------|----------|-----------------------------------------------------------|
 | project      | Number   | Project ID. If *null* then notification applies all       |
 |              |          | projects (by default *null*)                              |
|--------------|----------|----------|------------------------------------------------|
 | type         | String   |   yes    | Type of notification                           |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ALWAYS     | Send notification on every event  |
 |              |          |         |------------|-----------------------------------|
 |              |          |          | ON_FAILURE | Send notification only on failure |
|--------------|----------|----------|------------|-----------------------------------| 
 
**Example:**

    {  
    "id": 31981820,    
    "email": "marek.sierocinski  @bitbar.com",  
    "project": null,    
    "type": "ALWAYS"  
    }  


# performanceItem

**Object body:**

|---------------|---------|--------------------------------------------------------------|
 | Name          | Type    | Description                                                  |
|===============+=========+==============================================================+
 | packageName   | String  | Package name                                                 |
|---------------|---------|--------------------------------------------------------------|
 | cpuUsage      | Number  | CPU usage (value is float from range 0 .. 1)                 |
|---------------|---------|--------------------------------------------------------------|
 | timestamp     | Number  | Time in timestamp in milliseconds                            |
|---------------|---------|--------------------------------------------------------------| 
 | memUsage      | Number  | Memory usage in KB unit                                      |
|---------------|---------|--------------------------------------------------------------|
 
 
**Example:**

    {  
    "packageName": "com.bitbar.movies",    
    "cpuUsage": 0.1,    
    "timestamp": 1383570799261,    
    "memUsage": 14216  
    }  

 
# project

**Object body:**

|---------------|---------|--------------------------------------------------------------|
 | Name          | Type    | Description                                                  |
|===============+=========+==============================================================+
 | id            | Number  | Project ID                                                   |
|---------------|---------|--------------------------------------------------------------|
 | name          | String  | Project name                                                 |
|---------------|---------|--------------------------------------------------------------|
 | description   | String  | Project description (by default *empty string*)              |
|---------------|---------|--------------------------------------------------------------|
 | type          | String  | Project type                                                 |
|---------------|---------|--------------------------------------------------------------|
 | common        | Boolean | Says if project is available for anyone (by default *false*) |
|---------------|---------|--------------------------------------------------------------|
 | sharedById    | Number  | User ID sharing project (by default *null*)                  |
|---------------|---------|--------------------------------------------------------------| 

**Example:**

    {  
    "id": 31945182,    
    "name": "Hello world",    
    "description": "",    
    "type": "ANDROID",    
    "common": false,    
    "sharedById": null  
    }  
 
 
 
# projectConfig

**Object body:**

|------------------------|---------|------------------------------------------------------------------------|
 | Name                   | Type    | Description                                                            |
|========================+=========+========================================================================+
 | projectId              | Number  | Project ID                                                             |
|------------------------|---------|------------------------------------------------------------------------|
 | scheduler              | String  | Way of running tests on devices                                        |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | PARALLEL       | *Default* Tests are being fired on all devices        |
 |                        |         |                | simultaneously                                        |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | SERIAL         | Tests are being fired one by one                      |
|------------------------|---------|----------------|-------------------------------------------------------|
 | mode                   | String  | Test run mode                                                          |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | FULL_RUN       | *Android only* *Default* Using your test file         |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | APP_CRAWLER    | *Android only* Using our app crawler                  |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | CTS            | *Android only* Using {{ page.Compatibility_Test_Suite }}      |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | UIAUTOMATOR    | *Android only* Using {{ page.Android_UIAutomator_Framework }} |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | IOS            | *IOS only* *Default* iOS test                         |
|------------------------|---------|----------------|-------------------------------------------------------|
 | autoScreenshots        | Boolean | *FULL_RUN mode only:* Take screenshots before and after every          |
 |                        |         | test-method (by default *false*)                                       |
|------------------------|---------|----------------|-------------------------------------------------------|
 | runAvailable           | Boolean | Simple way to check if test tun can be started on this project         |
|------------------------|---------|------------------------------------------------------------------------|
 | screenshotDir          | String  | Specified device directory where the screenshots will be store         |
 |                        |         | (by default *empty string*)                                            |
|------------------------|---------|------------------------------------------------------------------------|
 | limitationType         | String  | Choose a package or class from instrumentation to test                 |
 |                        |         | (by default *null*)                                                    |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | PACKAGE        | Test package                                          |
 |                        |        |----------------|-------------------------------------------------------|
 |                        |         | CLASS          | Test class                                            |
|------------------------|---------|----------------|-------------------------------------------------------|
 | limitationValue        | String  | | If *limitationType* is *PACKAGE*: name of package to test            |
 |                        |         | | If *limitationType* is *CLASS*: name of class to test                |
 |                        |         | | (by default *empty string*)                                          |
|------------------------|---------|------------------------------------------------------------------------|
 | withAnnotation         | String  | *FULL_RUN mode only:* With annotation filtering (by default *null*)    |
|------------------------|---------|------------------------------------------------------------------------|
 | withoutAnnotation      | String  | *FULL_RUN mode only:* Without annotation filtering (by default *null*) |
|------------------------|---------|------------------------------------------------------------------------|
 | applicationUsername    | String  | *APP_CRAWLER mode only:* Username used during authorization            |
 |                        |         | (by default *empty string*)                                            |
|------------------------|---------|------------------------------------------------------------------------|
 | applicationPassword    | String  | *APP_CRAWLER mode only:* Password used during authorization            |
 |                        |         | (by default *empty string*)                                            |
|------------------------|---------|------------------------------------------------------------------------|
 | usedDeviceGroupId      | Number  | Device group ID used to test run. (by default *Free devices* group id) |
|------------------------|---------|------------------------------------------------------------------------|
 | deviceLanguageCode     | String  | | Language code set to the devices during tests in format *xx_YY*.     |
 |                        |         | | *xx* - is ISO Language Code ({{ page.ISO_639-1 }})                           |
 |                        |         | | *YY* - is ISO Country Code ({{ page.ISO_3166-1 }})                           |
 |                        |         | | See more on {{ page.docs_oracle_com }}                                       |
 |                        |         | | (by default *en_US*)                                                 |
|------------------------|---------|------------------------------------------------------------------------|
 | hookURL                | String  | Page URL which should be notified when test has been completed         |
 |                        |         | (by default *empty string*)                                            |
|------------------------|---------|------------------------------------------------------------------------|
 | uiAutomatorTestClasses | String  | *UIAUTOMATOR mode only:* Which classes should be tested (you can give  |
 |                        |         | few separating with coma) (by default *null*)                          |
|------------------------|---------|------------------------------------------------------------------------|
 | launchApp              | Boolean | *UIAUTOMATOR mode only:* Set *true* to launch app on test start        |
 |                        |         | (default *false*)                                                      |
|------------------------|---------|------------------------------------------------------------------------|
 | instrumentationRunner  | String  | *FULL_RUN mode only:* Your class which extends                         |
 |                        |         | {{ page.InstrumentationTestRunner }} (by default *empty string*)               |
|------------------------|---------|------------------------------------------------------------------------|
 | checkApp               | Boolean | Should application be verified by {{ page.codenomicon }} (by default *false*)  |
|------------------------|---------|------------------------------------------------------------------------|

 | * - only for *UIAUTOMATOR* mode
 
 
**Example:**

    {  
    "id": 31425,    
    "projectId": 31945182,    
    "scheduler": "PARALLEL",    
    "mode": "FULL_RUN",    
    "autoScreenshots": false,    
    "runAvailable": true,    
    "screenshotDir": "",    
    "limitationType": null,    
    "limitationValue": "",    
    "withAnnotation": "",    
    "withoutAnnotation": null,    
    "applicationUsername": "",    
    "applicationPassword": "",    
    "usedDeviceGroupId": 4148,    
    "creditsPrice": 0,    
    "deviceLanguageCode": "en_US",    
    "hookURL": "",    
    "uiAutomatorTestClasses": null,    
    "launchApp": false,    
    "instrumentationRunner": "",    
    "checkApp": false  
    }  
 
 
# projectConfigParameter

**Object body:**

|--------------|---------|----------------------------------------------|
 | Name         | Type    | Description                                  |
|==============+=========+==============================================+
 | projectId    | Number  | Project ID                                   |
|--------------|---------|----------------------------------------------|
 | key          | String  | Parameter key name                           |
|--------------|---------|----------------------------------------------|
 | value        | String  | Parameter value                              |
|--------------|---------|----------------------------------------------|

**Example:**

    {  
    "id": 1,    
    "key": "devel",    
    "value": "true"  
    }  


# screenshot

**Object body:**

|---------------|---------|--------------------------------------------------------------|
 | Name          | Type    | Description                                                  |
|===============+=========+==============================================================+
 | id            | Number  | Screenshot ID                                                |
|---------------|---------|--------------------------------------------------------------|
 | originalName  | String  | Original screenshot name                                     |
|---------------|---------|--------------------------------------------------------------|
 | fail          | Boolean | Says if screenshot shows test failure                        |
|---------------|---------|--------------------------------------------------------------| 
 | type          | String  | Screenshot orientation type                                  |
 |               |        |-----------------|--------------------------------------------|
 |               |         | PORTRAIT        | Portrait (vertical) orientation            |
 |               |        |-----------------|--------------------------------------------|
 |               |         | LANDSCAPE       | Landscape (horizontal) orientation         |
|---------------|---------|-----------------|--------------------------------------------|
 
**Example:**

    {  
    "id": 31950177,    
    "originalName": "com.bitbar.moviestests.MoviesTesting.testDetailTabs_scr_1.png",    
    "fail": false,    
    "type": "PORTRAIT"  
    }  

 
# share

**Object body:**

|------------------|---------|-----------------------------------------------------------|
 | Name             | Type    | Description                                               |
|==================+=========+===========================================================+
 | id               | Number  | Share ID                                                  |
|------------------|---------|-----------------------------------------------------------|
 | userId           | Number  | Testdroid Cloud user ID                                   |
|------------------|---------|-----------------------------------------------------------|
 | userEmail        | String  | Testdroid Cloud user e-mail address                       |
|------------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 173,    
    "userId": 278815,    
    "userEmail": "shared.email  @bitbar.com"
    }  
 
 
# softwareVersion

**Object body:**

|------------------|---------|-----------------------------------------------------------|
 | Name             | Type    | Description                                               |
|==================+=========+===========================================================+
 | id               | Number  | Object unique ID                                          |
|------------------|---------|-----------------------------------------------------------|
 | releaseVersion   | String  | Release Version                                           |
|------------------|---------|-----------------------------------------------------------|
 | apiLevel         | Number  | API level                                                 |
|------------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 20,    
    "releaseVersion": "4.1.2",    
    "apiLevel": 16  
    }  

 
# state

**Object body:**

|--------------------|---------|--------------------------------------------------------------------|
 | Name               | Type    | Description                                                        |
|====================+=========+====================================================================+
 | id                 | Number  | Object unique ID                                                   |
|--------------------|---------|--------------------------------------------------------------------|
 | deviceRunId        | Number  | Device run ID                                                      |
|--------------------|---------|--------------------------------------------------------------------|
 | startTimeMS        | Number  | Start time in timestamp in milliseconds                            |
|--------------------|---------|--------------------------------------------------------------------|
 | finishTimeMS       | Number  | Finish time in timestamp in milliseconds (by default *null*)       |
|--------------------|---------|--------------------------------------------------------------------|
 | retryTime          | Number  | Retry time in timestamp in milliseconds (by default *null*)        |
|--------------------|---------|--------------------------------------------------------------------|
 | failReason         | String  | Fail reason (by default *null*)                                    |
|--------------------|---------|--------------------------------------------------------------------|
 | status             | String  | Status                                                             |
 |                    |        |---------------|----------------------------------------------------|
 |                    |         | STARTED       | Test has started on device                         |
 |                    |        |---------------|----------------------------------------------------|
 |                    |         | EXCLUDED      | Device has been excluded from test                 |
 |                    |        |---------------|----------------------------------------------------|
 |                    |         | FAILED        | Test on device has failed                          |
 |                    |        |---------------|----------------------------------------------------|
 |                    |         | SUCCEEDED     | Test on device has completed successfully          |
 |                    |        |---------------|----------------------------------------------------|
 |                    |         | NOT_AVAILABLE | Status isn't available for some reason             |
|--------------------|---------|---------------|----------------------------------------------------|
 | deviceRunStateType | String  | Type of device test run state                                      |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | ARSE_LOGCAT                  | Launching application               |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_REBOOTING             | Rebooting device                    |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_REPACKAGING           | Repackaging APKs                    |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_RUNNING               | Running tests                       |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_SDCARD_COPYING        | Retrieving data from SD card        |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_TARGET_INSTALLING     | Installing application              |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_TARGET_UNINSTALLING   | Uninstalling application            |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_TEST_INSTALLING       | Installing test APK                 |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_TEST_UNINSTALLING     | Uninstalling test APK               |
 |                    |        |------------------------------|-------------------------------------| 
 |                    |         | DEVICE_UNINSTALLING_ALL      | Cleaning device for testing         |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_WAITING               | Uploading test data to the device   |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_WIFI_CHECKING         | WI-FI verification                  |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_ADD_PERMISSIONS       | Added permissions in APK's manifest |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_DOWNLOAD_TESTSESSION  | Downloading test session            |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | PREPARING                    | Preparing test run                  |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | RESULTS_PROCESSING           | Processing results                  |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | RESULTS_WAITING              | Downloading results from the device |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | WAITING                      | Waiting in queue for device         |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_UIAUTOMATOR_RUNNING   | Running UIAutomator tests           |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | DEVICE_REMOTECONTROL_RUNNING | Remote control                      |
 |                    |        |------------------------------|-------------------------------------|
 |                    |         | ADB_SHELL_COMMAND            | ADB shell command                   |
|--------------------|---------|------------------------------|-------------------------------------|
 
**Example:**

    {  
    "id": 4711467,    
    "deviceRunId": 31945220,    
    "startTimeMS": 1383052552276,    
    "finishTimeMS": null,    
    "retryTime": null,    
    "failReason": null,    
    "status": "STARTED",    
    "deviceRunStateType": "WAITING"  
    }  


# tag

**Object body:**

|------------------|---------|-----------------------------------------------------------|
 | Name             | Type    | Description                                               |
|==================+=========+===========================================================+
 | id               | Number  | Tag ID                                                    |
|------------------|---------|-----------------------------------------------------------|
 | name             | String  | Tag name                                                  |
|------------------|---------|-----------------------------------------------------------|
 
**Example:**

    {  
    "id": 32058490,    
    "name": "important"  
    }  

 
# testRun

**Object body:**

|----------------------|---------|-----------------------------------------------------------------------------|
 | Name                 | Type    | Description                                                                 |
|======================+=========+=============================================================================+
 | id                   | Number  | Test run ID                                                                 |
|----------------------|---------|-----------------------------------------------------------------------------|
 | number               | Number  | Number of test run in the project                                           |
|----------------------|---------|-----------------------------------------------------------------------------|
 | createTime           | Number  | Test run creation time in timestamp in milliseconds                         |
|----------------------|---------|-----------------------------------------------------------------------------|
 | displayName          | String  | Test run display name                                                       |
|----------------------|---------|-----------------------------------------------------------------------------|
 | executionRatio       | Number  | Execution ratio says what part of selected devices have                     |
 |                      |         | completed tests *(ratio value may be between 0 and 1)*                      |
|----------------------|---------|-----------------------------------------------------------------------------|
 | successRatio         | Number  | Success ratio says what part of selected devices have                       |
 |                      |         | successfully completed tests  *(ratio value may be between 0 and 1)*        | 
|----------------------|---------|-----------------------------------------------------------------------------|
 | startedByDisplayName | String  | Display name of user, who has started test run                              |
|----------------------|---------|-----------------------------------------------------------------------------|
 | state                | String  | Test run state                                                              |
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | WAITING  | All selected devices are waiting in queue                        |
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | FINISHED | All selected devices have finished tests                         | 
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | RUNNING  | In other cases                                                   |
|----------------------|---------|----------|------------------------------------------------------------------|
 | screenshotZipState   | String  | Screenshot package creation state                                           |
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | BLANK    | *Default* Blank package                                          |
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | PROGRESS | Package is currently being generated                             |
 |                      |        |----------|------------------------------------------------------------------|
 |                      |         | READY    | Screenshots are ready to download from:                          | 
 |                      |         |          |  /api/v2/me/projects/{projectId}/runs/{runId}/screenshots.zip    |
|----------------------|---------|----------|------------------------------------------------------------------|
 
**Example:**

    {  
    "id": 31945210,    
    "number": 1,    
    "createTime": 1383052550308,    
    "displayName": "First run",    
    "executionRatio": null,    
    "successRatio": null,    
    "startedByDisplayName": "Mr Testrunner",    
    "state": "WAITING",    
    "screenshotZipState": "BLANK"    
    }  
 

