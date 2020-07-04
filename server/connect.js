import mysql from 'mysql'

export default () => {
  const connection =
    mysql.createConnection({
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
  return connection
}
