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
  dragula($('.square').toArray()).on('drop', function () {
     generate_setup();
  });
});

function generate_setup() {
  $('.square').each( function( index, element ){


    square = $(element); //get the square
    square_id = square.attr('id'); //get the id of the square
    piece = square.children( ".piece" ); //get object on the square
    piece_html = piece.html(); //get the html of the piece on the square
    piece_id = piece.attr('id'); //get the id of the piece on the square

    if ((piece_html != undefined) && (piece_id != undefined) && (square_id != undefined)){
      console.log(square_id + " " + piece_html + " " + piece_id);
    }
  });
}
