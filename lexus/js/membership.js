$(function(){


    $('.section_membership_3_content a').click(function(){
        $(this).next().toggleClass('on')
      });


      $('.section_membership_3_content a').click(function(){
          $(this).find('span.toggle').toggle();

         })

    $('.section_membership_1 .btn_membership').on('click',function(){
        $('html,body').animate({scrollTop:'0'+'950px'},930);

    });
});
