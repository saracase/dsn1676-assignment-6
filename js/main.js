var $btnShow = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $btnAppend = $('.btn-append');
var $circle = $('.circle');
var $box = $('.box');
var $panel = $('.panel');
var $diamond = $('.diamond');
var $list = $('.list');
var $li = $('<li>');

$btnShow.on('click', function () {
    $box.toggleClass('js-box-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-diamond-move');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse');
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});

$circle.on('animationend', function () {
    $circle.removeClass('js-circle-bounce');
});
    
    $li.append();
    $list.append($li);
    
    $li.addClass('list-item');
    
    $del.on('click', function () {
        $li.remove();
    });
});

$list.on('click', 'li', function () {
    $(this).toggleClass('');
});