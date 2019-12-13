var mysqel = require("mysql");
var inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Lalakers1984!!",
    database: "BAMAZON"
})

connection.connect(err => {
    if (err) throw err;
    console.log(`You have been connected to thread ID: ${connection.threadID}`);
});

var makeTable = function () {
    connection.query("SELECT * FROM PRODUCTS", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].ITEM_ID + " || " + res[i].PRODUCT_NAME + " || " +
                res[i].DEPARTMENT_NAME + " || " + res[i].PRICE + " || " + res[i].STOCK_QUANTITY + "\n ");
        }
        promptCustomer(res);
    })
}

var promptCustomer = function (res) {
    inquirer.prompt([{
        type: 'input',
        name: 'choice',
        message: 'What would like you to purchase? [Quit with Q]'
    }]).then(function (answer) {

    })
}