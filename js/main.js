var baseURL = "";
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
	baseURL = $('#baseUrl').text();
	if(!baseURL.length){baseURL = location.protocol + "//" + location.host;}
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
    
    //Element being resized
    var resizing = function(event, ui){
		$(ui.element[0]).addClass('resizing');
	}
    //Element stopped resizing
    var stoppedResizing = function(event, ui){
		$(ui.element[0]).removeClass('resizing');
	}
    
    $( "#resizable-navigation" ).resizable({
        handles: 'e',
        maxWidth: navigationMaxWidth,
        start: resizing,
        stop: stoppedResizing
    });
    
    // hide resize icon if not touch device
    if (!Modernizr.touch){
        $(".navigation-control-placeholder .navigation-control").hide();
    }
    
    // page-404 specific code
    if($pageObject.hasClass("page-title-404")){
		// Hide image-404 if breaks layout
		var $contentObject = $($pageObject).find(".content");
		var $image404 = $($contentObject).find(".image-404");		
		function hideShowImage404(){
			if ($contentObject.width() < 440)
				$image404.hide();
			else
				$image404.show();
		}
		// window resize fires also on navigation resize 
		$(window).resize(function(){
			hideShowImage404();
		});
		hideShowImage404();
		// Check if should do an automatic search
		if (document.referrer.indexOf("docs.testdroid.com") < 0 && document.referrer.indexOf("testdroid.com") > -1){
			// redirect to search 
			var pathname = window.location.pathname;
			var pathend = pathname.substr(pathname.lastIndexOf("/")+1);
			var pathendwords = pathend.split("-");
			var words = [];			
			for (i in pathendwords){
				i = pathendwords[i].split(/(?=[A-Z])/);
				if ($.isArray(i)){
					for (j in i){
						if (!$.isNumeric(i[j])){
							words.push(i[j].toLowerCase());
						}
					}
				}
			}
			window.location.assign(baseURL+"/search/?query="+encodeURI(words.join(" "))+"&autosearch=true");
		}
	}
	// Search-page specific code 
	if($pageObject.hasClass("page-title-Search")){
		var queryParam = window.location.search;
		if (queryParam.indexOf("autosearch=true") > -1){
			$(".search-message").show();
		}
	}
});
