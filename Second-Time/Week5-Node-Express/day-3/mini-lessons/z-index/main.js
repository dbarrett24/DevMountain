$(document).ready(function() {
  $('#arrow-btn').on('click', function() {
    $('.arrow').css({
      "right": "75px"
    })
  })
  $('#reset').on('click', function() {
    $('.arrow').css({
      "right": "875px"
    })
  })
})
