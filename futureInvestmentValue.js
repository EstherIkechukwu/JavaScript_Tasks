function futureInvestmentValue() {
	var prompt = require('prompt-sync')();
	let investmentAmount = prompt("Enter your investment amount: ");
	let annualInterestRate = prompt("Enter the annual interest rate: ");
	let years = prompt("Enter number of years: ") 

	monthlyInterestRate = (annualInterestRate / 100) / 12
	futureInvestmentValue = investmentAmount * (1 + monthlyInterestRate) * 12
	console.log(futureInvestmentValue)
}
futureInvestmentValue()

