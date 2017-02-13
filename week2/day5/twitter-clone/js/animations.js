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
            if($(tweetArea).val().length < 66 && $(tweetArea).val().length > 37 ){
                $(this).animate({height: "4em"}, "fast");
                
            }
            else if($(tweetArea).val().length < 112 && $(tweetArea).val().length >= 67){
                $(this).animate({height: "5em"}, "fast");
               
            }
            else if($(tweetArea).val().length >= 112 && $(tweetArea).val().length <= 140){
                $(this).animate({height: "6em"}, "fast");
              
            }
            else if($(tweetArea).val().length === 0){
                $(this).animate({height: "2.5em"}, "fast");
                $("#char-count").hide();
                $(".button").hide();
            }
            else{
                $(this).animate({height: "2.5em"}, "fast");
            }
            
        });
            
    tweetArea.keyup(function(){
        var characters = $(tweetArea).val().length;
        if(characters > 0){
            status.text(maxLength - characters);
        }
        else{
            status.text(140);
            console.log(status.text());
        }
        if(tweetArea.val().length >= 130){
            status.css("color", "red");
        }
        else{
            status.css("color", "#999");
        }
    });

    $(".button").on("click", function(){
        $("#stream").prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Dave Barrett </strong><span class="username">@dbarrett24</span><p class="tweet-text">' + tweetArea.val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div><div class="users-interact"><div></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose-2" placeholder="Reply to @mybff"/></textarea></div></div></div>');

        tweetArea.val("");

    });
    $(".tweet-actions").hide();

    $(".content").on("mouseenter", function(){
        $(".tweet-actions li").show();
    });

    $(".content").on("mouseleave", function(){
        $(".tweet-actions li").hide();
    });
});