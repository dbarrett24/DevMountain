$(window).load(function(){
    init();
});


function init(){
    var toolTimeline = new TimelineMax();
    var duration = .5;
    toolTimeline.from('.mainTitle', duration, {opacity: 0, scale:25, ease:Linear.easeInOut});

    toolTimeline.from('.title', duration, {opacity: 0, scale:25, ease:Linear.easeInOut},.2);

    toolTimeline.to('.superman img', duration, {left: 0, ease:Back.easeOut});

    toolTimeline.from('.superman img', duration, {skewX: "20deg", ease:Back.easeOut},.9);

    toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut},.7);

    toolTimeline.staggerTo('.tool', duration, {top: 150, ease:Back.easeInOut},.2, .7);

}