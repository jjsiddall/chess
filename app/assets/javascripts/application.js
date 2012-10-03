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
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
	loadPiecesOnBoard()


	$('#appendMe').on('click', function() {

		// moveUpDown("blackKnight1", 2)
		// moveRightLeft("blackKnight1", 1)
		moveDiagonal("blackBishop1", -3, -1)
	});

});

//Basic Movement: Up or Down the board
function moveUpDown(pieceName, distanceInSquares){
	
	//get DOM element to be moved
	var pieceBeingMoved = $("#"+pieceName);
	//find its current Up-Down position on the board (needed due to
	//position absolute)
	var oldSpot = pieceBeingMoved.position().top;
	//set current Up-Down position so it does not fly to the top of the board (due to 
	//it starting at 0)
	$(pieceBeingMoved).css("top", oldSpot +"px")
	//set what the new spot will be from the old (it is in squares and each square
	//is 75px, so multiply them out)
    var newSpot = oldSpot+(distanceInSquares*75);
    //animate the movement
  	$(pieceBeingMoved).animate( {"top": newSpot +"px"}, 1000 );	
}

//Basic Movement: Right or left on the board
function moveRightLeft(pieceName, distanceInSquares){
	
	//get DOM element to be moved
	var pieceBeingMoved = $("#"+pieceName);
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
  	$(pieceBeingMoved).animate( {"left": newSpot +"px"}, 1000 );	
}

//Basic Movement: Diagonal on the board
function moveDiagonal(pieceName, distanceInSquares, inverse){
	//get DOM element to be moved
	var pieceBeingMoved = $("#"+pieceName);
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
  		"top": oldSpotTop+(distanceInSquares*75) +"px", 
		"left": oldSpotLeft+(distanceInSquares*75*inverse) +"px", 
  	}, 1000 );	
}

function highlightSquare(boardSquare){ $('#'+boardSquare).addClass("highlight") }

function loadPiecesOnBoard(){
	
	//Load white pieces
	$('#a1').append("<div id='whiteRook1' class='piece white'>&#9820</div>")
	$('#b1').append("<div id='whiteKnight1' class='piece white'>&#9822</div>")
	$('#c1').append("<div id='whiteBishop1' class='piece white'>&#9821</div>")
	$('#d1').append("<div id='whiteQueen' class='piece white'>&#9818</div>")
	$('#e1').append("<div id='whiteKing' class='piece white'>&#9819</div>")
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
	$('#d8').append("<div id='blackQueen' class='piece black'>&#9818</div>")
	$('#e8').append("<div id='blackKing' class='piece black'>&#9819</div>")
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


