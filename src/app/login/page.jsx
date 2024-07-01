"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {signIn} from "next-auth/react"

const Login = () => {
  const handleLogin=async(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    const res = await signIn('credentials',{
      email,
      password,
      redirect:false
    })

    console.log(res);
  }
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-12">
          <Image
            src={"/images/login/login.svg"}
            alt="login image"
            width={400}
            height={400}
          />

          <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleLogin}>
                <h1 className=" text-center font-semibold text-4xl text-primary">
                  Login
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary " type="submit">Login</button>
                </div>
              </form>
              <div className="text-center">
                <h1>Or Sing in with</h1>
                <div className="w-full mx-auto flex justify-center items-center gap-3 text-3xl mt-2">
                  <FaGoogle />
                  <FaFacebook />
                  <FaGithub />
                </div>
                <h1>Or Create Account <span className="text-primary font-semibold"> <Link href={'/signup'}> Sing Up</Link> </span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
