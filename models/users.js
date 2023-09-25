import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    handle: {
        type: String,
        unique: true,
        lowercase: true
    }
});

export default mongoose.model('User', userSchema);