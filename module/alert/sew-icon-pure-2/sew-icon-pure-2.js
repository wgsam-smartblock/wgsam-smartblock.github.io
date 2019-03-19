$(document).ready(function () {
	$('.redo').click(function () {
		$('.success').css("display", "none");
		$('.error').css("display", "block");
		$('.warning').css("display", "none");
	});
	$('.redoError').click(function () {
		$('.success').css("display", "none");
		$('.error').css("display", "none");
		$('.warning').css("display", "block");
	});
	$('.redoWarning').click(function () {
		$('.success').css("display", "block");
		$('.error').css("display", "none");
		$('.warning').css("display", "none");
	});
});