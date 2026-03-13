import mongoose from "mongoose"

const connect_DB= async (db_url)=>{
    try {
        const db= await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
  
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error in database connection", error)
    }
}

export default connect_DB