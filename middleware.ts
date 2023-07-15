import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import jwt_decode from "jwt-decode";
// import { CookieValueTypes, getCookie } from 'cookies-next';


export function middleware(request: NextRequest) {
const path=request.nextUrl.pathname


const isPublicPath= path ==='/login'

const token=request.cookies.get('token')?.value || ''

if(isPublicPath && token){
  return NextResponse.redirect(new URL('/',request.nextUrl))

}
if(!isPublicPath && !token){
  return NextResponse.redirect(new URL('/login',request.nextUrl))
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/dinner',
    '/customer/:path*',
    '/allCustomer',
  ],
}

