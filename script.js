$(document).ready(function(){
  $('.more').on( 'click' ,function(){

  $panel = $(this).parent();
  $panelChild = $panel.children('.hideContent');

  if( !$panelChild.hasClass('open') ) {
    $panelChild.slideDown().addClass('open');
    $panel.children('.more').text('閉じる');
  } else {
    $panelChild.slideUp().removeClass('open');
    $panel.children('.more').text('続きを見る');
  }
  return false;
  });
});

