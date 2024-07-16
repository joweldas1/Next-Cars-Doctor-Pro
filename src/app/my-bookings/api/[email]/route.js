import { connectDb } from "@/lib/connectDB"

export const GET=async(request,{params})=>{
    const email = params.email

    const db =await connectDb();
    const bookingsCollection =await db.collection("bookings")

    try {
        const myBookings = await bookingsCollection.find({email:email}).toArray()
        return Response.json(myBookings)
    } catch (error) {
        console.log(error)
    }
}