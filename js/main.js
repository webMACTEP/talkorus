$(document).ready(function () {
  $('.about-info__item.active .about-info__body').each(function () {
    $(this).css('max-height', this.scrollHeight + 'px');
  });

  $('.about-info__head').on('click', function () {
    const $item = $(this).closest('.about-info__item');
    const $body = $item.find('.about-info__body');
    const isActive = $item.hasClass('active');

    if (isActive) {
      $body.css('max-height', 0);
      $item.removeClass('active');
    } else {
      $('.about-info__item.active').each(function () {
        $(this).removeClass('active');
        $(this).find('.about-info__body').css('max-height', 0);
      });

      $item.addClass('active');
      $body.css('max-height', $body[0].scrollHeight + 'px');
    }
  });
});