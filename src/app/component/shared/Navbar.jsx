"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  const user = session?.data?.user;
  console.log(session, "------->");
  const navItem = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Bookings",
      path: "/my-bookings",
    },
    {
      title: "Services",
      path: "/",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

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
          {navItem.map((d, idx) => (
            <Link
              key={idx}
              className="hover:text-green-500 duration-500 font-semibold"
              href={d.path}
            >
              {" "}
              {d.title}{" "}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          {user && (
           <>
            <Image src={user?.image} alt="logged user" width={50} height={50} className="rounded-full" />
            <button onClick={() => signOut()} className="btn btn-primary mr-4">
              Logout
            </button>
           </>
          )}
          {!user && (
            <Link href={"/login"}>
              {" "}
              <button className="btn ml-3 bg-transparent border-primary border-2 text-primary">
                Login
              </button>
            </Link>
          )}
          {user && (
            <>
              <div className="font-semibold text-right text-sm ">
                <p>{user?.name}</p>
                <p>{user?.email}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
