import mongoose, { Schema, model } from 'mongoose';

const MessageSchema = new Schema(
    {
        name: { type: String, required: true, min: 3 },
        email: { type: String, required: true, min: 3 },
        message: { type: String, required: true, min: 10 }
    },
    { timestamps: true }
);

const Message = mongoose.models.user || model('Message', MessageSchema);

export default Message;
