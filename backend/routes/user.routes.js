const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');

router.post('/register', [
  body('fullName.firstName').isLength({ min: 3 }).withMessage('first name must be at least 3 characters long'),
  body('fullName.lastName').isLength({ min: 3 }).withMessage('last name must be at least 3 characters long'),
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long'),
], userController.registerUser);

module.exports = router;