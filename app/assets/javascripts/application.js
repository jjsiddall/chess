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
//= require_tree .

$(document).ready(function() {
	loadPiecesOnBoard()
	var moves = $("#board").data('moves').split(",")

	$('#move').on('click', function() {

		console.log($("#board").data('moves'))

		if (moves.length !=0) {
			one_move(moves[0]);
			moves.shift();
		}
		
		// var ilen = moves.length
		// for (var i=0; i<ilen; ++i) {
		// 	one_move(moves[i]);
		// }

	});

	$('#showCoordinates').on('click', function() {
		
		$('.coordinate').toggleClass("hideMe");
		// $('#board').css( {"height": "600px", "width": "600px"}, 1000 );

	});

});

function one_move(move){
	//Look at current from and to move, then find the change in squares
	var current_move = move.split("-");

	//remove anything but the last two letters from the moves
	current_move[0] = current_move[0].substr(-2);
	current_move[1] = current_move[1].substr(-2);

	var rank_change = find_change_in_rank(current_move);
	var file_change = find_change_in_file(current_move);
	
	console.log("Rank: "+rank_change)	
	console.log("File: "+file_change)	
	
	//need to determine if its a knight move or a bishop/queen/king
	if ((rank_change != 0) && (file_change != 0) && (move.search("N") === -1))
	{
		move_diagonal(current_move[0], current_move[1], rank_change, file_change)
	}
	else
	{
		move_rank(current_move[0] , rank_change);
		move_file(current_move[0] , current_move[1], file_change );
	}


	//debugging
	highlightSquare(current_move[0]);
	highlightSquare(current_move[1]);
}

//Passing in start and end square, now to determine movement number of squares
function find_change_in_rank(start_end_array){
	//subtract rank numbers gives the up/down value

	return start_end_array[1].charAt(1) - start_end_array[0].charAt(1);
}
function find_change_in_file(start_end_array){
	//convert file from alpha to number and find right/left value

	return (start_end_array[1].charAt(0).charCodeAt()-96) - (start_end_array[0].charAt(0).charCodeAt()-96);

}

//Basic Movement: Up or Down the board
function move_rank(squareName, distanceInSquares){
	//get DOM element to be moved
	var pieceBeingMoved = $("#"+squareName).children();
	//find its current Up-Down position on the board (needed due to
	//position absolute)
	var oldSpot = pieceBeingMoved.position().top;
	//set current Up-Down position so it does not fly to the top of the board (due to 
	//it starting at 0)
	$(pieceBeingMoved).css("top", oldSpot +"px")
	//set what the new spot will be from the old (it is in squares and each square
	//is 75px, so multiply them out)
    var newSpot = oldSpot-(distanceInSquares*75);
    //animate the movement
  	$(pieceBeingMoved).animate( {"top": newSpot +"px"}, 500 );	
}

//Basic Movement: Right or left on the board
function move_file(old_square, new_square, distanceInSquares){

	//get DOM element to be moved
	var pieceBeingMoved = $("#"+old_square).children();
	//find its current Right-Left position on the board (needed due to
	//position absolute)
	var oldSpot = pieceBeingMoved.position().left;
	//set current Rigth-Left position so it does not fly to the top of the board (due to 
	//it starting at 0)
	$(pieceBeingMoved).css("left", oldSpot +"px")
	//set what the new spot will be from the old (it is in squares and each square
	//is 75px, so multiply them out)
    var newSpot = oldSpot+(distanceInSquares*75);
    //animate the movement
  	$(pieceBeingMoved).animate( {"left": newSpot +"px"}, 500, function() {
    	// Animation complete append piece
		append_to_square(old_square, new_square);
  	 });
}

//Basic Movement: Diagonal on the board
function move_diagonal(old_square, new_square, rank_change, file_change){
	//get DOM element to be moved
	var pieceBeingMoved = $("#"+old_square).children();
	//find its current position on the board (needed due to
	//position absolute)
	var oldSpotTop = pieceBeingMoved.position().top;
	var oldSpotLeft = pieceBeingMoved.position().left;
	//set current position so it does not fly to the top of the board (due to 
	//it starting at 0)
	$(pieceBeingMoved).css("top", oldSpotTop +"px")
	$(pieceBeingMoved).css("left", oldSpotLeft +"px")
	//set what the new spot will be from the old (it is in squares and each square
	//is 75px, so multiply them out)
    
    //animate the movement
  	$(pieceBeingMoved).animate({
  		"top": oldSpotTop-(rank_change*75) +"px", 
		"left": oldSpotLeft+(file_change*75) +"px", 
  		}, 500 , function() {
    		// Animation complete append piece
			append_to_square(old_square, new_square);
  	 });
}

