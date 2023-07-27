import { connectMongoDb } from "@/lib/mongoDb";
import User from "@/models/users";
import { NextResponse } from "next/server";


export const POST = async (request) => {
    const { name, email } = await request.json();

    await connectMongoDb();

    const userExist = await User.findOne({ email })

    if (userExist) {
        return NextResponse.json({ message: "User Already Exist!" }, { status: 200 })
    }

    await User.create({
        name,
        email
    })

    return NextResponse.json({ message: "User Registered!" }, { status: 201 })
}