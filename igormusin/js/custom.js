/* global jQuery, ImageViewer */
(function ($) {
  $(document).ready(() => {
    var viewer = ImageViewer()
    $('.entry-attachment img').click((e) => {
      var imgSrc = $(e.currentTarget).parent().attr('data-attachment-link')
      viewer.show(imgSrc)
    })

    $(document).keyup((e) => {
      if (e.keyCode === 27) { // ESC key
        viewer.hide()
      }
    })
  })
})(jQuery)
