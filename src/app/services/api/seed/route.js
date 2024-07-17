import { connectDb } from "@/lib/connectDB"
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET=async()=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')
    
    try {
        await serviceCollection.deleteMany();
        const res = await serviceCollection.insertMany(services)
        return NextResponse.json({message:"data inserted successfully"})
        
    } catch (error) {
        return NextResponse.json({error})

    }
}