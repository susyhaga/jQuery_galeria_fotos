$(document).ready(function(){
    console.log($('header button'));
    console.log($('#botao-cancelar'));

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    // $('form').on('submit', function(e){
    //     e.preventDefault(e);
    //     const enderecoDaNovaImagem=('#endereco-imagem-nova').val();


    $('form').on('submit', function(e){
        e.preventDefault(e);
        const enderecoDaNovaImagem=$('#endereco-imagem-nova').val();
        const novoItem=$('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
        <div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" title="ver imagem em tamanho real"target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-imagem-nova').val('');
    })

})
