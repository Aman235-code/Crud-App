import mongoose from "mongoose"

export default async () => {
    try{
        const DB_OPTIONS = {
            dbName: process.env.DBNAME,
            user: process.env.DBUSERNAME,
            pass: process.env.DBPASSWORD,
            authsource: process.env.DBAUTHSOURCE
        }

        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS, {family: 4})
        console.log("connected")
        
    }
    catch(error){
        console.log(error);
    }
}