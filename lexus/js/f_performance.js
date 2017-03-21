$(function(){

    $('.section_performance_1 .btn_performance').on('click',function(){
        $('html,body').animate({scrollTop:'0'+'950px'},930);
    });

    var idx=0;

  /**
 * [motion description]
 * @stsrt  {[string]} start [시작지점]
 * @end    {[string]} end   [도착지점]
 * @i      {[number]} i     [대상의 인덱스]
 * @return {[type]}       [움직여라 이미지야....]
 */


    function motion(start, end, i){
        $('.section_performance_2_slidebtn li').eq(i).addClass('on').siblings().removeClass('on');
        $('.section_performance_2_gallery li').eq(i).addClass('on').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).siblings().removeClass();

        if(idx == $('.section_performance_2_gallery li').length){
            idx = 0
            motion('100%',0,idx);
        }else if( idx < 0){
            idx = $('.section_performance_2_gallery li').length-1;
            motion('-100%',0,idx);
        }
    }
    $('.section_performance_2_gallery li').eq(0).css('display','block')

    $('.section_performance_2_btn a.next').click(function(){
        idx = $('.section_performance_2_gallery li.on').index();
        motion(0,'-100%',idx)
        idx ++
        motion('100%',0,idx)
    })

    $('.section_performance_2_btn a.prev').click(function(){
        idx = $('.section_performance_2_gallery li.on').index();
        motion(0,'100%',idx)
        idx --
        motion('-100%',0,idx)
    })

    var idx=0;

    function motion1(start, end, i){

        $('.section_performance_2_bg_2 li').eq(i).addClass('on').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).siblings().removeClass();

        if(idx == $('.section_performance_2_bg_2 li').length){
            idx = 0
            motion1('-100%',0,idx)
        }else if( idx < 0){
            idx = $('.section_performance_2_bg_2 li').length-1;
            motion1('100%',0,idx)

        }
    }
    $('.section_performance_2_bg_2 li').eq(0).css('display','block')

    $('.section_performance_2_btn a.next').click(function(){
        idx = $('.section_performance_2_bg_2 li.on').index()

        motion1(0,'100%',idx);
        idx ++
        motion1('-100%',0,idx);
    })

    $('.section_performance_2_btn a.prev').click(function(){
        idx = $('.section_performance_2_bg_2 li.on').index()
        motion1(0,'-100%',idx);
        idx --
        motion1('100%',0,idx);
    })



    $('.section_performance_2_slidebtn li a').click(function(e){
        e.preventDefault();
        var hisnum = $('.on').index();
        idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on')

        if(idx > hisnum){
            motion('0', '-100%', hisnum);
            motion('100%', '0', idx);
            motion1('0','100%', hisnum);
            motion1('-100%','0', idx);
        }else if(idx < hisnum){
            motion('0', '100%', hisnum);
            motion('-100%', '0', idx);
            motion1('0','-100%', hisnum);
            motion1('100%','0', idx);
        }else{
            return
        }

    });




    $('.section_performance_3_wrap .section_performance_3_btn').click(function(){
        $('.blind').css({
          "display":"block"
        });
        $('.popup_wrap').css({
          "display":"block"
        });

        $('.close_btn').click(function(){
          $('.blind').css({
            "display":"none"
          });
          $('.popup_wrap').css({
            "display":"none"
          });
    });

    });

    var idx=0;


    function motion3(start, end, i){
        $('.slide li').eq(i).addClass('on').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).siblings().removeClass().css('display','none');

        if(idx == $('.slide li').length){
            idx = 0
            motion3('100%',0,idx);
        }else if( idx < 0){
            idx = $('.slide li').length-1;
            motion3('-100%',0,idx);
        }
    }
    $('.slide li').eq(0).css('display','block');

    $('.popup_btn a.next').click(function(){
        idx = $('.slide li.on').index();
        motion3(0,'-100%',idx)
        idx ++
        motion3('100%',0,idx)
    })

    $('.popup_btn a.prev').click(function(){
        idx = $('.slide li.on').index();
        motion3(0,'100%',idx)
        idx --
        motion3('-100%',0,idx)
    })




          $('.popup_btn .prev').click(function(){
            console.log("111");
            $('.page_number .num').text()
            $(this).prop('Counter',0).animate({
              Counter : $(this).text()
            },{
              duration:4000,
              easing : 'swing',
              step:function(now){
                $(this).text(Math.ceil(now));
              }
            })
          })



});
