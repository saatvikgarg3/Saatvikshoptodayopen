import mongoose from "mongoose";

export const Connection=async(URL)=>{
    // const URL=`mongodb+srv://${username}:${password}@cluster0.vjcuokv.mongodb.net/?retryWrites=true&w=majority`;
  try{
    await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
    console.log("Database Connected Successfully");
  }
  catch(error){
    console.log(error.message);
  }
}
export default Connection;