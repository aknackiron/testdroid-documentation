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
                /*console.log(data);*/
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
                        
                        // original implementation
                        /*results[result].title = data.filter(function(post) {
                                return post.url === results[result].ref;
                        })[0].title;*/
                        
                        for(var dataIndex in data){
                            if (results[result].ref === data[dataIndex].url){
                                /*console.log('found a match');
                                console.log(result);
                                console.log(results[result]);*/
                                /*console.log(dataIndex);
                                console.log(data[dataIndex]);*/
                                //create title and content objects
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
                
                console.log('results');
                console.log(results.length);
                
                //Default page
                //var pageNumber = 1;
                
                /* Test pagination */
                console.log(window.location.href);
                var params = window.location.search.substring(1);
                console.log(params);
                var vars = params.split("&");
                console.log(vars);
                var pageParam = {};
                var queryParam = "";
                for (var i=0;i<vars.length;i++) {
                    var helper = vars[i].split("=");
                    if (helper[0] == "page"){
                        //var keyValue = {};
                        pageParam[helper[0]] = parseInt(helper[1]);
                        //pageParam.push(keyValue);
                        //pageNumber = helper[1];
                    }
                    if (helper[0] == "query"){
                        queryParam = helper.join("=");
                    }
                }
                console.log("pageParam");
                console.log(pageParam);
                
                //var startingIndex = function(){
                //    $.each(pairs, function(pair)){
                //        
                //    }
                //}

                // append each result link, with a border that corresponds to a color with a strength equal to its percentage
                // of the total score
        //        $.each(results, function(i,result) {
        
                var startingIndex = 0;
                //var endingIndex = visibleResults;
                if (pageParam.page && !isNaN(pageParam.page)){                    
                    startingIndex = pageParam.page;
                }
                startingIndex = (startingIndex - 1) * visibleResults;
                var endingIndex = startingIndex * visibleResults + visibleResults;
                
        
                for (var i = startingIndex; i <= endingIndex; i++){
                    var result = results[i];
                        /*console.log('result: ');
                        console.log(result);*/
                    
                    if (i >= results.length){
                        break;
                    }
                    
                    if (i < endingIndex){
                    
                        percentOfTotal = result.score/totalScore;

                        $results.append('<li class="search-result"><a href="'+ site + result.ref +'">'+result.title+'</a><p>'+result.content+'</p></li>');
                        $results.children('li').last().css({
                                'border-left': '20px solid '+utils.shade('#ffffff',-percentOfTotal)
                        });
                    }
                    /*else{
                        var amountOfPages = Math.ceil(results.length / visibleResults);
                        
                        console.log(amountOfPages);
                        pages = function(){
                            element = "";
                            for (var j = 1; j <= amountOfPages; j++){
                                if (element.length){
                                    element += " / ";
                                }
                                element += "<a onclick='cspc(this);'>"+j+"</a>";
                            }
                            return element;
                        }
                        
                        $results.append(pages());
                        // break each loop
                        //return false;
                    }*/
                }
                var amountOfPages = Math.ceil(results.length / visibleResults);

                console.log(amountOfPages);
                if (amountOfPages > 1){
                    pages = function(){
                        element = "";
                        for (var j = 1; j <= amountOfPages; j++){
                            if (element.length){
                                element += " / ";
                            }
                            /*element += "<a onclick='cspc(this);'>"+j+"</a>";*/
                            //element += "<a href='"+site+"/search"+queryParam+"page="+j'>"+j+"</a>";
                            element += "<a href='"+baseURL+"/search?"+queryParam+"&page="+j+"'>"+j+"</a>";
                        }
                        return element;
                    }

                    $results.append(pages());
                }
        });
    }(Query,utils));
});
/*function cspc(t){
    console.log(t.text);   
    csp();
}

function csp(nmbr){
    
}

function visualizeResults(param){
    // page change
    if (typeof param === "number"){
        
    }
    // first visualization
    else{
        
    }
    
}*/
