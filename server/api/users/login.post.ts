import { User } from "~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        await mongoose.connect('mongodb://localhost:27017/users');
        const user = await User.findOne({email:body.email});
        if (user) {
            if (user.password == body.password) {
                return user;
            }
        }
    } catch (e) {
        console.log(e)
    }
    return null
});