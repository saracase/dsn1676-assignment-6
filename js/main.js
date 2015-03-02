var $btnShow = $('.btn-show-hide');
var $btnMove = $('.btn-move');
var $btnCollapse = $('.btn-collapse-expand');
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