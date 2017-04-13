$(document).ready(function() {
  $('.ham-outer-wrap').on('click', function() {
    $('.one').toggleClass('vanish');
    $('.two').toggleClass('spin-left');
    $('.three').toggleClass('spin-right');
    $('.ham-outer-wrap').toggleClass('glow');
  })

  $('.load').on('click', function() {
    $('.load:nth-of-type(1)').toggleClass('dot-1');
    $('.load:nth-of-type(2)').toggleClass('dot-2');
    $('.load:nth-of-type(3)').toggleClass('dot-3');
    $('.load:nth-of-type(4)').toggleClass('dot-4');
    $('.load:nth-of-type(5)').toggleClass('dot-5');
    $('.load:nth-of-type(6)').toggleClass('dot-6');
    $('.load:nth-of-type(7)').toggleClass('dot-7');
  })

  $('.ex-1').on('click', function() {
    $(this).css({"animation-name": "color"})
  })
  $('.ex-2').on('click', function() {
    $(this).css({"animation-name": "percent"})
  })
  $('.ex-3').on('click', function() {
    $(this).css({"animation-name": "direction"})
  })

  $('.fa').on('click', function() {
    $('.line-one, .line-two, .line-three, .line-four').css({
      "transform": "rotate(-1080deg)"
    })
    $('.line-five, .line-six, .line-seven').css({
      "background": "white"
    })
    $('.bike').css({
      "color": "black"
    })
  })
})
