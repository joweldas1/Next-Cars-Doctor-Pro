import { connectDb } from "@/lib/connectDB"

export const GET = async() =>{
    const db =await connectDb()
    const serviceCollection =await db.collection("services")
    try {
        const service =await serviceCollection.find().toArray()
        return Response.json({service})
    } catch (error) {
        console.log(error,'error from service get page');
    }
}