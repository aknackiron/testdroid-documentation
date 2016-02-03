baseURL = location.protocol + "//" + location.host;
//Create a module using an IIFE
/* Search code novelty of Josh Beam */

;(function(global,$) {
  /*
    Put ourselves into "strict" mode
    This just helps us write cleaner JavaScript
  */
  'use strict';

  Query.prototype = {
    // this.q is our search query (for example, "javascript tutorial")
    set: function(val) {
      this.q = val;
      return this;
    },
    // brings us to our search page with a query string attached
    goToLocation: function(route) {
      if(typeof this.q !== 'undefined' && typeof this.q === 'string') {
        document.location.href=route+'?query='+this.q;
      } else {
        return;
      }
    },
    // returns our search query (for example, "javascript tutorial")
    get: function() {
      return this.q;
    },
    // "grab" the query from the query string in the URL and set this.q to it
    setFromURL: function(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);

      this.q = results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

      return this;        
    },
    // a wrapper for jQuery's $.get
    getJSON: function(file) {
      return $.get(file);
    }
  };

  // when we initialize a query, we have the option of giving it a query string
  function Query(q) {
    if(typeof q !== 'undefined' && typeof q === 'string') {
      this.q = q;
    }
  }

  // attach the Query object to the window
  global.Query = Query;
})(this,$);

$(document).ready(function(){
	baseURL += $('#baseUrl').text();
	var $pageObject = $("section > .wrapper");
	
    // search.js
    $(function(Query) {
            'use strict';

            var query = new Query();

            $('.search').on('submit', function(e) {
                    // stop the form from doing its default behavior
                    e.preventDefault();

                    // set the query, and go to the search page with our query URL
                    query
                    .set($('.search-box').val().trim())
                    .goToLocation(baseURL + '/search');
            });
    }(Query));
    
    /* End of search related code */
    
    /* Open navigation element if sub element is active, also open sub navigation if exists */
    var activeNavigationElement = $("section .navigation .navigation-closed .active");
    if (activeNavigationElement.length == 1){
        var parents = $(activeNavigationElement).parents(".navigation-closed");
        parents.removeClass("navigation-closed").addClass("navigation-open");
    }
    
    $("section .navigation .navigation-icon").click(function(){
        var parent = $(this).parent("li");
        if (parent.hasClass("navigation-closed")){
            parent.removeClass("navigation-closed").addClass("navigation-open");
        }
        else if (parent.hasClass("navigation-open")){
            parent.addClass("navigation-closed").removeClass("navigation-open");
        }
    }); 
    
    var navigationMaxWidth = $( window ).width() < 370 ? $( window ).width() - 20 : 350;
    
    $( "#resizable-navigation" ).resizable({
        handles: 'e',
        maxWidth: navigationMaxWidth
    });
    
    // hide resize icon if not touch device
    if (!Modernizr.touch){
        $(".navigation-control-placeholder .navigation-control").hide();
    }
    
    // Hide image-404 if breaks layout
    if($pageObject.hasClass("page-title-404")){
		var $contentObject = $($pageObject).find(".content");
		var $image404 = $($contentObject).find(".image-404");		
		function hideShowImage404(){
			if ($contentObject.width() < 440)
				$image404.hide();
			else
				$image404.show();
		}
		/* window resize fires also on navigation resize */
		$(window).resize(function(){
			hideShowImage404();
		});
		hideShowImage404();
	}
});
