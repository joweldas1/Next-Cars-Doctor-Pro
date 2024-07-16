"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
 import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const MyBookings = () => {
    const session = useSession()
    const email = session?.data?.user?.email
    const [myService,setMyService] = useState()
    console.log(email,'session');

    const loadData = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-bookings/api/${email}`)
        const data = await res.json()
        setMyService(data)
    }

    const handleDelete=async(id)=>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-bookings/booking/${id}`,{method:"DELETE"})
      if(res.status===200){
        toast.success("Deleted Done")
        loadData()
      }
      console.log(res,'deleted-=----------------->');
    }

    useEffect(()=>{
        loadData()
    },[])

    console.log(myService,'---------------->data');

    return (
        <div>
        <Toaster/>
          <div className="grid grid-cols-3 ">
          {
                myService?.map((d,idx)=>(<>
                 <div className="w-full border-2 border-primary  mx-auto mt-24">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <Image src={d.img}alt={d.title} width={500} height={500} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{d.title}</h2>
          <div className="card-actions justify-between items-center">
          <p className="text-primary font-semibold">Price:{d.price}$</p>
   <div>

    <Link href={`/my-bookings/update/${d._id}`}>
    <button className="btn btn-primary bg-green-700">Edit</button>
    </Link>
    <button onClick={()=>handleDelete(d._id)} className="btn btn-primary ">Delete</button>
   </div>
          </div>
        </div>
      </div>
    </div>
                </>))
            }
          </div>
        </div>
    );
};

export default MyBookings;