import mongoose, { models } from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const User = models.User || mongoose.model('User', schema)
export default User;