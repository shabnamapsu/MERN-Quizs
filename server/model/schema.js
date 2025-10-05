import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    useremail:{type:String,require:true}
})
  const Users=mongoose.model('user',userSchema);
  export default Users;