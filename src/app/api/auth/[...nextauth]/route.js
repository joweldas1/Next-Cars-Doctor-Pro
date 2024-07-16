import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import { connectDb } from "@/lib/connectDB";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";


const handler =  nextAuth({
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
session:{
    strategy:"jwt",
    maxAge: 30*24*60*60,
    rolling:false // 30 days

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
    }) ,
    GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
      }),
    
    GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
    })
],
callbacks:{
    async signIn({ user, account, profile, email, credentials }) {
        if(account.provider==="google"){
            const {name,email,image} = user
            try {
                const db = await connectDb()
                const userCollection =await db.collection('users')
                const existUser = await userCollection.findOne({email})
                if(!existUser){
                    const res = await userCollection.insertOne(user)
                    return NextResponse.json({user})
                }else{
                    return NextResponse.json({user})
                }

            } catch (error) {
                console.log(error,'next aut error from callback  ');
                NextResponse.json({error})
            }
            
        }else{
            return user
        }
       
      },
},
pages:{
    signIn:'/login'
},

})

export {handler as GET , handler as POST}