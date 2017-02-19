angular.module("brawlApp").controller("team-selectCtrl", function($scope, mainService){
    $(document).ready(function(){
        $('.carousel-wrapper').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500
        });

    });


    
});
