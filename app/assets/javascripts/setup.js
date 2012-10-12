$(document).ready(function() {
	
	//Sizing the board to the "show" size
	sizer(.5);

	$('.piece').addClass('draggable');
  	//used for trophy set up - drag 'em around and drop'em where ever
  	$( ".draggable" ).draggable({ containment: "#setup_board" });

  	$('.square').droppable({
    	drop: function(event, ui) {
		    // $(this).html($(ui.draggable).css('left'));
		    // .html('');
		    // $(".last_move").removeClass('last_move');
		    // $(this).addClass('last_move');

		    // $(ui.draggable).attr('data-trophyid')
			pieceBeingMoved = $(ui.draggable);
			$( this ).append(pieceBeingMoved);
			pieceBeingMoved.css("top", "");
			pieceBeingMoved.css("left", "");

			var initial_setup = getCurrentLayout();

		    $.ajax({
	        	url: '/exercises/3',
	        	type: 'PUT',
	        	data: {
	            	'exercise[id]': 3,
	            	'exercise[initial_setup]': initial_setup
	    		},
	    		dataType: 'json'
	  		});
    	}
  	});
});

function getCurrentLayout(){
	var initial_setup = "";
	$(".square").each(function(e) {
		var this_square = $(this);
		if (this_square.children().length > 0){
			//console.log(this_square.children()[0])
			if (this_square.children().attr('class').indexOf("black") != -1){
	  			initial_setup = initial_setup + "," + this_square.attr('id') + "-" + "black" + "-" + this_square.children().html();	
			}
			else{
	  			initial_setup = initial_setup + "," + this_square.attr('id') + "-" + "white" + "-" + this_square.children().html();	
			}
		}
	});
	console.log(initial_setup.substring(1)); 
	return initial_setup.substring(1);
}