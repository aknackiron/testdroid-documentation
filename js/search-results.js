/* TODO NEW 
 * 1. Code cleanup
 * 2. Remove unneccessary code repeation
 * 3. Use worker js also when web worker isn't available
 *  Just don't use it as a worker, but as regular js script
 * */


//Modification of http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html by Josh Beam
$(document).ready(function(){

    $(function(Query) {

        var query = new Query(),
            site = location.protocol + "//" + location.host
            params = window.location.search.substring(1);  
		
		/* NOTICE: getJSON url needs to be fixed */      
		query.setFromURL('query');
		
		/* Check if specific query has been made previously */
		console.log("HEREEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		console.log(params);
		console.log(query);
		vars = {query: query, site: site, params: params};
		//var queryWords = q
		var readResult = readSearchResults(query.q);
		console.log("readResult");
		console.log(readResult);
		if (!readResult){
			query.getJSON(baseURL + '/search.json').done(function(data) {
				console.log("READ FAILED!!!!!!!!!!!!!!!!!!!");
				console.log(data);
				vars.data = data;
				handleResults(vars);
			});
		}
		else {
			console.log("READ SUCCESSFUL!!!!!!!!!!!!!!!!!!!!");
			
			//vars.data = readResult;
			
			/*pageParam = data.pageParam,
			results = data.results,
			queryWords = data.queryWords,
			queryParam = data.queryParam,*/
			
			/* copy from beneath */
			var anotherHelper = params.split("&");

			var pageParam = {},
				queryParam = {},
				queryWords = [];
			for (var i=0;i<anotherHelper.length;i++) {
				var helper = anotherHelper[i].split("=");
				if (helper[0] == "page"){
					pageParam[helper[0]] = parseInt(helper[1]);
				}
				if (helper[0] == "query"){
					queryParam[helper[0]] = helper[1];
					queryWords = decodeURI(helper[1]).split(" ");
				}
			}
			/* copy from beneath */
			
			vars.results = readResult;
			vars.pageParam = pageParam;
			vars.queryWords = queryWords;
			vars.queryParam = queryParam;
			
			
			handleResults(vars);
		}
		
    }(Query));
    
    /* Process results */
    
    /* TODO:
     * 1. Separate search possible results get and processiing
     * 2. Defer results creation into web worker, it is currently the heaviest step and freezes the thread for ~1,3s
     * 3. Push results to browser cookie in case of page change or new query with the same term
     * 4. Modify script to fetch results from cookie if such exists
     *   */
    
});

function handleResults(vars){
	if(typeof(Worker) !== "undefined") {
		// call worker function from search index, easier to have it there to modify script url by liquid
		useSearchWorker();
		console.warn("THIS HERE");
		console.log(vars);
		w.postMessage(vars);
	}
	else{
		processResults(vars);
	}
}

function processResults(vars){
    var data = vars.data,
        query = vars.query,
        site = vars.site,
        params = vars.params,
        contentMaxLength = 400, // Max lenght of content snippet
		visibleResults = 10; // Results per page

    var searchIndex,
            results,
            $results = $('.search-results'),
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

    /* THIS IS THE HEAVIES STEP */
    // add each item from posts.json to the index
    $.each(data,function(i,item) {
            searchIndex.add(item);
    });
; 
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
   
    // get the total score of all items, so that we can divide each result into it, giving us a percentage
    $.each(results, function(i, result) {
            totalScore+=result.score;
    });

    var vars = params.split("&");

    var pageParam = {},
		queryParam = {},
		queryWords = [];
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
        function decodeEntities(encodedString) {
            var textArea = document.createElement('textarea');
            textArea.innerHTML = encodedString;
            return textArea.value;
        }

        contentString = decodeEntities(contentString);

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
    if (!results.length){
        $results.append('<li class="search-result"><p>No results for "'+decodeURI(queryParam.query)+'".</p></li>');
    }
}

function handleWorkerMessage(data){
	
	console.log("handleWorkerMessage data");
	console.log(data);
    
    if (data.displayableResults){		
		displayWorkerResults(data.displayableResults); 
	}
	else if (data.query && data.results){
		writeSearchResults(data);
	}
}

function writeSearchResults(data){
	if (typeof(Storage) !== "undefined"){
		writeResultsToSessionStorage(data);
	}
	else{
		writeResultsToCookie(data);
	}
}

function readSearchResults(query){
	console.log("readSearchResults fired!");
	console.log(query);

	if (typeof(Storage) !== "undefined"){
		readResult = readResultsFromSessionStorage(query);
		return readResult;
	}
	return false;
}

function writeResultsToSessionStorage(data){
	console.log("writeResultsToSessionStorage");
	console.log(data);
	
	console.log(data.query);
	console.log(JSON.stringify(data.results));
	
	sessionStorage.setItem(data.query, JSON.stringify(data.results));
	
	//Test functionality
	//readResultsFromSessionStorage();
}

function writeResultsToCookie(data){
	console.log("writeResultsToCookie");
	console.log(data);
	
	
}

function readResultsFromSessionStorage(query){
	console.log("readResultsFromSessionStorage");
	console.log(query);
	
	var data = JSON.parse(sessionStorage.getItem(query));
	
	console.log("this!!!!!!!!!! data");
	console.log(data);
	
	if (data != null){
		return data;
	}
	return false;
}

function readResultsFromCookie(){
	
}

function displayWorkerResults(data){
	function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }
    
    var params = window.location.search.substring(1);
    var vars = params.split("&");

    var pageParam = {}, 
		queryParam = {};
    for (var k=0;k<vars.length;k++) {
        var helper = vars[k].split("=");
        if (helper[0] == "page"){
            pageParam[helper[0]] = parseInt(helper[1]);
        }
        if (helper[0] == "query"){
            queryParam[helper[0]] = helper[1];
        }
    }
    
    var site = location.protocol + "//" + location.host;
    
    var emptyResult = true;
    
    var $results = $('.search-results');

    for(var i = 0; i <= data.length; i++){
        var result = data[i];
        if (typeof result == "object"){
            emptyResult = false;
            result.content = decodeEntities(result.content);
            $results.append('<li class="search-result"><a href="'+ site + result.ref +'">'+result.title+'</a><p>'+decodeURI(result.content)+'</p></li>');
        }
        else{
            if (typeof result == "number" && result > 1){       
                pages = function(){
                    element = "";
                    for (var j = 1; j <= result; j++){
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
            else if (typeof result == "string"){
                $(".content .title").append(' for "'+decodeURI(queryParam.query)+'"');
                if (emptyResult){
                    $results.append('<li class="search-result"><p>No results for "'+decodeURI(queryParam.query)+'".</p></li>');
                }
            }
        }   
    }  
}
