const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
  body('email').isEmail().withMessage('invalid email'),
  body('fullName.firstName').isLength({ min: 3 }).withMessage('first name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long')
], userController.registerUser)

router.post('/login', [
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long')
], userController.loginUser)

module.exports = router;