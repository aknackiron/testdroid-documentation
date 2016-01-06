---
layout: default
title: Search results
---
<!-- Test lunr.js for search results -->
<!--<script src="{{ site.baseurl }}/js/lunr.min.js"></script>-->
<ul class="search-results"></ul>
<div class="search-spinner"></div>

<script>
    var w;
    function useSearchWorker(){       
        if(typeof(w) == "undefined") {
            w = new Worker("{{ site.baseurl }}/js/search-worker.js");
        }
        w.onmessage = function(e){
			console.log("e");
			console.log(e);
            handleWorkerMessage(e.data);
        }
    } 
    
    function workerFallback(vars){
		//document.write("<script type='text/javascript' src='{{ site.baseurl }}/js/search-worker.js'><"+"/script>");
		/*var scr  = document.createElement('script'),
			head = document.head || document.getElementsByTagName('head')[0];
			scr.src = '{{ site.baseurl }}/js/search-worker.js';
			scr.async = false; // optionally

		head.insertBefore(scr, head.firstChild);*/
		//var callback = function(vars){
		var callback = function(){
			launchOutsideWorker(vars);
		}
//		getScript("{{ site.baseurl }}/js/search-worker.js", callback, vars);
		getScript("{{ site.baseurl }}/js/search-worker.js", callback);
    }
</script>

<script src="{{ site.baseurl }}/js/search-results.js"></script>
