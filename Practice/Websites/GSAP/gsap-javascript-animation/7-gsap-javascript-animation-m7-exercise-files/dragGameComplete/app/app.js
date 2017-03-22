TweenMax.set(".image", {scale: 0, opacity: 0});
TweenMax.set(".title", {perspective: 400, textShadow: "2px 2px 15px rgba(0,0,0, .6)"});
TweenMax.set(".tryAgain", {scale: 0});

var titleText = new SplitText(".title"),
    tl = new TimelineLite({onComplete: loadGameBoard}),
    numWords = titleText.chars.length,
    gameContainer = $(".gameBoard"),
    dropTargets = $(".target"),
    totalTargets = 6,
    totalHit = 0;

function initTitle() {
    for (var i = 0; i < numWords; i++) {
        tl.from(titleText.chars[i], .5, {
            force3D: true,
            opacity: 0,
            x: -500,
            transformOrigin: "0 50%",
            ease: Back.easeOut
        }, Math.random());
    }
}

function loadGameBoard() {
    TweenMax.staggerTo(".image", 0.2, {opacity: 1, scale: 1, ease: Back.easeOut, force3D: true}, 0.1, initDraggableItem)
}

function initDraggableItem() {
    Draggable.create(".dragItem", {
        bounds: gameContainer,
        edgeResistance: .65,
        onPress: function () {
            this.startX = this.x;
            this.startY = this.y;
            this.offsetTop = this.startY - $(this.target).position().top;
            this.offsetLeft = this.startX - $(this.target).position().left;
        },
        onDragEnd: function () {
            var dragThing = this;
            var dragID = this.target.id + "Drop";

            $.each(dropTargets, function (idx, spot) {
                var spotID = spot.id;
                var pos = $(spot).position();
                var diffTop = dragThing.offsetTop + pos.top;
                var diffLeft = dragThing.offsetLeft + pos.left;

                if(spotID === dragID){
                    if(dragThing.hitTest(spot, "10%")){
                        TweenMax.to(".correct",.3, {scale: 2, autoAlpha: 1, onComplete: function(){
                            TweenMax.to(".correct",.2, {scale: 0, autoAlpha: 0, delay:.5});
                        }});

                        TweenMax.to(dragThing.target, .5, {x: diffLeft, y:diffTop, onComplete: hideMatches, onCompleteParams:[dragThing, spot] });
                    }else{
                        TweenMax.to(".tryAgain",.3, {scale: 2, autoAlpha: 1, onComplete: function(){
                            TweenMax.to(".tryAgain",.2, {scale: 0, autoAlpha: 0, delay:.5});
                        }});
                        TweenMax.to(dragThing.target, .5, {x: dragThing.startX, y: dragThing.startY});
                    }
                }
            });

        }
    })
}

function hideMatches(dragItem, targetItem){
    totalHit++;
    TweenMax.to([dragItem.target, targetItem],.5, {autoAlpha: 0, onComplete: checkTargetCount});
}

function checkTargetCount(){
    if(totalHit == totalTargets){
        TweenLite.to(".modal",.3, {autoAlpha: 1});
    }
}

initTitle();