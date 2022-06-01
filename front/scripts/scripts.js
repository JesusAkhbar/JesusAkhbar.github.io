$(function() {
  let header = $('.header');
  let hederHeight = header.height();

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('fixed');
     $('body').css({
        'paddingTop': hederHeight+'px'
     });
    } else {
     header.removeClass('fixed');
     $('body').css({
      'paddingTop': 0
     })
    }
  });

  let show = $('.show');
  let cancel = $('.cancel');
  let style = $('.style');

  $(show).click(function() {
    $('link').remove();
    $('body').addClass('fixed');
    cancel.removeClass('none');
  });

  $(cancel).click(function() {
    $('head').append('<link rel="stylesheet" href="css/normalize.css">','<link class="style" rel="stylesheet" href="css/style.css">');
    $('body').removeClass('fixed');
    cancel.addClass('none');
  });

});
