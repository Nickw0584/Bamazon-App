// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express");

const app = express();
const PORT = 3000;

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });
// The app should then prompt users with two messages
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// shows the items so the can have the numbers available
  connection.query('SELECT * FROM products', function(err,res){ 
    if (err) throw err;
    console.log("hey");
  })
  
 // The app should then prompt users with two messages
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
//TODO: USE INQUIRER TO PROMPT USER WITH TWO MESSAGES ^^

inquirer
  .prompt([
    {   
        type: "input",
        name:"itemId",
        message: "What is the id number of the product you would like to buy?",
        validate: function(value){
            if (value.length) {
                return true;
            }
            else "Please put in a correct id number.";
        }
    },

{         type: "input",
          name:"stockQuanity",
          message: "How many units of the product you would like to buy?",
          validate: function(value){
              if (value.length) {
                  return true;
              }
              else "We don't have that many in stock.";
            console.log(back)
            }
}
   
// // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// //TODO: IN THE PROMISE OF INQUIRER PROMPT, EXECUTE A SQL QUERY TO COMPARE DATA FROM PRMPT TO SQL QUERY
//     //IF THE CUSTOMER'S DESIRED QUANTITY IS GREATER THAN THE AMOUNT IN DB:
//         //return phrase like Insufficient quantity!, and then prevent the order from going through.
//     //OTHERWISE:
//         //UPDATE DB BASED ON THE CUSTOMER'S ORDER
//         //SHOW THE COST OF THE PERCHASE

]).then(function(answers){
  
    let Item= answers.itemId;
    let Amount = answers.orderTotal;

connection.query("SELECT * FROM products",{
  itemId: answers.itemId
}, function(err,res){
  // did not know know about the >= got from 3w schools
  if (inventory >= res[0].stock_quanity){
    console.log("We have an insufficient quantity!");
  }
  else{
    console.log("We can process your order.");

    let newInventory = (res[0].stock_quanity - inventory);
    let userCost     = (res[0].price*Amount);

  connection.query("update products"),[{
    stock_quanity:newInventory
  },{
    Item:itemId
  }],function(err,res){
    console.log("Your total purchase cost" + userCost);
  };

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
}})})