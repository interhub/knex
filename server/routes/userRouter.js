import express from 'express'
import connection from '../connect.js'

const connect = connection()
const router = express()

router.post('/', ( req, res ) => {
  const {name, city} = req.body
  const sql = `
INSERT INTO users( name, city) 
VALUES
("${name}","${city}")
 `;
  connect.query(sql, function ( err, result ) {
    if (err) {
      console.log('err', err)
      return res.send({result: false})
    }
    res.send({result: true})
  });
})

router.get('/', ( req, res ) => {
  console.log('REQ ALL USERS')
  const sql = `
SELECT name, id, city FROM users
 `;
  connect.query(sql, function ( err, result ) {
    if (err) {
      console.log('err', err)
      return res.send({result: false})
    }
    console.log(result, 'result')
    res.send({result: true, users: result})
  });
})

export default router
