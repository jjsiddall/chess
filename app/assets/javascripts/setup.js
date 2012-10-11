$(document).ready(function() {
	
	//Sizing the board to the "show" size
	sizer(.5);

	$('.piece').addClass('draggable');
  	//used for trophy set up - drag 'em around and drop'em where ever
  	$( ".draggable" ).draggable({ containment: "#board" });

  	$('.square').droppable({
    	drop: function(event, ui) {
		    // $(this).html($(ui.draggable).css('left'));
		    // .html('');
		    // $(".last_move").removeClass('last_move');
		    // $(this).addClass('last_move');

		    // $(ui.draggable).attr('data-trophyid')
console.log($(ui.draggable).html() + " was dropped on " + $( this ).attr('id'))

		pieceBeingMoved = $(ui.draggable);
		$( this ).append(pieceBeingMoved);
		pieceBeingMoved.css("top", "");
		pieceBeingMoved.css("left", "");
		    // $.ajax({
	     //    	url: '/results/'+$(ui.draggable).attr('data-trophyid'),
	     //    	type: 'PUT',
	     //    	data: {
	     //        	'result[id]': $(ui.draggable).attr('data-trophyid'),
	     //        	'result[trophyPositionTop]': $(ui.draggable).css('top'),
	     //        	'result[trophyPositionLeft]': $(ui.draggable).css('left')
      //   		},
      //   		dataType: 'json'
      // 		});
    	}
  	});
});