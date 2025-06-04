import { User } from "~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        await mongoose.connect(`mongodb://localhost:27017/users`);

        const user = new User({
            email: body.email,
            password: body.password,
            name: body.name,
            tel: body.tel
        });
        await user.save();
            return user;
    } catch (e) {
        console.log(e)
    }
    return null;
})