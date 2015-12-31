---
layout: default
title: Search results
---
<!-- Test lunr.js for search results -->
<script src="{{ site.baseurl }}/js/lunr.min.js"></script>
<!--<div class="search-results-count"></div>-->
<ul class="search-results"></ul>
<div class="search-spinner"></div>
<script src="{{ site.baseurl }}/js/search-results.js"></script>

<!--<script>

    var w;
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("{{ site.baseurl }}/js/search-results.js");
        }
    } 

</script>-->