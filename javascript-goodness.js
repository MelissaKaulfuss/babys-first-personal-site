

$(document).ready(function(){

  $('div.dropdown').each(function() {
    var $dropdown = $(this);

    $("a.dropdown-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.toggle();
      $("div.dropdown-container").not($div).hide();
      return false;
    });

});
  $('html').click(function(){
    $("div.dropdown-container").hide();
  });
});
