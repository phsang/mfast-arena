let potential = (function () {
  function potential() {
  }
  const _atClass = 'active';
  // toggle modal
  potential.prototype.toggleModal = function () {
    let _jsModal = $('.js-toggle_modal');
    let _bodyMd = 'show_modal';
    _jsModal.click(function (e) {
      e.preventDefault();
      $(this).toggleClass(_atClass);
      let _target = $(this).attr('data-target');
      let _scroll = $(this).attr('data-scroll') || false;
      $('.js-modal[data-modal="' + _target + '"]').toggleClass(_atClass);
      if(_scroll != 'scroll') {
        $('html, body').addClass(_bodyMd);
      }
      if($(this).parents('.md-pot_content').length) {
        $('.md-pot_content').animate({
          scrollTop: 0
        }, 400, function() {
          $(this).css('overflow', 'hidden');
        });
      }
    });
    $('.call_customer').click(function () {
      return false;
    });
    $('.md_over, .js-close_modal').click(function () {
      $('html, body').removeClass(_bodyMd);
      $(this).closest('.js-modal').removeClass(_atClass);
      _jsModal.removeClass(_atClass);
      $('.md-pot_content').css('overflow', 'auto');
    });
  };
  // toggle tabs
  potential.prototype.toggleTabs = function () {
    let _menuItem = $('.js-tab_menu_item');
    _menuItem.click(function (e) {
      e.preventDefault();
      _menuItem.removeClass(_atClass);
      $(this).addClass(_atClass);
      let _target = $(this).attr('data-target');
      $('.js-tab_content').fadeOut();
      $('.js-tab_content[data-tab="' + _target + '"]').fadeIn();
    });
  };
  // toggle radio box
  potential.prototype.toggleRadioBox = function () {
    $('.js-check_par').change(function () {
      let _target = $(this).attr('data-target');
      let _radio = $('.js-check[data-radio="' + _target + '"]');
      if ($(this).is(":checked")) {
        _radio.attr('disabled', false);
        _radio.first().prop('checked', true);
      } else {
        _radio.attr('disabled', true).prop('checked', false);
      }
    });
    $('.select_counselors_content a').click(function() {
      
    });
  };
  // lo???i b??? d???u ti???ng vi???t
  potential.prototype.removeAccents = function (str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/??/g, 'd').replace(/??/g, 'D');
  };
  // custom select_option mobile
  potential.prototype.customSelectOption = function () {
    $('body').on('click', '.option_value_item', function() {
      $('.option_value_item').removeClass(_atClass);
      $(this).addClass(_atClass);
    });
    $('body').on('click', '.js-select_option button', function() {
      $(this).closest('.js-modal').removeClass(_atClass);
      let _val = $('.js-list_option .active').attr('data-val');
      let _target = $(this).attr('data-target');
      $('#' + _target).find('input').val(_val);
      $('#' + _target).find('.option_value>span').first().text('- ' + _val + ' -');
    });
    $('body').on('keyup', '.js-search_option', function() {
      let _filValue = $(this).val().toLowerCase();
      let _list = $(this).parent().next().find('.option_value_item');
      for (let i = 0; i < _list.length; i++) {
        if(!_filValue) {
          $(_list[i]).removeClass('fil');
        } else {
          let _text = $(_list[i]).text().toLowerCase();
          let _strVal = _potential.removeAccents(_text);
          if(_strVal.match(_filValue) || _text.match(_filValue)) {
            $(_list[i]).removeClass('fil');
          } else {
            $(_list[i]).addClass('fil');
          }
        }
      }
    });
  };
  // ch???n radioBox t??? modal popup
  potential.prototype.checkRadioBox = function () {
    let _par = $('.js-select_counselors');
    _par.find('a').click(function() {
      $(this).closest('.js-modal').removeClass(_atClass);
      let _radio = $(this).attr('data-radio_check');
      $('.js-check').prop('checked', false);
      $('.js-check[data-check="' + _radio + '"]').prop('checked', true);
    });
  };
  // T???o li??n k???t kh??ch h??ng
  potential.prototype.createConnection = function () {
    let _btn = $('.js-create_connection');
    _btn.click(function() {
      $('.js-mf_loading').addClass('in_process');
      setTimeout(() => {
        $('.js-mf_loading').removeClass('in_process');
        let _par = $('.create_connection_on_step');
        _par.animate({scrollLeft: _par.width()}, 400);
      }, 2000);
    });
  };
  // Validate input
  potential.prototype.validateInput = function (_lenght) {
    _lenght = 0 | _lenght;
    $('.js-vali_input').on('input', function(){
      let _len = $(this).val().toString().length;
      if(_len > _lenght) {
        $(this).val($(this).val().toString().slice(0, -1));
      } else {
        $(this).next().text(_len + ' / ' + _lenght);
      }
    });
  };
  // mortgage toggle slide
  potential.prototype.mortgageToggle = function (_lenght) {
    $('.mortgage_kind_item_head').click(function() {
      $(this).toggleClass(_atClass);
      $(this).next('.mortgage_kind_item_body').slideToggle();
    });
  };
  // copy to clipboard
  potential.prototype.copyToClipboard = function () {
    $('.btn-copy_to_clipboard').click(function() {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(this).attr('data-link')).select();
      document.execCommand("copy");
      $temp.remove();
      $('.copy2_clipboard').addClass('in_process');
      setTimeout(() => {
        $('.copy2_clipboard').removeClass('in_process');
      }, 3000);
    });
  };
  return potential;
}());

let _potential = new potential();
_potential.toggleModal();
_potential.toggleTabs();
_potential.toggleRadioBox();
_potential.customSelectOption();
_potential.checkRadioBox();
_potential.createConnection();
_potential.validateInput(24);
_potential.mortgageToggle();
_potential.copyToClipboard();
