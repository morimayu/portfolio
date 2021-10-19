'use strict';

function FixedAnime() {
  var headerH = $('#gnavi-link').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//headerの高さ以上になったら
      $('#gnavi-link').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#gnavi-linki').removeClass('fixed');//fixedというクラス名を除去
    }
}

$(function() {
	$('.btn-gNav').on("click", function(){
		$(this).toggleClass('open');
		$('#gNav').toggleClass('open');
	});
});