import { connectDb } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
    const booking =await request.json()
    const db = await connectDb()
    const bookingCollection = await db.collection('bookings')

try {
    const newBooking = await bookingCollection.insertOne(booking)
    console.log(booking,'new booking0------------>');
    return NextResponse.json({message:"service booked successfully"})
} catch (error) {
    console.log(error);
    return NextResponse.json({message:"something went wrong"},{status:400 })
}
}