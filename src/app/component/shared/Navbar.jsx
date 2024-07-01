"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession()
  const user = session?.data?.user
  console.log(user,'------->');
    const navItem = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Blog",
            path:"/blog"
        },
        {
            title:"Services",
            path:"/"
        },
        {
            title:"Contact",
            path:"/contact"
        },
    ]

  return (
    <div className="bg-base-100 text-primary ">
        <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <Link href={"/"}>
          {" "}
          <Image src="/logo.svg" alt="helo" width={60} height={20} />{" "}
        </Link>
      </div>
      <div className="navbar-center  flex  items-center space-x-4">
   {
    navItem.map((d,idx)=>(
        <Link key={idx}
        className="hover:text-green-500 duration-500 font-semibold"
        href={d.path}> {d.title} </Link>
    ))
   }
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary ">Button</a>
        <Link href={'/login'}>        <button className="btn ml-3 bg-transparent border-primary border-2 text-primary">Login</button>
        </Link>
      </div>
    
    </div>
    </div>
  );
};

export default Navbar;
