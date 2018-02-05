$('.exercises.show').ready(function() {
  $('.move').on('click', function(e) {
      e.preventDefault();

      square = $("#"+$(this).data("square"));
      piece = $("#"+$(this).data("piece"));

      piece.animate({
           left: square.position().left,
           top: square.position().top
         }, 500 , function() {
           square.append(piece);
        });
  });
});

$('.exercises.edit').ready(function() {
  dragula($('.square').toArray()).on('drop', function (el) {
    $(el).siblings().remove();//removes any elements already in the square moved to
    $("#exercise_setup").val(JSON.stringify(generate_setup()).replace(/:/g, "=>"));
  });
});

function generate_setup() { //generates a Setup Object
  var setup = new Object(); //object to hold the board setup
  $('.square').each( function( index, element ){ //go thru each square of the board looking for pieces
    square = $(element); //get the square
    square_id = square.attr('id'); //get the id of the square
    piece = square.children( ".piece" ); //get object on the square
    piece_html = piece.html(); //get the html of the piece on the square
    piece_id = piece.attr('id'); //get the id of the piece on the square
    if ((piece_html != undefined) && (piece_id != undefined) && (square_id != undefined)){
      setup[square_id] = {html:piece_html, id:piece_id} //adds piece to the Setup Object
    }
  });
  return setup; //returns the Setup Object
}
