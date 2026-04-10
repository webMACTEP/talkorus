$(document).ready(function () {
  $(".about-info__item.active .about-info__body").each(function () {
    $(this).css("max-height", this.scrollHeight + "px");
  });

  $(".about-info__head").on("click", function () {
    const $item = $(this).closest(".about-info__item");
    const $body = $item.find(".about-info__body");
    const isActive = $item.hasClass("active");

    if (isActive) {
      $body.css("max-height", 0);
      $item.removeClass("active");
    } else {
      $(".about-info__item.active").each(function () {
        $(this).removeClass("active");
        $(this).find(".about-info__body").css("max-height", 0);
      });

      $item.addClass("active");
      $body.css("max-height", $body[0].scrollHeight + "px");
    }
  });

  $(".hotspot__dot").on("click", function (e) {
    e.stopPropagation();

    const $hotspot = $(this).closest(".hotspot");
    const isActive = $hotspot.hasClass("active");

    $(".hotspot").removeClass("active");

    if (!isActive) {
      $hotspot.addClass("active");
    }
  });

  $(document).on("click", function () {
    $(".hotspot").removeClass("active");
  });

  if ($(".heroSwiper").length) {
    new Swiper(".heroSwiper", {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  $(".project-card").each(function () {
    const slider = $(this).find(".project-card__slider")[0];
    const nextBtn = $(this).find(".project-card__nav--next")[0];
    const prevBtn = $(this).find(".project-card__nav--prev")[0];

    if (slider) {
      new Swiper(slider, {
        loop: true,
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
      });
    }
  });
});