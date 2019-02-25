$(document).ready(function() 
{
    $('.comando').draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        //revert: "invalid", // when not dropped, the item will revert back to its initial position
        revert: true, // bounce back when dropped
        helper: "clone", // create "copy" with original properties, but not a true clone
        cursor: "move"
        , revertDuration: 0 // immediate snap
    });
    
    var $container
    $('.esqueleto').droppable({
        accept: ".comando",
        activeClass: "ui-state-highlight",
        drop: function( event, ui ) 
        {
            // clone item to retain in original "list"
            var $item = ui.draggable.clone();

            $(this).addClass('has-drop').append($item);

            iniciaVisualizador();
        }
    });

    function iniciaVisualizador()
    {
        var conteudo_visualizador = "";
        $('.esqueleto').find('li').each(function(index, el) 
        {
            conteudo_visualizador+= el.dataset.code;
        });

        var iframe = document.getElementById('visualizar');

        var doc = iframe.contentDocument;

        doc.body.innerHTML = conteudo_visualizador; 

    }
});