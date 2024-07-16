import { connectDb } from "@/lib/connectDB"

export const GET=async(request,{params})=>{
    const db =await connectDb()
    const serviceCollection = await db.collection('services')

    try {
        const service = await serviceCollection.findOne({_id:params.id})
        return Response.json({service})

    } catch (error) {
        console.log(error);
    }
}