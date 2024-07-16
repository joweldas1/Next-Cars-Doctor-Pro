import { connectDb } from "@/lib/connectDB"
import { services } from "@/lib/services";

export const GET=async()=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')
    
    try {
        await serviceCollection.deleteMany();
        const res = await serviceCollection.insertMany(services)
        return Response.json({message:"data inserted successfully"})
        
    } catch (error) {
        console.log(error,'services get route');
    }
}