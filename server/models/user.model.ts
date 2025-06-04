import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    tel: String,
})

export const User = model("user", userSchema);