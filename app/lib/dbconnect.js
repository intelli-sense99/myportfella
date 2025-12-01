import mongoose from "mongoose";

export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected")
    } catch (error) {
        console.log("Database connection error", error)
    }
}