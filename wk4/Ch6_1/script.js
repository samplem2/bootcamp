/*    Hands-on Project 6-1
 STEP 2

 *    Author: Milan Samplewala
 *    Date:   Aug 5, 2016

 *    Filename: script.js
 */
"use strict";

var formValidity = true;

/* validate required fields */
/* STEP 6 a */
function validateRequired() {
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;
	try {
		for (var i = 0; i < elementCount; i++) {
			// validate all input elements in fieldset
			currentElement = inputElements[i];
			if (currentElement.value === "") {
				currentElement.style.background = "rgb(255,233,233)";
				requiredValidity = false;
			} else {
				currentElement.style.background = "white";
			}
		}
		if (requiredValidity === false) {
			throw "Please complete all fields.";
		}
		errorDiv.style.display = "none";
		errorDiv.innerHTML = "";
	} catch(msg) {
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

/* create event listeners  */
/* STEP 7 */
function createEventListeners() {
	var form = document.getElementsByTagName("form")[0];
	if (form.addEventListener) {
		form.addEventListener("submit", validateForm, false);
	} else if (form.attachEvent) {
		form.attachEvent("onsubmit", validateForm);
	}
}

/* validate form */
/* STEP 8 */
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
		// prevent form from submitting
	} else {
		evt.returnValue = false;
		// prevent form from submitting in IE8
	}
	formValidity = true;
	// reset value for revalidation
	validateRequired();

	if (formValidity === true) {
		document.getElementsByTagName("form")[0].submit();
	}
}

/* STEP 8 */
if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
