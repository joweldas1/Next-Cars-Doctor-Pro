import { getServiceDetails } from "@/service/getServices";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metaData = {
    title:'About', 
  }

const page = async ({ params }) => {
  const {data} = await getServiceDetails(params.id);
  const { title, img, price ,_id} = data?.service || "";

  return (
    <div>
      
      <div className="border-prime border-2">
        <Image alt="details" src={img} height={100} width={200} />
        <h1 className=" text-2xl font-semibold">{title}</h1>
        <h1 className=" text-2xl font-semibold">{price}</h1>
        <div>
            <Link href={`/checkOut/${_id}`}><button className="btn btn-primary bg-primary text-white font-semibold p-3">CheckOut</button>
            </Link>
        </div>
      </div>
     
    </div>
  );
};

export default page
