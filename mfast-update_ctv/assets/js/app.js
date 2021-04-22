let collaborators = (function () {
  function collaborators() {
  }
  collaborators.prototype.toggleModal = function () {
    $('.js-toggle_modal, .md_collaborators_over').click(function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('active');
    });
  };
  collaborators.prototype.toggleModalBranch = function () {
    $('.js-modal_branch').click(function(e) {
      e.preventDefault();
      let _target = $(this).attr('data-target');
      $('.js-md_detail_branch[data-modal="' + _target + '"]').toggleClass('active');
    });
    $('.js-close_modal, .md_over').click(function() {
      $(this).parents('.md_detail_branch').removeClass('active');
    });
  };
  return collaborators;
}());

let _collaborators = new collaborators();