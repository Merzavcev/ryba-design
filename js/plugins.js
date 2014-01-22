var RYBA = {
    buildGrid : function(data) {
        var coverArray = {};
        // последние добавленные проекты стоят первыми
        for (var i = data.length - 1; i >= 0; i--) {
            var currentItem = data[i];
            coverArray[currentItem.name]= currentItem.cover[0];
            $('[data-name="' + currentItem.name + '"]').css('background','url('+ currentItem.cover[0] +')');
        };
        console.log(coverArray);
    },
    show : function() {
        $('.blackscreen').fadeOut('slow', function() {
            $('body').removeClass('page_loading');
        });
    },
    updateMenu : function() {
        var hash = window.location.hash,
            $activeItem = $('.b-link_active'),
            defaultItem = '#portfolio',
            setActive = function() {
                $('.common-menu [href=' + hash + ']').addClass('b-link_active');
            };
        
        if(hash == ''){
            window.location = window.location + defaultItem;
            return false;
        }

        if ($activeItem.length > 0) {
            if (hash !== $activeItem.attr('href')) {
                $activeItem.removeClass('b-link_active');
                setActive();
            }
        } else {
            setActive();
        }
    }
};
window.onload = RYBA.updateMenu;
window.onhashchange = RYBA.updateMenu;

$('.gallery').on('mouseover', '.gallery__item', function() {
    var data = $(this).data(),
      $spans = $('.portfolio__wrapper span');

    $spans.eq(0).text(data.object);
    $spans.eq(1).text(data.location);
    $spans.eq(2).text(data.year);
})

$('.showProjectLink').openDOMWindow({
    width: 685,
    height: 365,
    eventType: 'click',
    borderSize: 0,
    windowBGColor: 'whitesmoke',
    anchoredSelector: '.'+$(this).data().title
}); 
$.
    when($.getJSON('data/gallery.json')).
    then(function(data) {
        RYBA.buildGrid(data);
        console.log(data);

        RYBA.show();
    }, function() {
        alert('No data :(');
    });