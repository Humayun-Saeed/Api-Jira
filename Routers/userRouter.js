var user=require('../Controllers/userController')

var express=require('express')
var router=express.Router()


router.post('/a',user.create)
router.post('/e',user.email)

module.exports=router