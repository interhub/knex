import express from 'express'
import connection from '../connect.js'

const connect = connection()
const router = express()

router.post('/', ( req, res ) => {
  let dat = new Date().toLocaleTimeString()

  const {user_id, price} = req.body
  const sql = `
INSERT INTO orders( price, user_id , date) 
VALUES
("${Number(price)}" , "${Number(user_id)}" , "${dat}")
 `;
  connect.query(sql, function ( err, result ) {
    if (err) {
      console.log('err', err)
      return res.send({result: false})
    }
    res.send({result: true})
  });
})


router.get('/:id', ( req, res ) => {
  console.log('REQ ALL USERS')
  const sql = `
SELECT * FROM orders WHERE user_id=${req.params.id}
 `;
  connect.query(sql, function ( err, result ) {
    if (err) {
      console.log('err', err)
      return res.send({result: false})
    }
    console.log(result, 'result')
    res.send({result: true, orders: result})
  });
})

export default router

