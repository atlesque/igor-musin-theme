/* global jQuery, ImageViewer */
(function ($) {
  $(document).ready(() => {
    // Init ImageViewer on attachment page
    var viewer = ImageViewer()
    $('.entry-attachment img').click((e) => {
      var imgSrc = $(e.currentTarget).parent().attr('data-attachment-link')
      viewer.show(imgSrc)
    })

    // Bind ESC key to close ImageViewer modal
    $(document).keyup((e) => {
      if (e.keyCode === 27) { // ESC key
        viewer.hide()
      }
    })

    // Init fancybox image gallery on gallery page
    $('.gallery-item a').fancybox({ hideScrollbar: false }).attr('data-fancybox', 'gallery');
  })
})(jQuery)
