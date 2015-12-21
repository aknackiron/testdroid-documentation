$(document).ready(function(){
    /* Open navigation element if sub element is active */
    activeNavigationElement = $("section .navigation .navigation-closed .active");
    if (activeNavigationElement.length == 1){
        parents = $(activeNavigationElement).parents(".navigation-closed");
        parents.removeClass("navigation-closed").addClass("navigation-open");
    }
    
    $("section .navigation .navigation-icon").click(function(){
        parent = $(this).parent("li");
        if (parent.hasClass("navigation-closed")){
            parent.removeClass("navigation-closed").addClass("navigation-open");
        }
        else if (parent.hasClass("navigation-open")){
            parent.addClass("navigation-closed").removeClass("navigation-open");
        }
    }); 
    
    $( "#resizable-navigation" ).resizable({
        handles: 'e',
        maxWidth: 350
    });
});