$(document).ready(function(){
        $("#char-count").hide();
        $(".button").hide();
var maxLength = 140;
var tweetArea = $(".tweet-compose");
var status = $("#char-count");

// ****************FUNCTIONS****************
    $(".tweet-compose").focusin(function(){
        $(this).animate({height: "125px"}, "fast")
        $("#char-count").show();
        $(".button").show();
    });

    
    $(".tweet-compose").focusout(function(){
        if(tweetArea >= 1){
            $(this).animate({height: "125px"}, "fast");
            $("#char-count").show();
            $(".button").show();
        }
        else{
            $(this).animate({height: "2.5em"}, "fast");
            $("#char-count").hide();
            $(".button").hide();
        }
    });
            

    tweetArea.keydown(function(){
        var characters = $(this).val().length;
        if(characters >= 1){
            status.text(maxLength - characters);
        }
        else{
            characters = 0;
            status.text(maxLength - characters);
            
        }
    });

    
});