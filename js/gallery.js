$(function(){
  //set gallery
  var pictures = [
    "album/3.jpg",
    "album/2.jpg",
    "album/1.jpg"
  ];

  for (var i = 0; i < pictures.length; i++) {
    var $node = "<div class='col-lg-3 col-6'><img class='pic' src="+pictures[i]+"></div>";
    $('#here').append($node);
  }
  //set gallery END

  $('.pic').click(function(){
    $this = $(this),
    $src = $this.attr('src');
    $('.gallery .main').attr('src', $src);
    $('.gallery').removeClass('d-none');
    $('body').addClass('noscroll');
  });
  $('.gallery').click(function(){
    $('.gallery').addClass('d-none');
    $('body').removeClass('noscroll');
  });
});
