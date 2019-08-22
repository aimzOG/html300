//manual nav of carousel
$('.carousel').carousel();

//toggles lightbox for enlarged image
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

//lightbox controls
$(this).ekkoLightbox({
  alwaysShowClose: true,
  onNavigate: function (direction, itemIndex) {
    console.log('Navigating ' + direction + '. Current item: ' + itemIndex);
  }
});

