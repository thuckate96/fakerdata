var express = require("express");
var app = express();
var faker = require("faker");
var mysql = require("mysql");
var port = process.env.PORT|8080;

//connect to mysql database

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'baitap1',
  port     : "3306"
});

connection.connect(function(err){
  if(err) console.log("Database is not connected");
  console.log("Database is connecting");
});

//------------------------------------orderdetails---------------------------------------
// for(i=0; i < 2000; i++){
//   var orderNumber = Math.floor((Math.random()* 1700)+1);
//   var productCode = Math.floor((Math.random()* 2400)+1);
//   var quantityOrdered = Math.floor((Math.random()* 300)+1);
//   var priceEach = faker.commerce.price();
//
//   var orderdetailInf = {orderNumber: orderNumber, productCode: productCode, quantityOrdered: quantityOrdered, priceEach: priceEach}
//   connection.query('INSERT INTO orderdetails SET ?', orderdetailInf, (err, res)=>{
//         if(err) throw err;
//   });
// }
//------------------------------------products--------------------------------------------

for(i = 0; i < 27600; i++){
  var productName = faker.commerce.productName();
  var quantityInStock = Math.floor((Math.random()* 500)+1);
  var buyPrice = faker.commerce.price();
  var productInf = {productName: productName, quantityInstock: quantityInStock, buyPrice: buyPrice};
  connection.query('INSERT INTO products SET ?', productInf, (err, res)=>{
      if(err) throw err;
  });
}
// console.log(productName);
// console.log(quantityInStock);
// console.log(buyPrice);
//-------------------------------------orders------------------------------------------------
// for(i = 0; i < 23000; i++){
//   var customer_id = Math.floor((Math.random()*20000)+1)
//   var orderInf = {customer_id: customer_id};
//   connection.query('INSERT INTO orders SET ?', orderInf, (err, res)=>{
//       if(err) throw err;
//   });
// }
//-------------------------------------customers---------------------------- -----------------
// for(i=0; i < 18499; i++){
//   var customerName = faker.name.lastName();
//   var phone = faker.phone.phoneNumber();
//   var emailCus = faker.internet.email();
//   var employee_id = Math.floor((Math.random()* 16000)+1);
//   var customerInf = {customerName: customerName, phone: phone, email: emailCus, employee_id: employee_id};
//   connection.query('INSERT INTO customers SET ?', customerInf, (err, res)=>{
//       if(err) throw err;
//   });
// }
// console.log(customerName);
// console.log(emailCus);
// console.log(phone);
// console.log(employee_id);
//-------------------------------------employees-------------------------------------------
// for(i = 0; i < 14549; i++){
//   var employeeName = faker.name.findName();
//   var jobTitle = faker.name.jobTitle();
//   var emailEm = faker.internet.email();
//   var officeCode = Math.floor((Math.random() * 11265) + 1);
//
//   employeeInf = {employeeName: employeeName, jobtitle: jobTitle, email: emailEm, officeCode: officeCode};
//   connection.query('INSERT INTO employees SET ?', employeeInf, (err, res)=>{
//       if(err) throw err;
//   });
// }
// console.log(employeeName);
// console.log(jobTitle);
// console.log(emailEm);
// console.log(officeCode);
//-------------------------------------offices table ----------------------
// for(i = 0; i < 10000; i++){
//   var phone = faker.phone.phoneNumber();
//   var city = faker.address.city();
//   var address = faker.address.streetAddress();
//   var officeIns={city: city, phone: phone, address: address};
//
//   connection.query('INSERT INTO offices SET ?', officeIns, (err, res)=>{
//     if(err) throw err;
//   });
// }
// console.log(city);
// console.log(phone);
// console.log(address);

app.listen( port);
console.log("Server listening on port "+port);
