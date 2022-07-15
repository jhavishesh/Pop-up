$(document).ready(function(){
    
    var test=false;

    $('.click').on('click',function(){

        if(test==false){

            $("#box").addClass('show');
            test=true;
        }
        else
        {
            $("#box").removeClass('show');
            test=false;
        }
    
    })
   

    $('.sub').on('click',function(){

        $('#box').removeClass('show');
    })

    $('.icon').on('click',function()
    {
        $('#box').removeClass('show');
    })
});