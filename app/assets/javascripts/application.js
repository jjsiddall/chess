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
	$('#appendMe').on('click', function() {
		$('#e4').addClass("highlight")
	});

	//Load white pieces
	$('#a1').append("<span class='piece white'>&#9820</span>")
	$('#b1').append("<span class='piece white'>&#9822</span>")
	$('#c1').append("<span class='piece white'>&#9821</span>")
	$('#d1').append("<span class='piece white'>&#9818</span>")
	$('#e1').append("<span class='piece white'>&#9819</span>")
	$('#f1').append("<span class='piece white'>&#9821</span>")
	$('#g1').append("<span class='piece white'>&#9822</span>")
	$('#h1').append("<span class='piece white'>&#9820</span>")
	//pawns
	$('#a2').append("<span class='piece white'>&#9823</span>")
	$('#b2').append("<span class='piece white'>&#9823</span>")
	$('#c2').append("<span class='piece white'>&#9823</span>")
	$('#d2').append("<span class='piece white'>&#9823</span>")
	$('#e2').append("<span class='piece white'>&#9823</span>")
	$('#f2').append("<span class='piece white'>&#9823</span>")
	$('#g2').append("<span class='piece white'>&#9823</span>")
	$('#h2').append("<span class='piece white'>&#9823</span>")

	//Load black pieces
	$('#a8').append("<span class='piece black'>&#9820</span>")
	$('#b8').append("<span class='piece black'>&#9822</span>")
	$('#c8').append("<span class='piece black'>&#9821</span>")
	$('#d8').append("<span class='piece black'>&#9818</span>")
	$('#e8').append("<span class='piece black'>&#9819</span>")
	$('#f8').append("<span class='piece black'>&#9821</span>")
	$('#g8').append("<span class='piece black'>&#9822</span>")
	$('#h8').append("<span class='piece black'>&#9820</span>")
	//pawns
	$('#a7').append("<span class='piece black'>&#9823</span>")
	$('#b7').append("<span class='piece black'>&#9823</span>")
	$('#c7').append("<span class='piece black'>&#9823</span>")
	$('#d7').append("<span class='piece black'>&#9823</span>")
	$('#e7').append("<span class='piece black'>&#9823</span>")
	$('#f7').append("<span class='piece black'>&#9823</span>")
	$('#g7').append("<span class='piece black'>&#9823</span>")
	$('#h7').append("<span class='piece black'>&#9823</span>")

});





