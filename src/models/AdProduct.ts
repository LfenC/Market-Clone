import { Schema, model, models } from "mongoose";

const adProduct = new Schema({
    files: [Object],
    title: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    location: {type: String, required: true},
    userEmail: {type: String, required: true}
}, { timestamps: true })

export const adProductModel = models?.adProduct || model("adProduct", adProduct)