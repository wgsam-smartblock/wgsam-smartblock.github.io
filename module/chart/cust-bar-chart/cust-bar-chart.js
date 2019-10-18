$(document).ready(function () {
  $('.bar-chart-left li').each(function () {
    var dataLeftWidth = $(this).data('value');
    if (dataLeftWidth > 100) {
      throw new Error(`Bar Chart left exceed maximum percentage value (must within 0-100%)`);
    } else {
      $(this).append('<em>&nbsp;</em>');
      $(this).append('<span>' + dataLeftWidth + '%</span>');

      $(this).find('em').width(dataLeftWidth + '%');
    }
  });

  $('.bar-chart-right li').each(function () {
    var dataRightWidth = $(this).data('value');
    if (dataRightWidth > 100) {
      throw new Error(`Bar chart right exceed maximum percentage value (must within 0-100%)`);
    } else {
      $(this).append('<em>&nbsp;</em>');
      $(this).append('<span>' + dataRightWidth + '%</span>');

      $(this).find('em').width(dataRightWidth + '%');
    }
  });
});