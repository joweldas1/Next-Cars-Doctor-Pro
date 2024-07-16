import { connectDb } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const newUser = await req.json();

  try {
    const db = await connectDb();
    const userCollection = await db.collection("users");

    const existingUser = await userCollection.findOne({ email: newUser.email });
    if (existingUser) {
      return new NextResponse(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 14);

    const result = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });
    return new NextResponse(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something happened", error: error.message }),
      { status: 500 }
    );
  }
};
