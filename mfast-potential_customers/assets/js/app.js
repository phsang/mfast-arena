let potential = (function () {
  function potential() {
  }
  // toggle modal
  potential.prototype.toggleModal = function () {
    let _acTClass = 'active';
    $('.js-toggle_modal').click(function (e) {
      e.preventDefault();
      $(this).toggleClass(_acTClass);
      let _target = $(this).attr('data-target');
      $('.js-modal[data-modal="' + _target + '"]').toggleClass(_acTClass);
      $('html, body').addClass('show_modal');
    });
    $('.call_customer').click(function () {
      return false;
    });
    $('.md_over, .js-close_modal').click(function () {
      $('html, body').removeClass('show_modal');
      $(this).closest('.js-modal').removeClass(_acTClass);
      $('.js-toggle_modal').removeClass(_acTClass);
    });
  };
  // toggle tabs
  potential.prototype.toggleTabs = function () {
    $('.js-tab_menu_item').click(function (e) {
      e.preventDefault();
      $('.js-tab_menu_item').removeClass('active');
      $(this).addClass('active');
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
  // loại bỏ dấu tiếng việt
  potential.prototype.removeAccents = function (str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  };
  // custom select_option mobile
  potential.prototype.customSelectOption = function () {
    $('body').on('click', '.option_value_item', function() {
      $('.option_value_item').removeClass('active');
      $(this).addClass('active');
    });
    $('body').on('click', '.js-select_option button', function() {
      $(this).closest('.js-modal').removeClass('active');
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
  // chọn radioBox từ modal popup
  potential.prototype.checkRadioBox = function () {
    let _par = $('.js-select_counselors');
    _par.find('a').click(function() {
      $(this).closest('.js-modal').removeClass('active');
      let _radio = $(this).attr('data-radio_check');
      $('.js-check').prop('checked', false);
      $('.js-check[data-check="' + _radio + '"]').prop('checked', true);
    });
  };
  // Tạo liên kết khách hàng
  potential.prototype.createConnection = function () {
    let _btn = $('.js-create_connection');
    _btn.click(function() {
      $('.mf_loading').addClass('in_process');
      setTimeout(() => {
        $('.mf_loading').removeClass('in_process');
        let _par = $('.create_connection_on_step');
        _par.animate({scrollLeft: _par.width()}, 400, function() {
          // $(this).css('overflow-y', 'auto');
        });
      }, 2000);
    });
  };
  // Validate input
  potential.prototype.validateInput = function (_lenght) {
    $('.js-vali_input').on('keyup', function(){
      let _len = $(this).val().toString().length;
      if(_len > _lenght) {
        $(this).val($(this).val().toString().slice(0, -1));
      } else {
        $(this).next().text(_len + ' / ' + _lenght);
      }
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
