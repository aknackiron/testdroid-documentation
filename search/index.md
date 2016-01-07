---
layout: default
title: Search results
---
<!-- Test lunr.js for search results -->
<script src="{{ site.baseurl }}/js/lunr.min.js"></script>
<ul class="search-results"></ul>
<div class="search-spinner"></div>

<script>
    var w;
    function useSearchWorker(){       
        if(typeof(w) == "undefined") {
            w = new Worker("{{ site.baseurl }}/js/search-worker.js");
        }
        w.onmessage = function(e){
            handleWorkerMessage(e.data);
        }
    } 
    
    function workerFallback(vars){
		var callback = function(){
			launchOutsideWorker(vars);
		}
		getScript("{{ site.baseurl }}/js/search-worker.js", callback);
    }
</script>

<script src="{{ site.baseurl }}/js/search-results.js"></script>
