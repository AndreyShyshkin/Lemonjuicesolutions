$(document).ready(function() {
    let detailsElements = $('details');
    detailsElements.on('click', function() {
      detailsElements.not(this).removeAttr('open');
    });
  });