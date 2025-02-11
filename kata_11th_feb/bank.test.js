
const {bankAccount} = require("./bank.js")

test('account gets balance', () =>{
    expect(bankAccount.getBalance()).toBe(500)
})

test('deposit 200, balance increases', () =>{
    expect(bankAccount.getBalance()).toBe(500)
    initialDeposit = bankAccount.deposit(200)
    expect(bankAccount.getBalance()).toBe(700)
})

test('balance is low, withdraw 1000, balance remains same', () =>{
    expect(bankAccount.getBalance()).toBe(700)
    withdraw = bankAccount.withdraw(1000)
    expect(bankAccount.getBalance()).toBe(700)
})

