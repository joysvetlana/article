
$(document).ready(function(){
//включение ночьного режима
$('#buttonNightmode').click(function () {

     $('body').toggleClass('nightmode');

         if($('#buttonNightmode').text()=='Ночной режим'){
             $('#buttonNightmode').text('Дневной режим');
         }
         else {
             $('#buttonNightmode').text('Ночной режим');
         }

    });
// подключение плагина карусель
    $(".owl-carousel").owlCarousel();

});
