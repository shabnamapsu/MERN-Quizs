import express from "express";
import User from "../model/schema.js";

export const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body); 
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

// Get All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});
//delete
router.delete('/:id',async(req,res)=>{
    try{
        const deleteUsers= await User.deleteOne({_id:req.params.id});
        if(deleteUsers.deletedCount===0){
       return res.status(404).json({message:'user not found'})
    }
    res.json({message:'user deleted sucessfully',id:req.params.id})
  }
    catch(err){
        res.status(400).json({
            Error:err.message
        })
    }
})
//update
router.put("/User/id",(req,res)=>{
  try{
  const updateuser= User.findByIdAndUpdate(req.params.id,req.body,{new:true});
  if(!updateuser){
   return res.status(400).json({message:"user not find"});
  }
}
catch(err){
  res.status(400).json({Error:err.message})
}
  
})