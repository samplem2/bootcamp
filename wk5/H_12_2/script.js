/*  JavaScript 6th Edition
 Chapter 12
 Hands-on Project 12-2

 Author: Milan Samplewala
 Date:   Aug 6, 2016

 Filename: script.js
 */
console.log("start");
function convert() {
	var lb = $("#pValue").val();
	var kg = Math.round(lb / 2.2);

	$("#kValue").html(kg);
}

$("#convertButton").click(convert);

$("#pValue").val("");
$("#kValue").html("");