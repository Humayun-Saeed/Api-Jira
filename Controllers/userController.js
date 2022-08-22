var user = require('../Services/userServices')

module.exports.create=async(req,res)=>{
    const data =  await user.create(req.body)
    res.json(data)
}

module.exports.email = async(req,res)=>{
    const data=await user.email(req.body)
    res.json(data)
}
