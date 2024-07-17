import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
let middlewareExecuted = false;

export const middleware =async (request) => {
    if (middlewareExecuted) {return NextResponse.next();}
   
    middlewareExecuted = true; 

    const token = cookies(request).get("__Secure-next-auth.session-token");

    if (!token) {
        const loginUrl = new URL(`/login?redirect=${pathName}`,(request.url));
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
 }




 export const config={
    matcher:["/my-bookings/:path*", "/services/:path*","/checkOut/:path*"]
 }  