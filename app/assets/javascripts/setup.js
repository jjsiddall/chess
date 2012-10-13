$(document).ready(function() {
	
	//Sizing the board to the "show" size
	sizer(.5);
	//get which exercise I am working with (the id of it) so I can use it later on teh ajax call
	var exercise_id = $("#board").data('id')

	$('.piece').addClass('draggable');
  	//used for trophy set up - drag 'em around and drop'em where ever
  	makeDraggable();

  	$('.square').droppable({
    	drop: function(event, ui) {
		    // $(this).html($(ui.draggable).css('left'));
		    // .html('');
		    // $(".last_move").removeClass('last_move');
		    // $(this).addClass('last_move');

		    // $(ui.draggable).attr('data-trophyid')
			pieceBeingMoved = $(ui.draggable);
			$(this).children().remove();
			$( this ).append(pieceBeingMoved);
			pieceBeingMoved.css("top", "");
			pieceBeingMoved.css("left", "");

			var initial_setup = getCurrentLayout();

			resetExtraPiece($(ui.draggable));

		    $.ajax({
	        	url: '/exercises/' + exercise_id,
	        	type: 'PUT',
	        	data: {
	            	'exercise[id]': exercise_id,
	            	'exercise[initial_setup]': initial_setup
	    		},
	    		dataType: 'json'
	  		});
    	}
  	});
});

function makeDraggable(){
	$( ".draggable" ).draggable({ containment: "#setup_board" });
}

function getCurrentLayout(){
	var initial_setup = "";
	$(".square").each(function(e) {
		var this_square = $(this);
		if (this_square.children().length > 0 && this_square.attr('id') != undefined){
			//console.log(this_square.children()[0])
			if (this_square.children().attr('class').indexOf("black") != -1){
	  			initial_setup = initial_setup + "," + this_square.attr('id') + "-" + "black" + "-" + this_square.children().html();	
			}
			else{
	  			initial_setup = initial_setup + "," + this_square.attr('id') + "-" + "white" + "-" + this_square.children().html();	
			}
		}
	});
	return initial_setup.substring(1);
}

function resetExtraPiece(piece){
	//find what color the piece being moved is
	var piece_color = piece.attr('class').indexOf("black") != -1 ? "black" : "white";
	//figure out and cashe the DOM tag
	var reset_point = $('#'+piece_color+'-'+piece.html());
	//remove any children in currently attached to the extra pieces spot
	reset_point.children().remove();
	//clone what we moved and place it back into the extra pieces spot
	piece.clone().removeClass('ui-draggable-dragging').appendTo(reset_point);
	makeDraggable();
}