$(function(){

    abrirJanela();
    fecharBtn();

    function abrirJanela() {
       $('.icon-mobile').click(function(e){
        e.stopPropagation();
          $('.modal-mobile').fadeIn();
       })
    }

    function fecharBtn() {
        var el = $('body,.btn-fechar');
        el.click(function() {
            $('.modal-mobile').fadeOut();
        })
    }

    $('.modal-mobile').click(function(e){
        e.stopPropagation();
    })
})