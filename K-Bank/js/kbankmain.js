$(function () {
  //상단 메뉴 호버(마우스 오버)시 서브 메뉴 보이게
  $(".main>li").hover(
    function () {
      $(this).find(".sub").stop().slideDown();
    },
    function () {
      $(this).find(".sub").stop().slideUp(100);
    }
  );
  //

  //검색 창 내에 탭메뉴
  $(".tabmenu>li>a").click(function () {
    $(".tabmenu>li>a").removeClass("active");
    $(this).addClass("active");
    $(".tabmenu>li>div").hide();
    $(this).next().show();
  });
  //
  //검색창 닫기
  $(".search_box .btn_close").click(function () {
    $(".search_box").hide();
  });
  //검색창 열기
  $(".btn_search").click(function () {
    $(".search_box").show();
  });
});
