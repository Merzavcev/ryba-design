var RYBA = {
    buildGrid : function(data) {
        var coverArray = {};
        // последние добавленные проекты стоят первыми
        for (var i = data.length - 1; i >= 0; i--) {
            var currentItem = data[i];
            coverArray[currentItem.name]= currentItem.cover[0];
            $('[data-name="' + currentItem.name + '"]').css('background','url('+ currentItem.cover[0] +')');
        }
        console.log(coverArray);

    },
    // показать страницу, убрать плавно blackscreen
    show : function() {
        $('.blackscreen').fadeOut('slow', function() {
            $('body').removeClass('page_loading');
        });
    },
    // логика учета состояния меню
    updateMenu : function() {
        var hash = window.location.hash,
            $activeItem = $('.b-link_active'),
            defaultItem = '#portfolio',
            setActive = function() {
                $('.common-menu [href=' + hash + ']').addClass('b-link_active');
            };

        if(hash === ''){
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
    },
    init : function () {
    // страница работает только с данными о проектах
        $.
            when($.getJSON('data/gallery.json')).
            then(function(data) {

                RYBA.buildGrid(data);
                RYBA.show();
                window.onload = RYBA.updateMenu;
                window.onhashchange = RYBA.updateMenu;

            }, function() {
                console.log('No data');
            });
    }
};

RYBA.init();