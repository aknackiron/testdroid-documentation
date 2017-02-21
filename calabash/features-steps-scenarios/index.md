---
layout: default
title: Introduction and Prerequisites
---


## Introduction and Prerequisites

<h1>Scenarios</h1>
A scenario specifies a single behavior or use case within a given feature that is comprised of various Steps. For example, the following scenario describes the behavior of ensuring that a credit card input field has the correct length of digits:

<pre>
Scenario: Run whole app
  Given my app is running
  And I touch the "Start" button
  Then I take picture
  Then I press "More Info"
</pre>

Steps usually begin with one of the keywords <i>Given</i>, <i>When</i>, <i>Then</i>, <i>And</i>, and <i>But</i>, however, they don’t have to, they can use * in place of those keywords. In fact, Cucumber does not distinguish between them (or *). They are instead meant to provide a language hint based on cause and effect to the stakeholders as to what is being described.

As such, simply recognizing their language implications are enough to use them effectively. However for a detailed examination on these keywords, see the [Cucumber Wiki](https://github.com/cucumber/cucumber/wiki/Given-When-Then) entry on them.

<h1>Features</h1>

Feature is rarely defined by a single behavior. For this very reason, Scenarios can be grouped together logically under a Feature Definition. Feature definitions are typically given a name and an optional, short description. For example:

<pre>
Feature: Test the entire app

Scenario: Log in to app
  Given my app is running
  Then I take picture
  Then I use the native keyboard to enter “username@domain.com” into the “your name” text field
  Then I use the native keyboard to enter “myPassword123” into the “password” text field
  Then I press "Sign In"

Scenario: As a valid user I can start using the app
  I wait for text "Hello"
  Then I wait for activity "HomeTabActivity"
  Then I press view with id "menu_compose_tweet"
  Then I enter text "Bitbar Testing" into field with id "edit"
  Then I press view with id "composer_post"
</pre>

<h1>Steps and Step Definitions</h1>

Step definitions are like code-behind for the scenarios defined in step definition scrips. They provide the glue that makes them runnable in the application. Their function is to translate readable texts into runnable actions.


