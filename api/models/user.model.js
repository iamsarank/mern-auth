import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default:
            'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg',
    },
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema)

export default User;