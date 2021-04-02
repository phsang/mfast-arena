var arena = (function () {
  function arena() {
  }
  arena.prototype.processStar = function () {
    let _par = $('.js-star_level');
    let _countStar = _par.attr('data-star');
    let _star = '';
    for (let i = 0; i < parseInt(_countStar); i++) {
      _star += '<img src="./assets/images/ico-star.png" alt="star" width="32">';
    }
    _par.append(_star);
  };
  // modal
  arena.prototype.toggleModal = function () {
    $('.btn_close_modal, .js-modal').click(function() {
      $('.js-modal_arena').toggleClass('show');
    });
  };
  return arena;
}());

var _arena = new arena();