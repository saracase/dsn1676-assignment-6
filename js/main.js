var $btnShow = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');
var $box = $('.box');
var $panel = $('.panel');
var $diamond = $('.diamond');

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