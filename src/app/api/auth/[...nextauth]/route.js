import { connectDb } from "@/lib/connectDB"
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";


const handler =  nextAuth({
session:{
    strategy:"jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days

},
providers:[
    CredentialsProvider({
        credentials:{
            email:{},
            password:{}
        },
  async   authorize(credentials){
        const {email,password} =  credentials
        console.log(email,password,'----->');
        if(!email||!password){
           throw new Error("email or password not okay ")
        }
        const db = await connectDb()
        const currentUser = await db.collection('users').findOne({email})
        if(!currentUser){
            throw new Error("User not found in db")
        }
        const passwordMatch=await bcrypt.compareSync(password, currentUser.password); 
        if(!passwordMatch){
            throw new Error("Password not match");
        }
        return currentUser

    }
    })  
],
callbacks:{},
pages:{
    signIn:'/login'
},

})

export {handler as GET , handler as POST}