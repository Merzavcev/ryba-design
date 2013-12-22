var RYBA = {
    updateMenu : function() {
        var hash = window.location.hash,
            $activeItem = $('.b-link_active'),
            defaultItem = '#portfolio',
            setActive = function() {
                $('.r-common-menu [href=' + hash + ']').addClass('b-link_active');
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

$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        e.preventDefault();
        $('.r-gallery')[0].scrollLeft -= (delta * 20);
    });
});