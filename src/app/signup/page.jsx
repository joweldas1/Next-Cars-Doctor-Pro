"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const SignUp = () => {
  const router = useRouter()
  const handleLogin=async(e)=>{
        e.preventDefault()
        const newUser = {
            name : e.target.name.value,
            image:e.target.image.value,
            email : e.target.email.value,
            password : e.target.password.value,
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/signup/api`,{
          method:"POST",
          body:JSON.stringify(newUser),
          headers:{
            "content-type":"application/json"
          }
        })

        if(res.status===201||200){
              e.target.reset()
              router.push('/login')
        }
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
                  SignUp
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Image url"
                    className="input input-bordered"
                    name="image"
                    required
                  />
                </div>
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
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary " type="submit">SignUp</button>
                </div>
              </form>
              <div className="text-center">
                <h1>Or Sing in with</h1>
                <div className="w-full mx-auto flex justify-center items-center gap-3 text-3xl mt-2">
                  <FaGoogle />
                  <FaFacebook />
                  <FaGithub />
                </div>
                <h1>Already have an account?<span className="text-primary font-semibold"> <Link href={'/login'}> Login</Link> </span></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
