//detects the state of readiness
$( document ).ready(function() {
	//adding click event on pressing enter key
	$("#input").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#get_series").click();
        }
    });
    //adding click event to the output button
	$('#get_series').click(function(){
		var n = $('#input').val();
        if(n===""){
        	/*removing and adding classes to the output section for undesired result
              which will change the look and fill of the output*/
        	$('#result3').attr('class', '');
            $('#result3').addClass('text-center alert alert-warning');
            //printing the output
            $("#result3").html('Input doesn\'t\ sound right. Check if everything’s fine.');
        }
        else{
        	//calling the function find_series which will return the desired fibonacci series
            var result = find_series(n);
            /*removing and adding classes to the output section for desired result
              which will change the look and fill of the output*/
            $('#result3').attr('class', '');
            $('#result3').addClass('text-center alert alert-success');
            //printing the output
            $('#result3').html(result);
        } 
	});
	//function for generating fibonacci series
	function find_series(n) {
		// body...
		var seq = [0,1];
		//if value of n is 1, return the initial value of 'seq'
		if(n===1){
			
			return " The fibonacci series: " + seq;
		}
		//if value of n is less than one, we will ask to modify the input
		else if(n<1){
			return "Input doesn\'t\ sound right. Check if everything’s fine."
		}
		//if value of n is greater that 1, return the series
		else{
			var i=2;
			do{
				// Next fibonacci number = previous + one before previous
			  	seq[i] = seq[i-2] + seq[i-1];
			  	i++;
			}
			while(seq[i-1]<=n);
			//return the series
			seq.pop();
			return "The fibonacci series: " + seq;
		}
	}
});
