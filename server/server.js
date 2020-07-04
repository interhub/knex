import express from 'express'
import cors from "cors"
// import './sql.js'
import userRouter from './routes/userRouter.js'
import orderRouter from './routes/orderRouter.js'

const router = express();
router.use(express.json())
router.use(express.urlencoded({extended: true}))
router.use(cors())
router.post('*', ( req, res, next ) => {
  console.log(req.body, 'THIS BODY ny URL=', req.url)
  next()
})
//test
router.get('/', ( req, res ) => {
  res.sendFile(process.cwd() + '/client/index.html')
})


router.use('/user', userRouter)
router.use('/order', orderRouter)

router.get('*', ( req, res, next ) => {
  if (req.url.includes('client')) {
    res.sendFile(process.cwd() + req.url)
  }
})

let port = process.env.PORT || 2000
router.listen(port, () => {
  console.log('server start on port = ', port)
})

