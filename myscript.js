
$('.images-grid .hello').hover(function(){
  $(this).append('<span class=""><i class="fas fa-plus-circle "></i></span>');
}, function(){ $('.images-grid span').remove();});
