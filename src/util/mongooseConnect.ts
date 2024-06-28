import mongoose from 'mongoose';

export async function mongooseConnect() {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL as string)
}