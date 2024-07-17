import { connectDb } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDb();
  const bookingCollection = await db.collection("bookings");
  try {
    const res = await bookingCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(res);
  } catch (error) {
    return Response.json({ message: "Deleted successfully" });
  }
};


export const GET = async(request,{params})=>{
    const db = await connectDb();
    const bookingCollection = await db.collection("bookings")
    try {
        const res = await bookingCollection.findOne({_id:new ObjectId(params.id)})
        return Response.json({message:"data found" , res})
    } catch (error) {
        return Response.error(error)
    }
}


export const PATCH = async(request,{params})=>{
    // const {name,address,due} = await request.json() 
    // eivabe distructer na kore spreding kora best
    const updated = await request.json()
    const db = await connectDb()
    const bookingCollection = await db.collection("bookings")

    try {
        const res =await bookingCollection.updateOne(
            {_id:new ObjectId(params.id)},
            {$set:{...updated}},
            {upsert:true}
        )
        return NextResponse.json({message:"Data updated",response:res})


    } catch (error) {
        return NextResponse.json(error)
    }
}
