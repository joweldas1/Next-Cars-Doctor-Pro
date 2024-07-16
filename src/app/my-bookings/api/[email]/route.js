import { connectDb } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET=async(request,{params})=>{
    const email = params.email

    const db =await connectDb();
    const bookingsCollection =await db.collection("bookings")

    try {
        const myBookings = await bookingsCollection.find({email:email}).toArray()
        return NextResponse.json(myBookings)
    } catch (error) {
        return NextResponse.json({error})
    }
}