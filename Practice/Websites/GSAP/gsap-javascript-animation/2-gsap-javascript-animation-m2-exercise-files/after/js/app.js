$(document).ready(function(){
    startTween();
});

function startTween(){
    var d = 1;

    TweenLite.to($("#toolBox"),1, {delay:d, x: 290, y: 225, scale: 1.5, onComplete:returnToNormal, onCompleteParams: [$("#toolBox")]});

    TweenLite.to(".asapReg", 1, {delay: (d +.5), color: "#ff0000", fontSize: "+=75", onComplete:returnTextToNormal, onCompleteParams:[d]});
}

function returnToNormal(obj) {
    if(obj){
        TweenLite.to(obj, 1, {x: 0, y: 0, scale: 1});
    }

}

function returnTextToNormal(delay) {
    TweenLite.to(".asapReg", 1, {delay: delay, color: "#fff", fontSize: "-=75"});
}