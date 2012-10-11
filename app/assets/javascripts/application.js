// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs


$(document).ready(function() {
	
//	This is the slider (need to clean this up a lot)
        // var select = $( "#board_size" );
        // $( "#slider" ).slider({
        //     min: 1,
        //     max: 10,
        //     range: "min",
        //     value: select[ 0 ].selectedIndex + 1,
        //     slide: function( event, ui ) {
        //         select[ 0 ].selectedIndex = ui.value - 1;
        //         sizer(ui.value/5);
        //     }
        // });




	loadPiecesOnBoard($("#board").data('initial_setup').split(","))


	// var moves = $("#board").data('moves').split(",")

	// $('#move').on('click', function() {

	// 	if (moves.length !=0) {
	// 		one_move(moves[0]);
	// 		moves.shift();
	// 	}
		
	// 	// var ilen = moves.length
	// 	// for (var i=0; i<ilen; ++i) {
	// 	// 	stuff
	// 	// }

	// });


});

// function one_move(move){
// 	//Look at current from and to move, then find the change in squares
// 	var current_move = move.split("-");

// 	//remove anything but the last two letters from the moves
// 	current_move[0] = current_move[0].substr(-2);
// 	current_move[1] = current_move[1].substr(-2);

// 	var rank_change = find_change_in_rank(current_move);
// 	var file_change = find_change_in_file(current_move);
	
// 	console.log("Rank: "+rank_change)	
// 	console.log("File: "+file_change)	
	
// 	//need to determine if its a knight move or a bishop/queen/king
// 	if ((rank_change != 0) && (file_change != 0) && (move.search("N") === -1))
// 	{
// 		move_diagonal(current_move[0], current_move[1], rank_change, file_change)
// 	}
// 	else
// 	{
// 		move_rank(current_move[0] , rank_change);
// 		move_file(current_move[0] , current_move[1], file_change );
// 	}


// 	//debugging
// 	highlightSquare(current_move[0]);
// 	highlightSquare(current_move[1]);
// }

// //Passing in start and end square, now to determine movement number of squares
// function find_change_in_rank(start_end_array){
// 	//subtract rank numbers gives the up/down value

// 	return start_end_array[1].charAt(1) - start_end_array[0].charAt(1);
// }
// function find_change_in_file(start_end_array){
// 	//convert file from alpha to number and find right/left value

// 	return (start_end_array[1].charAt(0).charCodeAt()-96) - (start_end_array[0].charAt(0).charCodeAt()-96);

// }

// //Basic Movement: Up or Down the board
// function move_rank(squareName, distanceInSquares){
// 	//get DOM element to be moved
// 	var pieceBeingMoved = $("#"+squareName).children();
// 	//find its current Up-Down position on the board (needed due to
// 	//position absolute)
// 	var oldSpot = pieceBeingMoved.position().top;
// 	//set current Up-Down position so it does not fly to the top of the board (due to 
// 	//it starting at 0)
// 	$(pieceBeingMoved).css("top", oldSpot +"px");
// 	//set what the new spot will be from the old (it is in squares and each square
// 	//is variable, so get the value and then multiply them out)
//     var square_size = parseInt($('.square').css("height"));

//     var newSpot = oldSpot-(distanceInSquares*square_size);
//     //animate the movement
//   	$(pieceBeingMoved).animate( {"top": newSpot +"px"}, 500 );	
// }

// //Basic Movement: Right or left on the board
// function move_file(old_square, new_square, distanceInSquares){

// 	//get DOM element to be moved
// 	var pieceBeingMoved = $("#"+old_square).children();
// 	//find its current Right-Left position on the board (needed due to
// 	//position absolute)
// 	var oldSpot = pieceBeingMoved.position().left;
// 	//set current Rigth-Left position so it does not fly to the top of the board (due to 
// 	//it starting at 0)
// 	$(pieceBeingMoved).css("left", oldSpot +"px");
// 	//set what the new spot will be from the old (it is in squares and each square
// 	//is variable, so get the value and then multiply them out)
//     var square_size = parseInt($('.square').css("height"));