//Used to remove the piece from the oringinal square 
//and append a piece from one square to another
function append_to_square(old_square, new_square){
	var pieceBeingMoved = $("#"+old_square).children();
	new_square = $("#"+new_square);

console.log(new_square.children())
	if (new_square.children().length > 0){
		new_square.effect("highlight", {"color" : "red"}, 3000)
		new_square.children().remove();
		console.log("here")
	}

	new_square.append(pieceBeingMoved)
	pieceBeingMoved.css("top", "")
	pieceBeingMoved.css("left", "")
}  

function highlightSquare(boardSquare){ $('#'+boardSquare).effect("highlight", {"color" : "yellow"}, 1000) }

function loadPiecesOnBoard(){
	
	//Load white pieces
	$('#a1').append("<div id='whiteRook1' class='piece white'>&#9820</div>")
	$('#b1').append("<div id='whiteKnight1' class='piece white'>&#9822</div>")
	$('#c1').append("<div id='whiteBishop1' class='piece white'>&#9821</div>")
	$('#d1').append("<div id='whiteQueen' class='piece white'>&#9819</div>")
	$('#e1').append("<div id='whiteKing' class='piece white'>&#9818</div>")
	$('#f1').append("<div id='whiteBishop2' class='piece white'>&#9821</div>")
	$('#g1').append("<div id='whiteKnight2' class='piece white'>&#9822</div>")
	$('#h1').append("<div id='whiteRook2' class='piece white'>&#9820</div>")
	//pawns
	$('#a2').append("<div id='whitePawn1' class='piece white'>&#9823</div>")
	$('#b2').append("<div id='whitePawn2' class='piece white'>&#9823</div>")
	$('#c2').append("<div id='whitePawn3' class='piece white'>&#9823</div>")
	$('#d2').append("<div id='whitePawn4' class='piece white'>&#9823</div>")
	$('#e2').append("<div id='whitePawn5' class='piece white'>&#9823</div>")
	$('#f2').append("<div id='whitePawn6' class='piece white'>&#9823</div>")
	$('#g2').append("<div id='whitePawn7' class='piece white'>&#9823</div>")
	$('#h2').append("<div id='whitePawn8' class='piece white'>&#9823</div>")	


	//Load black pieces
	$('#a8').append("<div id='blackRook1' class='piece black'>&#9820</div>")
	$('#b8').append("<div id='blackKnight1' class='piece black'>&#9822</div>")
	$('#c8').append("<div id='blackBishop1' class='piece black'>&#9821</div>")
	$('#d8').append("<div id='blackQueen' class='piece black'>&#9819</div>")
	$('#e8').append("<div id='blackKing' class='piece black'>&#9818</div>")
	$('#f8').append("<div id='blackBishop2' class='piece black'>&#9821</div>")
	$('#g8').append("<div id='blackKnight2' class='piece black'>&#9822</div>")
	$('#h8').append("<div id='blackRook2' class='piece black'>&#9820</div>")
	//pawns
	$('#a7').append("<div id='blackPawn1' class='piece black'>&#9823</div>")
	$('#b7').append("<div id='blackPawn2' class='piece black'>&#9823</div>")
	$('#c7').append("<div id='blackPawn3' class='piece black'>&#9823</div>")
	$('#d7').append("<div id='blackPawn4' class='piece black'>&#9823</div>")
	$('#e7').append("<div id='blackPawn5' class='piece black'>&#9823</div>")
	$('#f7').append("<div id='blackPawn6' class='piece black'>&#9823</div>")
	$('#g7').append("<div id='blackPawn7' class='piece black'>&#9823</div>")
	$('#h7').append("<div id='blackPawn8' class='piece black'>&#9823</div>")	
}


