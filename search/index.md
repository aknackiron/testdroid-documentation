---
layout: default
title: Search results
---
<!-- Test lunr.js for search results -->
<script src="{{ site.github.url }}/js/lunr.min.js"></script>
<div class="search-message">
	<p>Unfortunately the page you tried to access has moved. We took the 
	liberty to do an automatic search for you to help you find the information you need.</p>
</div>
<ul class="search-results"></ul>
<div class="search-spinner"></div>

<script>
    var w;
    function useSearchWorker(){       
        if(typeof(w) == "undefined") {
            w = new Worker("{{ site.github.url }}/js/search-worker.js");
        }
        w.onmessage = function(e){
            handleWorkerMessage(e.data);
        }
    } 
    
    function workerFallback(vars){
		var callback = function(){
			launchOutsideWorker(vars);
		}
		getScript("{{ site.github.url }}/js/search-worker.js", callback);
    }
</script>

<script src="{{ site.github.url }}/js/search-results.js"></script>
