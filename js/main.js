$(document).ready(function(){
  // nav
  $("#SNB > ul > li").hover(function(){
    $(this).find('.sub').stop().fadeIn(200);
  },function(){
    $(this).find('.sub').stop().fadeOut(200);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").width();
    console.log(smv);
    $(".slide__box").animate({
      left:-smv
    },function(){
      $(".slide__box > div:first-child").appendTo(".slide__box");
      $(".slide__box").css({
        left:0
      });
    });
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".con__notice__box ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop button").click(function(){
    $("#pop").hide();
  });



});