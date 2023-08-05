// JavaScript Document

function mostra(){
	$(".popup, .news").fadeIn(1000)
}

function oculta(){
	$(".popup, .news").fadeOut(1000)
}

$(function(){
	setTimeout("mostra()", 2000)
	setTimeout("oculta()", 30000)
	$(".fechar, .popup").click(function(){
		$(".popup, .news").fadeOut(500)
	})
})

