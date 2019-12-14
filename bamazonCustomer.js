var mysql = require("mysql");
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
    // console.log('success');

    console.log(`You have been connected to threadID: ${connection.threadID}`);
    makeTable();
    // connection.end();
});

var makeTable = function () {
    connection.query("SELECT * FROM PRODUCTS", function (err, res) {
        console.table(res);
        if (err) throw err;
        // for (var i = 0; i < res.length; i++) {
        //     console.table(res[i].ITEM_ID + " || " + res[i].PRODUCT_NAME + " || " +
        //         res[i].DEPARTMENT_NAME + " || " + res[i].PRICE + " || " + res[i].STOCK_QUANTITY + "\n ");
        // }
        userPrompt();
    })
}

userPrompt = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the ID of the item you would like to buy?',
        name: 'itemID'
    }]).then(answers => {
        answers.itemID;
        console.log(answers.itemID);
        connection.query("SELECT * FROM PRODUCTS WHERE ITEM_ID = ?", [answers.itemID], function (err, res) {
            // console.log(res);
            if (err) throw (err);
            var itemInventory = res[0].STOCK_QUANTITY;
            stockPrompt(itemInventory, answers.itemID);
        })
    })
}

stockPrompt = (itemInventory, ITEM_ID) => {
    inquirer.prompt([{
        type: 'input',
        message: 'How many units would you like to buy?',
        name: 'unitstobuy'
    }]).then(answers => {
        answers.unitstobuy
        // console.log(answers.stockID);
        if (answers.unitstobuy > itemInventory)
            console.log("Sorry Insufficient quantity!")
        else {
            var quantityLeft = itemInventory - answers.unitstobuy;
            connection.query("UPDATE PRODUCTS SET STOCK_QUANTITY = ? WHERE ITEM_ID = ?", [quantityLeft, ITEM_ID], function (err, res) {
                if (err) {
                    console.log("Error updating the stock: " + err)
                } else {
                    console.log('order placed!');
                }
                makeTable();
            })
        }
    })
}