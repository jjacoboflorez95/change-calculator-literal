/*Assignment 5-1: Use an object literal with the Change Calculator*/
"use strict";

$(document).ready(() => {
	$("#calculate").click(() => {
		// get the number of cents from the user
		let cents = Math.floor(parseInt($("#cents").val()));

		// If statatement that validates if the user entry is valid
		if (isNaN(cents) || cents < 0 || cents > 99) {
			alert("Please enter a valid number between 0 and 99");
			throw new TypeError("Please enter a valid number between 0 and 99");
		} else {
			// Called to the makeChange function to calculate the change to return.
			coins.makeChange(cents);

			// display the results of the calculations
			$("#quarters").val(coins.quarters);
			$("#dimes").val(coins.dimes);
			$("#nickels").val(coins.nickels);
			$("#pennies").val(coins.pennies);

			// set focus on cents text box
			$("#cents").focus();
		}
	}); // end click() method

	// set focus on cents text box on initial load
	$("#cents").focus();
}); // end ready() method
