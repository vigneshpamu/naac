import express from 'express'
import {
  GetThreeOneOneController,
  GetThreeOneThreeController,
  GetThreeOneTwoController,
  GetThreeThreeOneController,
  GetThreeTwoOneController,
  GetThreeTwoTwoController,
  ThreeOneOneController,
  ThreeOneThreeController,
  ThreeOneTwoController,
  ThreeThreeOneController,
  ThreeTwoOneController,
  ThreeTwoTwoController,
} from '../controllers/criteria3.controller.js'

const router = express.Router()

router.post('/three-one-one', ThreeOneOneController)
router.get('/get/three-one-one', GetThreeOneOneController)
router.post('/three-one-two', ThreeOneTwoController)
router.get('/get/three-one-two', GetThreeOneTwoController)
router.post('/three-one-three', ThreeOneThreeController)
router.get('/get/three-one-three', GetThreeOneThreeController)
router.post('/three-two-one', ThreeTwoOneController)
router.get('/get/three-two-one', GetThreeTwoOneController)
router.post('/three-two-two', ThreeTwoTwoController)
router.get('/get/three-two-two', GetThreeTwoTwoController)
router.post('/three-three-one', ThreeThreeOneController)
router.get('/get/three-three-one', GetThreeThreeOneController)
export default router
