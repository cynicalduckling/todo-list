import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

const User = mongoose.models.users || mongoose.model('users', UserSchema);

export default User