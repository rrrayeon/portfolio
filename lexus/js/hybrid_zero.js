function pop_btn(){

    $('.popup_wrap').css({
       "display":"block"
    }).parents().siblings().css({
      "display":"none"
    });

    $('.close').click(function(){
      $('.popup_wrap').css({
        "display":"none"
      }).parents().siblings().css({
        "display":"block"
      });
      $('.popup_wrap iframe').remove()({
        });
    });
};


$(document).ready(function(){
  $('.strip_hybrid_1').parallax("50%", 0.7);
  $('.man_hybrid_1').parallax("50%", 1);
  $('.section_hybrid_1 p').parallax("50%", 1);
  $('.section_hybrid_2_video').parallax("50%", 0.4);
  $('.section_hybrid_3 h2').parallax("50%", 0.5);
  $('.section_hybrid_3 a').parallax("100%", 0.7);
  $('').parallax("50%", 0.3);
  $('').parallax("50%", 0.3);
  $('').parallax("50%", 0.3);
  $('').parallax("50%", 0.3);
})

$(function(){

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        // 어떤이미지
        if(st > 50 ){
          $('.section_hybrid_1 h2 img').css('opacity', '0')
        }else if(st <= 50 ){
          $('.section_hybrid_1 h2 img').css('opacity', '1')
        }

        // 어떤이미지
        if(st > 300 ){
        $('.section_hybrid_1 p img').css('opacity', '0')
        }else if(st <= 300 ){
        $('.section_hybrid_1 p img').css('opacity', '1')
        }

        if(st > 500 ){
        $('.section_hybrid_2 li strong img').css('opacity', '1')
        }else if(st <= 500 ){
        $('.section_hybrid_2 li strong img').css('opacity', '1')
        }
    });

})

















///////////////////////////////////////
