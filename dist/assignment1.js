//detects the state of readiness
$( document ).ready(function() {
    //adding click event on pressing enter key
    $("#num").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#get_result").click();
        }
    });
    //adding click event to the output button
    $('#get_result').click(function() {
        var value = $('#num').val();
        //checking whether the value is empty or not
        if(value==""){
            /*removing and adding classes to the output section for undesired result
              which will change the look and fill of the output*/
            $('#result1').attr('class', '');
            $('#result1').addClass('text-center alert alert-warning');
            //printing the output
            $("#result1").html('Please give an input.');
        }
        //checking whether the value is -ve or not
        else if(value<1){
            /*removing and adding classes to the output section for undesired result
              which will change the look and fill of the output*/
            $('#result1').attr('class', '');
            $('#result1').addClass('text-center alert alert-warning');
            //printing the output
            $("#result1").html('Please check the input.');
        }
        else{
             /*removing and adding classes to the output section for desired result
              which will change the look and fill of the output*/
            var result = check_prime(value);
            $('#result1').attr('class', '');
            $('#result1').addClass('text-center alert alert-success');
            //printing the output
            $("#result1").html(result);
        } 
    });
//function for checking prime value
    function check_prime(value){
        var c = 0;
        for(var i = 1; i<=value; i++ ){
            if(value%i==0){
                c=c+1;
            }
        }
        //when value of 'c' is 2, then the result is +ve
        if (c===2) {
            var str = value + ' is a prime number.'
        }
        //when value of 'c' not equal to 2, then the result is -ve
        else{
            var str = value + ' is not a prime number.'
        }
        return str;
    }
});