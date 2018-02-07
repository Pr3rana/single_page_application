//detects the state of readiness
$( document ).ready(function() {
	//adding click event on pressing enter key
	$("#text").keyup(function(event) {
	    if (event.keyCode === 13) {
	        $("#make_call").click();
	    }
	});
	//adding click event to the output button
	$('#make_call').click(function(){
		var input = $('#text').val();
		if(input==""){
			 /*removing and adding classes to the output section for undesired result
			  which will change the look and fill of the output*/
			$('#result2').attr('class', '');
            $('#result2').addClass('text-center alert alert-warning');
            //printing the output
        	$("#result2").html('Please give an input.');
    	}
    	else{
    		//making ajax call
		    $.ajax({type: 'POST', url: 'http://localhost:3000/app', data: {"data":input}, success: function(result){
		        /*removing and adding classes to the output section for undesired result
			  which will change the look and fill of the output*/
		        $('#result2').attr('class', '');
            	$('#result2').addClass('text-center alert alert-success');
            	//printing the outpu
		        $("#result2").html(result);
		    }});
		}
	});
})