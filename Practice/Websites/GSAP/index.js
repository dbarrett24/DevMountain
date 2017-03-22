$(document).ready(function(){
    startTween();
});

function startTween(){
    TweenLite.to($('.1'), 2, {x: 290, y: 225});
}