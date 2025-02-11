bankAccount = {
    owner : "Alice",
    balance : 500,
    deposit: function(amount){
        this.balance += amount
    },
    withdraw: function(amount){
        if(this.balance >= amount){
            this.balance -= amount
        }
        else{
            console.log("Insufficent funds! Deposit money and try again you broke ass")
        }
    },
    getBalance: function(){
        return this.balance
    }
};

module.exports = {bankAccount}


