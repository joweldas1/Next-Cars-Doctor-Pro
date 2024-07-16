import { connectDb } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async() =>{
    const db =await connectDb()
    const serviceCollection =await db.collection("services")
    try {
        const service =await serviceCollection.find().toArray()
        return NextResponse.json({service})
    } catch (error) {
        return NextResponse.json({error})
    }
}