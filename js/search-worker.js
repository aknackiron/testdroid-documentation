//Modification of http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html by Josh Beam
var isWorker = true;
    
onmessage = function(e) {
	importScripts('lunr.min.js');

    /* New query returs object data, read from memory returns results */
    if (e.data.data){
		processQueryInWorker(e.data);
	}
	else{
		processResultsInWorker(e.data);
	}
};

function launchOutsideWorker(vars){	
	isWorker = false;

	/* New query returs object data, read from memory returns results */
    if (vars.data){
		processQueryInWorker(vars);
	}
	else{
		processResultsInWorker(vars);
	}
}
    

function processQueryInWorker(vars){
    var data = vars.data,
        query = vars.query,
        site = vars.site,
        contentMaxLength = 400, // Max lenght of content snippet
        pageParam = vars.pageParam,
		queryParam = vars.queryParam,
		queryWords = vars.queryWords,
		searchIndex,
		results,
		totalScore = 0,
		percentOfTotal;

    // set up the allowable fields
    searchIndex = lunr(function() {
            this.field('title');
            this.field('content');
            this.ref('url');
    });
  
    for(var i = 0; i < data.length; i++){
        searchIndex.add(data[i]); 
    }

    // search for the query and store the results as an array
    results = searchIndex.search(query.q);

    // add the title of each post into each result, too (this doesn't come standard with lunr.js)
    for(var result in results) {                      
        for(var dataIndex in data){
            if (results[result].ref === data[dataIndex].url){
                results[result].title = data[dataIndex].title;
                results[result].content = data[dataIndex].content.substr(0, contentMaxLength);
            }
        }
    } 

    for(var i = 0; i < results.length; i++){
        totalScore+=results[i].score;
    }  

    var processData = {pageParam: pageParam, results: results, 
		queryWords: queryWords, queryParam: queryParam};
    
    processResultsInWorker(processData);
    
    // Save results to local storage or cookie, so no need to refetch and process
    if (isWorker){
		postMessage({query: decodeURI(queryParam), results: results});
	}
	else{
		notWorkerPostMessage({query: decodeURI(queryParam), results: results});
	}
}

function processResultsInWorker(data){

    var pageParam = data.pageParam,
		results = data.results,
		queryWords = data.queryWords,
		queryParam = data.queryParam,
		startingIndex = 1,
		visibleResults = 10; // Results per page
    
    if (pageParam && !isNaN(pageParam)){                    
        startingIndex = pageParam;
    }

    startingIndex = (startingIndex - 1) * visibleResults;
    var endingIndex = startingIndex + visibleResults;

    var processKeywords = function(contentString){
        // Thanks to Ryan O'Hara http://stackoverflow.com/questions/17264639/replace-text-but-keep-case
        function matchCase(text, pattern) {
            var result = '';

            for(var i = 0; i < text.length; i++) {
                var c = text.charAt(i);
                var p = pattern.charCodeAt(i);

                if(p >= 65 && p < 65 + 26) {
                    result += c.toUpperCase();
                } else {
                    result += c.toLowerCase();
                }
            }

            return result;
        }        

        for (var index in queryWords){
            r = new RegExp( "(" + queryWords[index] + ")" , 'gi' );
            contentString = contentString.replace(r, function(match) {
                return "<b>"+matchCase(queryWords[index], match)+"</b>";
            });
        }

        return contentString;
    };
    
    var searchResults = [];
    for (var i = startingIndex; i <= endingIndex; i++){
        var result = results[i];

        if (i >= results.length){
            break;
        }

        if (i < endingIndex){

            //Process keywords
            if (queryWords.length){
                result.content = processKeywords(result.content);
            }
            
            searchResults.push(result);
        }
    }
    var amountOfPages = Math.ceil(results.length / visibleResults);
    searchResults.push(amountOfPages);
    searchResults.push(queryParam);
    
    postableData = {displayableResults: searchResults};
    if (isWorker){
		postMessage(postableData);
	}
	else{
		notWorkerPostMessage(postableData);
	}
}
