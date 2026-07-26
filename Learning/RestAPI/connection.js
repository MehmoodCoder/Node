import mongoose from "mongoose";

// connect with DB

async function connectDB(url) {
    return mongoose.connect(`${url}`)
}

export default connectDB

