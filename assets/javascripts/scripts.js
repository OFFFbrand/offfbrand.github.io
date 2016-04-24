// Init Foundation
$(document).foundation();

// Init Highlight.js
//hljs.initHighlightingOnLoad();

$(document).ready(function() {
  spacer_sizer();
  $(window).resize(spacer_sizer);
});

function spacer_sizer() {
  $(".spacer").height($(".footer").outerHeight());
}
