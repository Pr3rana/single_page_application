//detects the state of readiness
$( document ).ready(function() {
	//adding click event to the div which have class taskbar.
    $('.taskbar').click(function(){
    	/*removing the active state from all the element which are a children of the div element whose class is taskbar*/
        $('.taskbar').children().removeClass("active");
        //adding active class to a particular element
        $(this).find('a').addClass("active");
        //changing the header content as per the assignment scope
        var val = $(this).find('p').html();
        $('#task').html(val);
        //getting the id, to show the content respective to the active div
        var id = "#" + $(this).attr("data-body");
        $('#task').html();
        //removing other containts except the active div
        $(id).siblings().addClass("d-none");
        $(id).removeClass("d-none");
        
    });
});
