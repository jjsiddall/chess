window.onload = function() {
  var draggables = $('.square');
  console.log(document.querySelector('.board'));
  dragula([document.querySelector('.board')]);
  // dragula([document.querySelector('.square')])
  // dragula([draggables]);
}


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
