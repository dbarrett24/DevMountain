$(document).ready(function() {
  $(window).on('scroll', function() {



    var scrollPosition = $(this).scrollTop();
    console.log('scrollPosition', scrollPosition);

    $('.wrapper').css({
      'background-size': (100 + (scrollPosition / 20)) + '%'
    })

    $('.cover-tree').css({
      'background-size': (100 + (scrollPosition / 20)) + '%',
      'transform': 'translate'
    })

    $('.branch-right').css({
      'transform': 'translate(' + (scrollPosition / 8) + '%, ' + (scrollPosition / 4) + '%)'
    })

    $('.branch-left').css({
      'transform': 'translate(-' + (scrollPosition / 8) + '%, ' + (scrollPosition / 3) + '%)'
    })

    $('.branch-left-bottom').css({
      'transform': 'rotate(87deg) translate(' + (scrollPosition / 5) + '%, ' + (scrollPosition / 3) + '%)'
    })

    $('.branch-right-bottom').css({
      'transform': 'rotate(264deg) translate(-' + (scrollPosition / 5) + '%, ' + (scrollPosition / 3) + '%)'
    })



  })
})
