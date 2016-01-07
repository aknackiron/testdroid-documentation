To do development for the documentation you need to have jekyll and it's 
pre-requirements installed. You can find the details from http://jekyllrb.com/docs/installation/

Usage of ruby installers is strongly recommended, especially on OS X! 
Modifications to system ruby may cause issues elsewhere!
Also it is possible you need to run instead of "jekyll serve" -> "bundle exec jekyll serve".

The site runs on Github so please check from github documentation wether 
Github supports the usage of the plugin you want to import. Github doesn't 
allow using all of the plugins available for jekyll

About design:
- Jekyll processes all files with YAML front matter http://jekyllrb.com/docs/frontmatter/

- Left hand navigation is designed for max 3 level navigation
	- Navigation configuration is located at _data/nav.yml
	- Actual navigation generation is done at _includes/nav.html
	
- _includes -folder has the generic page partials 
	- header & footer
	- nav
	- breadcrumbs

- _layouts folder currently has only one default layout which is used for all pages

- _sass folder includes scss partials which can imported into stylesheets

- search 
	- search-folder includes search page which functions also as an intermediate for web worker
	- Search scripts are split into 3 parts
		- js/main.js includes the basics so that search can be done from any page
		- js/search-results.js is the main result script which uses search-worker.js script to 
			do most of the heavy processing
		- js/search-worker.js is the script to be used in web worker to prevent blocking of 
			main thread while the heavy js search is done

- _site-folder is the target for "jekyll serve"

- stylesheets -folder keeps the stylesheets which can import partials from _sass

- Content structure
	- At the moment of writing there is a folder "example-test" which shows the correct content structure
	- Main level navigation element is in the root of the documentation fe. "example-test" which is a folder
		- Each content folder should have an index.md -file which is the content of that level. 
			Without index-file the navigation level is unaccessable
		- All sub-level pages (folders) should be inside the previous parent folder
			- This is to keep the urls logical
	- folder and file names: Please use hyphen format to keep the urls logical
	
	- assets -folder is the placeholder for (spicific) page assets such as images
		- please use the same structure as in the content to keep structure logical
		
	- Exception to some of these rules is currently "testdroid-cloud-integration/api/"
