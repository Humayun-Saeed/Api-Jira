var  user =require('../Models/user')

module.exports.create = async({username,email,password,age})=>{

    const add = new user({username,email,password,age})
 return  await  add.save()

}

module.exports.email=async({email})=>{
    return await  user.findOne({email:email})
}