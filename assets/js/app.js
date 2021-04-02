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
    let _par = $('.modal_container');
    var _wid = _par.width();
    $('.btn_close_modal, .js-modal').click(function() {
      let _dataTabs = $(this).attr('data-tabs');
      let _translateX = _wid * (parseInt(_dataTabs) - 1);
      $('.modal_content').css('transform', 'translateX(-' + _translateX + 'px)');
      $('.js-modal_arena').toggleClass('show');
    });
    $('.js-tabs_modals').click(function() {
      let _dataTabs = $(this).attr('data-tabs');
      let _translateX = _wid * (parseInt(_dataTabs) - 1);
      $('.modal_content').css('transform', 'translateX(-' + _translateX + 'px)');
    });
  };
  // process bar level
  arena.prototype.processBarLevel = function () {
    let _process = $('.process_bar');
    let _levelMedal = _process.attr('data-levels');
    let _wid = _process.width() / 5;
    let _widBack = parseFloat(_wid) * parseFloat(_levelMedal);
    _process.css({
      'background': 'linear-gradient(90deg, #243a91 0, #6d8bff ' + _widBack + 'px, transparent ' + _widBack + 'px)'
    });
    let _subBar = '';
    for (let i = 0; i < 6; i++) {
      _subBar += '<span></span>';
    }
    _process.html(_subBar);
  }
  // process bar level
  arena.prototype.expandGroupLevel = function () {
    let _btn = $('.btn_expand_group');
    _btn.click(function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  }
  return arena;
}());

var _arena = new arena();