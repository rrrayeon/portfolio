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
