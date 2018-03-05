import express from 'express'

var router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ error: false, data: 'mock user :D' })
})

export default router
