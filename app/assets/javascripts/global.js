// Select2 initialization
$(document).on('turbolinks:load', function() {
  $('.select2').select2({theme: 'bootstrap4'});
});

// Locale
var getLocaleFromURL = function () {
  var pageURL = decodeURIComponent(window.location.pathname);
  var URLVariables = pageURL.split('/');
  if (URLVariables.length > 2) {
    return URLVariables[1];
  }
  else {
    return 'en';
  }
};

var locale = getLocaleFromURL();
