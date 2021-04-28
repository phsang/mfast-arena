let potential = (function () {
  function potential() {
  }
  potential.prototype.toggleModal = function () {
    let _acTClass = 'active';
    $('.js-toggle_modal').click(function(e) {
      e.preventDefault();
      $(this).toggleClass(_acTClass);
      let _target = $(this).attr('data-target');
      $('.js-modal[data-modal="' + _target + '"]').toggleClass(_acTClass);
      $('html, body').toggleClass('show_modal');
    });
    $('.call_customer').click(function() {
      return false;
    });
    $('.md_over, .js-close_modal').click(function() {
      $('html, body').toggleClass('show_modal');
      $(this).parents('.js-modal').removeClass(_acTClass);
      $('.js-toggle_modal').removeClass(_acTClass);
    });
  };
  potential.prototype.toggleTabs = function () {
    $('.js-tab_menu_item').click(function(e) {
      e.preventDefault();
      $('.js-tab_menu_item').removeClass('active');
      $(this).addClass('active');
      let _target = $(this).attr('data-target');
      $('.js-tab_content').fadeOut();
      $('.js-tab_content[data-tab="' + _target + '"]').fadeIn();
    });
  };
  return potential;
}());

let _potential = new potential();
_potential.toggleModal();
_potential.toggleTabs();
