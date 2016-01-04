//Modification of http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html by Josh Beam
    
    /* Process results */
    
    /* TODO:
     * 1. Separate search possible results get and processing
     * 2. Defer results creation into web worker, it is currently the heaviest step and freezes the thread for ~1,3s
     * 3. Push results to browser cookie in case of page change or new query with the same term
     * 4. Modify script to fetch results from cookie if such exists
     *   */
importScripts('lunr.min.js');
    
onmessage = function(e) {
    // the passed-in data is available via e.data
    console.log('in worker e');
    console.log(e);
    processResultsInWorker(e.data);
};
    

function processResultsInWorker(vars){
    var data = vars.data,
        query = vars.query,
        site = vars.site,
        params = vars.params;
    // Max lenght of content snippet
    var contentMaxLength = 400;
    // Results per page
    var visibleResults = 10;

    console.log('here2 ' + new Date().getTime()); 
    var searchIndex,
            results,
            //$resultsCount = $('.search-results-count'),
            totalScore = 0,
            percentOfTotal;

    // set up the allowable fields
    searchIndex = lunr(function() {
            this.field('title');
            //this.field('category');
            this.field('content');
            this.ref('url');
            //this.field('date');
    });

    console.log('here3 ' + new Date().getTime()); 
    /* THIS IS THE HEAVIES STEP */
    // add each item from posts.json to the index
    //$.each(data,function(i,item) {
    //        searchIndex.add(item);
    //});
    
    for(var i = 0; i < data.length; i++){
        searchIndex.add(data[i]); 
    }

    console.log('here4 ' + new Date().getTime()); 
    // search for the query and store the results as an array
    //results = searchIndex.search(query.get());
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
    console.log('here5 ' + new Date().getTime()); 
    // show how many results there were, in the DOM
    //$resultsCount.append(results.length + (results.length === 1 ? ' result' : ' results') + ' for "' + query.get() +'"');

    // get the total score of all items, so that we can divide each result into it, giving us a percentage
    //$.each(results, function(i, result) {
    //        totalScore+=result.score;
    //});
    for(var i = 0; i < results.length; i++){
        totalScore+=results[i].score;
    }
    
    
    //var params = window.location.search.substring(1);

    var vars = params.split("&");

    var pageParam = {};
    var queryParam = {};
    var queryWords = [];
    for (var i=0;i<vars.length;i++) {
        var helper = vars[i].split("=");
        if (helper[0] == "page"){
            pageParam[helper[0]] = parseInt(helper[1]);
        }
        if (helper[0] == "query"){
            queryParam[helper[0]] = helper[1];
            queryWords = decodeURI(helper[1]).split(" ");
        }
    }

    var startingIndex = 1;
    if (pageParam.page && !isNaN(pageParam.page)){                    
        startingIndex = pageParam.page;
    }
    startingIndex = (startingIndex - 1) * visibleResults;
    var endingIndex = startingIndex * visibleResults + visibleResults;

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

        // queryWords
        for (var index in queryWords){
            r = new RegExp( "(" + queryWords[index] + ")" , 'gi' );
            contentString = contentString.replace(r, function(match) {
                return "<b>"+matchCase(queryWords[index], match)+"</b>";
            });
        }

        // html decode result content
        // Thanks to lucascaro & Mark Amery http://stackoverflow.com/questions/1147359/how-to-decode-html-entities-using-jquery
        
        // TODO NEED TO DECODE SOMEWHERE ELSE AS WORKER HAS NO ACCESS TO DOM
        /*function decodeEntities(encodedString) {
            var textArea = document.createElement('textarea');
            textArea.innerHTML = encodedString;
            return textArea.value;
        }

        contentString = decodeEntities(contentString);*/

        return contentString;
    };
    console.log('here6 ' + new Date().getTime()); 
    
    searchResults = [];
    for (var i = startingIndex; i <= endingIndex; i++){
        var result = results[i];

        if (i >= results.length){
            break;
        }

        if (i < endingIndex){

            //percentOfTotal = result.score/totalScore;

            //Process keywords
            if (queryWords.length){
                result.content = processKeywords(result.content);
            }
            
            searchResults.push(result);
//            $results.append('<li class="search-result"><a href="'+ site + result.ref +'">'+result.title+'</a><p>'+decodeURI(result.content)+'</p></li>');
            /*$results.children('li').last().css({
                    'border-left': '20px solid '+utils.shade('#ffffff',-percentOfTotal)
            });*/
        }
    }
    var amountOfPages = Math.ceil(results.length / visibleResults);
    searchResults.push(amountOfPages);
    searchResults.push(queryParam.query);
    postMessage(searchResults);
    
    console.log('here7 ' + new Date().getTime()); 
    
    console.log('here8 ' + new Date().getTime()); 
    
}