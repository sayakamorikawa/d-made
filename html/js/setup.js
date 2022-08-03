/* 画像ロールオーバー（ない場合は透明化） */
$(function () {
    var currentFile = location.href.split('/').pop();
    var ua = navigator.userAgent;

    $('a img').each(function () {
        var imgSrc = $(this).attr('src');
        if (imgSrc.match(/(.*)_off(\..*)/)) {
            var repSrc = RegExp.$1 + '_on' + RegExp.$2;
            $('<img />').attr('src', repSrc);
            $(this).hover(function () {
                $(this).attr('src', repSrc);
                $(this).css({ opacity: '1', filter: 'alpha(opacity=100)' });
            }, function () {
                $(this).attr('src', imgSrc);
            });
        } else if (!$(this).hasClass('not')) {
            $(this).hover(function () {
                $(this).css({
                    // opacity: '0.85',
                    // filter: 'alpha(opacity=60)'
                });
            }, function () {
                $(this).css({
                    // opacity: '1',
                    // filter: 'alpha(opacity=100)'
                });
            }
            );
        }
    });
});

/* TELボタン */
$(function () {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') < 0 && ua.indexOf('Android') < 0) {
        $('a[href^="tel:"]').css({
            "cursor": "default",
            "text-decoration": "none",
            "opacity": "1"
        }).click(function (event) { event.preventDefault(); });
    }
});

/* ウインドウリサイズ */
$(document).ready(function () {
    funcResize();
    $(window).resize(function () {
        funcResize();
    });

    function funcResize() {
        var wid = $(window).width();

        //画像の切替
        if (wid < 767) {
            $('.switch').each(function () {
                $(this).attr("src", $(this).attr("src").replace('_pc', '_sp'));
            });
        } else {
            $('.switch').each(function () {
                $(this).attr("src", $(this).attr("src").replace('_sp', '_pc'));
            });
        }
    };

    // Page Bottom Stick menu
    $(window).scroll(function () {
        var value = $(this).scrollTop();	//スクロール値を取得
        var hdmenu = $('.unfix');
        
        // header menu settings
        if (value < 200) {   //scroll over 100
            hdmenu.slideDown();
            $('header').removeClass("over");
        } else {              //scroll top
            hdmenu.slideUp();
            $('header').addClass("over");
        }
    });

});

