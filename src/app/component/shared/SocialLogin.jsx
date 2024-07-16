"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FaGit, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleLogin = async (provider) => {
    const res = await signIn(provider);
  };
  

  useEffect(() => {
    if (status === "authenticated") {
      return router.push("/");
    }
  }, [router, status]);



  return (
    <div>
      <div className="space-x-5 my-2 ">
        <button onClick={() => handleLogin("google")}>
          {" "}
          <FaGoogle />{" "}
        </button>
        <button>
          {" "}
          <FaGithub />{" "}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
