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
