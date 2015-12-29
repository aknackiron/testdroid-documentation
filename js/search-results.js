//Modification of http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html by Josh Beam
$(document).ready(function(){
    // results.js
    $(function(Query,utils) {
        // Max lenght of content snippet
        var contentMaxLength = 400;
        // Results per page
        var visibleResults = 10;

        var query = new Query(),
                site = location.protocol + "//" + location.host,
                // some utility functions
                utils = utils;

        /* NOTICE: getJSON url needs to be fixed */      
        query
        .setFromURL('query')
        .getJSON(baseURL + '/search.json')
        .done(function(data) {
            var searchIndex,
                    results,
                    $resultsCount = $('.search-results-count'),
                    $results = $('.search-results'),
                    totalScore = 0,
                    percentOfTotal;

            // set up the allowable fields
            searchIndex = lunr(function() {
                    this.field('title');
                    this.field('category');
                    this.field('content');
                    this.ref('url');
                    this.field('date');
            });

            // add each item from posts.json to the index
            $.each(data,function(i,item) {
                    searchIndex.add(item);
            });

            // search for the query and store the results as an array
            results = searchIndex.search(query.get());

            // add the title of each post into each result, too (this doesn't come standard with lunr.js)
            for(var result in results) {                      
                for(var dataIndex in data){
                    if (results[result].ref === data[dataIndex].url){
                        results[result].title = data[dataIndex].title;
                        results[result].content = data[dataIndex].content.substr(0, contentMaxLength);
                    }
                }
            }

            // show how many results there were, in the DOM
            $resultsCount.append(results.length + (results.length === 1 ? ' result' : ' results') + ' for "' + query.get() +'"');

            // get the total score of all items, so that we can divide each result into it, giving us a percentage
            $.each(results, function(i, result) {
                    totalScore+=result.score;
            });
            var params = window.location.search.substring(1);

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
                return contentString;
            };

            for (var i = startingIndex; i <= endingIndex; i++){
                var result = results[i];

                if (i >= results.length){
                    break;
                }

                if (i < endingIndex){

                    percentOfTotal = result.score/totalScore;
                    
                    //Process keywords
                    if (queryWords.length){
                        result.content = processKeywords(result.content);
                    }

                    $results.append('<li class="search-result"><a href="'+ site + result.ref +'">'+result.title+'</a><p>'+decodeURI(result.content)+'</p></li>');
                    $results.children('li').last().css({
                            'border-left': '20px solid '+utils.shade('#ffffff',-percentOfTotal)
                    });
                }
            }
            var amountOfPages = Math.ceil(results.length / visibleResults);

            if (amountOfPages > 1){
                pages = function(){
                    element = "";
                    for (var j = 1; j <= amountOfPages; j++){
                        if (element.length){
                            element += " / ";
                        }
                        if (j == pageParam.page || (j == 1 && typeof pageParam.page === "undefined") ){
                            element += "<span>"+j+"</span>";
                        }
                        else{
                            element += "<a href='"+baseURL+"/search?query="+queryParam.query+"&page="+j+"'>"+j+"</a>";
                        }
                    }
                    return element;
                }

                $results.append(pages());
            }
            $(".content .title").append(' for "'+decodeURI(queryParam.query)+'"');
        });
    }(Query,utils));
});
