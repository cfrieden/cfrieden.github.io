var fact_factory = function(str){
  return "<div class=\"fact\"\>" +
    "<img src=\"resources/images/3340834.png\" style=\"width:100%; height:90%\"\/\>" +
    "<div class=\"content\">" +
      "<p>"+str + "<\/p\>" +
    "<\/div>" +
  "<\/div>"
}

$(document).ready(function() {
  $.each(facts, function(i,item){
    $(".facts").append(fact_factory(item.fact));
  });
  $("form").submit( function(event) {
    event.preventDefault();
    $(".facts").append(fact_factory($(".add_form textarea").val()));
    this.reset();
  });

});
