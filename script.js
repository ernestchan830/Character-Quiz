// Write your click handler and conditionals here
$(".button").click(function(){
    var talk = $(".talk").val();
    var genre = $(".genre").val();

    //alert(color);
    if (talk === "Yes" && genre === "Action") {
            $(".h1").text("Ice Bear");
            
    } else if (talk === "No" && genre === "Action") {
            $(".h1").text("Atticus");
    }
      else if (talk === "Yes" && genre === "Rom-Com") {
            $(".h1").text("Beemo");
    } 
      else if (talk === "No" && genre === "Rom-Com") {
            $(".h1").text("Aggretsuko");

}
});

