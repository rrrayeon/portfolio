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
  $('.section_hybrid_2_video').parallax("50%", 0.6);
  $('.section_hybrid_3 h2').parallax("50%", 0.5);
  $('.section_hybrid_3 a').parallax("100%", 0.6);
  $('.section_hybrid_4_text_1 h3').parallax("50%", 0.2);
  $('.section_hybrid_4_text_1 p').parallax("50%", 0.5);
  $('.section_hybrid_5_text h3').parallax("100%", 0.2);
  $('.section_hybrid_4_text_2 h3').parallax("100%", 1);
  $('.section_hybrid_4_text_2 strong').parallax("100%", 0.1);
  $('.section_hybrid_4_text_2 p').parallax("100%", 0.2);
  // $('.section_hybrid_5_text li').parallax("30%", 1);
  $('.section_hybrid_6_section_1 h3').parallax("50%", 0.5);
  $('.section_hybrid_6_text_2 span').parallax("50%", 0.2);





})

$(function(){

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        // 하이브리드 섹션원 h2글 렉서스 하이브리드 모든..
        if(st > 50 ){
          $('.section_hybrid_1 h2 img').css('opacity', '0')
        }else if(st <= 50 ){
          $('.section_hybrid_1 h2 img').css('opacity', '1')
        }

        // 하이브리드 섹션원 문장 강렬하고 압도적인...
        if(st > 300 ){
        $('.section_hybrid_1 p img').css('opacity', '0')
        }else if(st <= 300 ){
        $('.section_hybrid_1 p img').css('opacity', '1')
        }
        // 하이브리드 섹션투  모든 순간이 감동이다
        if(st > 500 ){
        $('.section_hybrid_2 li strong img').css('opacity', '1')
        }else if(st <= 500 ){
        $('.section_hybrid_2 li strong img').css('opacity', '1')
        }
    });

})

















///////////////////////////////////////
