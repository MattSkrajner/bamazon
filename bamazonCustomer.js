// require mySql and inquirer npm packages
var mySql = require("mysql");
var inquirer = require("inquirer");

// setup the SQL database connection
var connection = mySql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    createTable();
})

// this function displays information from the table I created in my SQL database
var createTable = function () {
    console.log("Here are the products we have available:");
    console.log("****************************************");
    // selects from all entries in the products table
    connection.query("SELECT * FROM products", function(err, res){
        //loops through all of the table items and displays them to the console
        for(var i=0; i<res.length; i++){
            console.log(res[i].itemID + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + "\n");
        }
        // calls the prompt function
        prompt(res);
    });
};

var prompt = function(res){
    
    // Uses the inquirer package to ask the user what product they want to buy
    inquirer.prompt([{
        type: "input",
        name: "choice",
        message: "Please enter the product that you would like to purchase."
    }]).then(function(answer) {
        var correct = false;
        
        // loops through all of the products
        for (var i=0; i<res.length; i++) {
            // checks if user input matches a product name
            if(res[i].product_name==answer.choice) {
                correct=true;
                var product=answer.choice;
                var id=i;
                // asks user how many of the selected product they want to buy
                inquirer.prompt({
                    type: "input",
                    name: "amount",
                    message: "How many do you want to buy?",
                    // checks to make sure that the user input is a number
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;    
                        } else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    // if, after subtracting the number the user inputted, the stock_quantity value is greater than zero then the function will update the table row. 
                    if((res[id].stock_quantity-answer.amount)>0){
                        connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.amount)+"'WHERE product_name='"+product+"'", function(err, res2){
                            console.log("Purchase made.");
                            // displays the updated product table
                            createTable();
                        })
                    } else {
                        // if the user tries to buy more of a product than is in stock, the following message is displayed
                        console.log("Sorry, we do not have enough of that item left in stock.");
                        prompt(res);
                    }
                })
            }
        }
    })
}