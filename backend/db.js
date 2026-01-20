import mongoose from 'mongoose'

const db = async()=>{
   try{

       const connect = await mongoose.connect(process.env.db)
       console.log("connected to db")  
    }
    catch(e){
        console.log(e)
    }

}

export default db