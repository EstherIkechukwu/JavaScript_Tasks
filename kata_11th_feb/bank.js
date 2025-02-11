bankAccount = {
    owner : "Alice",
    balance : 500,
    deposit: function(amount){
        balance += amount
    },
    withdraw: function(amount){
        if(balance <= amount){
            balance -= amount
        }
    }
};


