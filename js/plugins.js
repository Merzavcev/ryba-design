var RYBA = {
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

$('.blackscreen').fadeOut('slow', function() {
    $('body').removeClass('page_loading');
});