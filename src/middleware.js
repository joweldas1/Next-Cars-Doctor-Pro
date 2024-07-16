import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
let middlewareExecuted = false;

export const middleware =async (request) => {
    if (middlewareExecuted) {return NextResponse.next();}
    const pathName = request.nextUrl.pathName
    if(pathName?.includes('api')){return NextResponse.next()}
   
    middlewareExecuted = true; 

    const token = cookies(request).get("next-auth.session-token");
    console.log(token, 'token in middleware');

    if (!token) {
        const loginUrl = new URL(`/login?redirect=${pathName}`,(request.url));
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
 }




 export const config={
    matcher:["/my-bookings/:path*", "/services/:path*","/checkOut/:path*"]
 }  