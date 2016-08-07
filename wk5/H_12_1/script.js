/*  JavaScript 6th Edition
 Chapter 12
 Hands-on Project 12-1

 Author: Milan Samplewala
 Date:   Aug 6, 2016

 Filename: script.js
 */

function display(event) {
	$(event.currentTarget).next().fadeIn("slow");
}

$("h3").click(display); 