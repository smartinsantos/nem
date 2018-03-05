import path from 'path'
import express from 'express'
import usersRouter from './usersRouter'

// routers declarations
const router = express.Router()

// set up our different api endpoints
router.use('/users', usersRouter)

// asset folder
const assetFolder = path.resolve(__dirname, '../', 'assets')
router.use('/assets', express.static(assetFolder))

export default router
