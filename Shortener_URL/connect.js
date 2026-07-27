import mongoose from "mongoose";

async function ConnectDB(url) {
    return mongoose.connect(url)
}


export default ConnectDB