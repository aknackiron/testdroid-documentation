/* TODO NEW 
 * 1. Code cleanup
 * 2. Remove unneccessary code repeation
 * 3. Use worker js also when web worker isn't available
 *  Just don't use it as a worker, but as regular js script
 * */

//Modification of http://frontendcollisionblog.com/javascript/jekyll/tutorial/2015/03/26/getting-started-with-a-search-engine-for-your-site-no-server-required.html by Josh Beam    
var globalVariables = {
	params: "",
	pageParam: "",
	queryParam: "",
	site: "",
	queryWords: ""
}    

$(document).ready(function(){
	
	setGlobalVariables();

    $(function(Query) {
		
		console.log("globalVariables");
		console.log(globalVariables);

        var query = new Query();
		   
		query.setFromURL('query');
		var vars = {query: query, site: globalVariables.site, 
				params: globalVariables.params, 
				pageParam: globalVariables.pageParam, 
				queryWords: globalVariables.queryWords, 
				queryParam: globalVariables.queryParam};
		
		/* Check if specific query has been made previously */
		var readResult = readSearchResults(query.q);
		
		if (!readResult){
			/* NOTICE: getJSON url needs to be fixed */   
			query.getJSON(baseURL + '/search.json').done(function(data) {
				vars.data = data;
				handleResults(vars);
			});
		}
		else {
			console.log("READ SUCCESSFUL!!!!!!!!!!!!!!!!!!!!");
				
			$.extend(vars, {results: readResult});
			
			handleResults(vars);
		}
		
    }(Query));
});

function handleResults(vars){
	/* Use search-worker.js also without worker available, use just as a normal script */
	
	if(typeof(Worker) !== "undefined") {
		// call worker function from search index, easier to have it there to modify script url by liquid
		useSearchWorker();
		w.postMessage(vars);
	}
	else{
		workerFallback(vars);
	}
}

/* Handlers for communication with search-worker script
 * search/index.md functions as an intermediate because of useful liquid 
 * funtionalities of getting access to base url */

function notWorkerPostMessage(data){
	handleWorkerMessage(data);
}

function handleWorkerMessage(data){    
    if (data.displayableResults){		
		displayWorkerResults(data.displayableResults); 
	}
	else if (data.query && data.results){
		writeSearchResults(data);
	}
}

/* DOM functionalities with existing results as Web Workers have no
 * access to DOM */
 
function displayWorkerResults(data){
	function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }
    
    var emptyResult = true;
    
    var $results = $('.search-results');

    for(var i = 0; i <= data.length; i++){
        var result = data[i];
        if (typeof result == "object"){
            emptyResult = false;
            result.content = decodeEntities(result.content);
            $results.append('<li class="search-result"><a href="'+ globalVariables.site + result.ref +'">'+result.title+'</a><p>'+decodeURI(result.content)+'</p></li>');
        }
        else{
            if (typeof result == "number" && result > 1){       
                pages = function(){
                    element = "";
                    for (var j = 1; j <= result; j++){
                        if (element.length){
                            element += " / ";
                        }
                        if (j == globalVariables.pageParam || (j == 1 && typeof globalVariables.pageParam === "undefined") ){
                            element += "<span>"+j+"</span>";
                        }
                        else{
                            element += "<a href='"+baseURL+"/search?query="+globalVariables.queryParam+"&page="+j+"'>"+j+"</a>";
                        }
                    }
                    return element;
                }

                $results.append(pages());
            }
            else if (typeof result == "string"){
                $(".content .title").append(' for "'+decodeURI(globalVariables.queryParam)+'"');
                if (emptyResult){
                    $results.append('<li class="search-result"><p>No results for "'+decodeURI(globalVariables.queryParam)+'".</p></li>');
                }
            }
        }   
    }  
}

/* Helper functions */

function setGlobalVariables(){
	var params = window.location.search.substring(1);
    var vars = params.split("&");

    var pageParam = 1, 
		queryParam = "",
		queryWords = [];
		
    for (var k=0;k<vars.length;k++) {
        var helper = vars[k].split("=");
        if (helper[0] == "page"){
            pageParam = parseInt(helper[1]);
        }
        if (helper[0] == "query"){
            queryParam = helper[1];
            queryWords = decodeURI(helper[1]).split(" ");
        }
    }
    
    var site = location.protocol + "//" + location.host;
    
    globalVariables = {
		params: params,
		pageParam: pageParam,
		queryParam: queryParam,
		site: site,
		queryWords: queryWords
	} 
}

/* Write results functionalities:
 * Use session storage as it has been default functionality of browsers for long.
 * No point to see the extra effort to create a cookie fallback */
 
function writeSearchResults(data){
	if (typeof(Storage) !== "undefined"){
		sessionStorage.setItem(data.query, JSON.stringify(data.results));
	}
}

/* Read results functionalities:
 * Use session storage as it has been default functionality of browsers for long.
 * No point to see the extra effort to create a cookie fallback */

function readSearchResults(query){
	console.log("readSearchResults fired!");
	console.log(query);

	if (typeof(Storage) !== "undefined"){
		var data = JSON.parse(sessionStorage.getItem(query));
		
		if (data != null){
			return data;
		}
	}
	return false;
}

/* Function to import search-worker script incase Web Worker is not supported */

// http://stackoverflow.com/questions/8586446/dynamically-load-external-javascript-file-and-wait-for-it-to-load-without-usi thanks to Jason Sebring
function getScript(src, callback) {
	var s = document.createElement('script');
	s.src = src;
	s.async = true;
	s.onreadystatechange = s.onload = function() {
		if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
			callback.done = true;
			callback();
		}
	};
	document.querySelector('head').appendChild(s);
}
