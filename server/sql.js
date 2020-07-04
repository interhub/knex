import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db1'
})

const tables = {
  users: 'users',
  orders: 'orders'
}

connection.connect();
// //GET ALL
// connection.query('SELECT * FROM users', function ( error, result, fields ) {
//   if (error) throw error;
//   console.log('The DATA is: ', result);
// });

//
// // ADD USERS TABLE
// const sql = `create table if not exists users(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name TEXT,
//     city TEXT
// )`;


// //CREATE TABLE ORDERS
const sql = `create table if not exists orders(
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    price TEXT,
    date TEXT
)`;

// //ADD ALL USER INTO TABLE
// const sql = `INSERT INTO users( name, order_id, city) VALUES
// ("Doni","105","Moscow"),
// ("Sara","102","Kaliningrad"),
// ("Jon","102","st Peterburg"),
// ("Frank","101","Rostov"),
// ("Gery","104","Moscow"),
// ("Lara","103","Kaliningrad"),
// ("Sergey","105","st Peterburg"),
// ("Alice","101","Rostov")`;

//  //ADD ALL ORDERS IN TABLE
// let dat = new Date().toLocaleTimeString()
// const sql = `INSERT INTO orders( id, price, date) VALUES
// ("101","10020" , "${dat}"),
// ("102","1123", "${dat}"),
// ("103","232", "${dat}"),
// ("104","23", "${dat}"),
// ("105","560", "${dat}")
// `;

//GET PARAM
// let sql = `
// SELECT orders.price, orders.date, orders.id
// FROM orders JOIN users
// ON orders.id=users.order_id
// WHERE (users.name="а")`

connection.query(sql, function ( err, result ) {
  if (err) console.log(err);
  else console.log("Результат =", result);
});
connection.end();
