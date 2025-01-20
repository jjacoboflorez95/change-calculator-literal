/*Assignment 5-1: Use an object literal with the Change Calculator*/
"use strict";

// Object literal named coins
const coins = {
	// Properties
	quarters: Number,
	dimes: Number,
	nickels: Number,
	pennies: Number,

	/**
	 * Method that calculates the change to return base on the cents parameter.
	 * @param {*} cents Cents sent by the user.
	 */
	makeChange(cents) {
		// calculate the number of quarters
		this.quarters = cents / 25; // get number of quarters
		this.quarters = Math.floor(this.quarters);
		cents = cents % 25; // assign the remainder to the cents variable

		// calculate the number of dimes
		this.dimes = cents / 10; // get number of dimes
		this.dimes = Math.floor(this.dimes);
		cents = cents % 10; // assign the remainder to the cents variable

		// calculate the number of nickels
		this.nickels = cents / 5;
		this.nickels = Math.floor(this.nickels);

		// calculate the number of nickels and pennies
		this.pennies = cents % 5;
	},
};
