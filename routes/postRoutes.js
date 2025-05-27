const express=require('express');
const { auth } = require('../utils/auth');
const { doPost } = require('../controllers/postControllers');

const router=express.Router();

router.post('/doPost',auth,doPost);

module.exports=router;