---
layout: default
title: Search results
---
<!-- Test lunr.js for search results -->
<script src="{{ site.baseurl }}/js/lunr.min.js"></script>
<!--<div class="search-results-count"></div>-->
<ul class="search-results"></ul>
<div class="search-spinner"></div>

<script>
    var w;
    function useSearchWorker(){       
        if(typeof(w) == "undefined") {
            w = new Worker("{{ site.baseurl }}/js/search-worker.js");
        }
        w.onmessage = function(e){
            console.log('message from worker');
            console.log(e);
            handleWorkerMessage(e.data);
        }
    } 
</script>

<script src="{{ site.baseurl }}/js/search-results.js"></script>