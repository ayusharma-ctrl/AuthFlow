import mongoose from "mongoose";

export const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDb Successfully!')
    } catch (error) {
        console.log('Error: MongoDb Connection, ==>', error)
    }
}