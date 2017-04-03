/**
 * Created by Ben on 3/30/16.
 */

$('#add-todo').click(function() {
    TweenMax.to(".add-todo-button",.5, {x: -345, ease:Power1.easeInOut});
    TweenMax.to(".bottom-form-container",.5, {y: -350, ease:Power1.easeInOut});

});

$('#saveNewItem').click(function() {
    TweenMax.to(".add-todo-button",.5, {x: 0, ease:Power1.easeInOut});
    TweenMax.to(".bottom-form-container",.5, {y: 345, ease:Power1.easeInOut});
});



$('#cancel').click(function() {
    TweenMax.to(".add-todo-button",.5, {x: 0, ease:Power1.easeInOut});
    TweenMax.to(".bottom-form-container",.5, {y: 345, ease:Power1.easeInOut});
});