//     var newSpot = oldSpot+(distanceInSquares * square_size);
//     //animate the movement
//   	$(pieceBeingMoved).animate( {"left": newSpot +"px"}, 500, function() {
//     	// Animation complete append piece
// 		append_to_square(old_square, new_square);
//   	 });
// }

// //Basic Movement: Diagonal on the board
// function move_diagonal(old_square, new_square, rank_change, file_change){
// 	//get DOM element to be moved
// 	var pieceBeingMoved = $("#"+old_square).children();
// 	//find its current position on the board (needed due to
// 	//position absolute)
// 	var oldSpotTop = pieceBeingMoved.position().top;
// 	var oldSpotLeft = pieceBeingMoved.position().left;
// 	//set current position so it does not fly to the top of the board (due to 
// 	//it starting at 0)
// 	$(pieceBeingMoved).css("top", oldSpotTop +"px");
// 	$(pieceBeingMoved).css("left", oldSpotLeft +"px");
// 	//set what the new spot will be from the old (it is in squares and each square
// 	//is variable, so get the value and then multiply them out)
//     var square_size = parseInt($('.square').css("height"));

//     //animate the movement
//   	$(pieceBeingMoved).animate({
//   		"top": oldSpotTop-(rank_change * square_size) +"px", 
// 		"left": oldSpotLeft+(file_change * square_size) +"px", 
//   		}, 500 , function() {
//     		// Animation complete append piece
// 			append_to_square(old_square, new_square);
//   	 });
// }

// //Used to remove the piece from the oringinal square 
// //and append a piece from one square to another
// function append_to_square(old_square, new_square){
// 	var pieceBeingMoved = $("#"+old_square).children();
// 	new_square = $("#"+new_square);

// console.log(new_square.children())
// 	if (new_square.children().length > 0){
// 		new_square.effect("highlight", {"color" : "red"}, 3000)
// 		new_square.children().remove();
// 		console.log("here")
// 	}

// 	new_square.append(pieceBeingMoved)
// 	pieceBeingMoved.css("top", "")
// 	pieceBeingMoved.css("left", "")
// }  

// function highlightSquare(boardSquare){ $('#'+boardSquare).effect("highlight", {"color" : "yellow"}, 1000) }

function loadPiecesOnBoard(initial_setup){
	
	var piece_name = ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"]
	var piece_ascii = ["&#9818", "&#9819", "&#9820", "&#9821", "&#9822", "&#9823"]

	var ilen = initial_setup.length
	for (var i=0; i<ilen; ++i) {

		var square_info = initial_setup[i].split("-");

		var which_ascii = $.inArray(square_info[2], piece_name)

		$('#'+square_info[0]).append("<div class='piece "+square_info[1]+"'>"+piece_ascii[which_ascii]+"</div>")	
	}
 
}

function sizer(percent_of_original){
	var css_attr_to_shrink = ["#board", ".square", ".corner", ".side", ".top"]

	var ilen = css_attr_to_shrink.length
	for (var i=0; i<ilen; ++i) {
		$(css_attr_to_shrink[i]).css("height", parseInt($(css_attr_to_shrink[i]).css("height"))*percent_of_original)
			.css("width", parseInt($(css_attr_to_shrink[i]).css("width"))*percent_of_original)
	}

	var css_attr_to_shrink = [".piece", ".side", ".top"]
	var ilen = css_attr_to_shrink.length
	for (var i=0; i<ilen; ++i) {
		$(css_attr_to_shrink[i]).css("font-size", parseInt($(css_attr_to_shrink[i]).css("font-size"))*percent_of_original)
			.css("padding-left", parseInt($(css_attr_to_shrink[i]).css("padding-left"))*percent_of_original)
	}

}
