import mysql from 'mysql'
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'myPassword'
})

export default db
