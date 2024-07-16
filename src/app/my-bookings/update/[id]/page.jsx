"use client"
import { getServiceDetails } from '@/service/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';





const UpdateBookings = ({params}) => {
const [data,setData] = useState([])
    const session=useSession()
    const email=session?.data?.user?.email

    
    const loadData=async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-bookings/booking/${params.id}`)
        const data = await  res.json()
        setData(data.res) 
    }
useEffect(()=>{
    loadData()
},[])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-bookings/booking/${params.id}`,{
          method:"PATCH",
          body:JSON.stringify({
            phone: e.target.phone.value,
            address:e.target.address.value,
            due:e.target.due.value,
          }),
          headers:{
            "content-type":"application/json",
          }
        })

        if(res.status===200){
          toast.success("Submitted your order")
          
        }
        console.log(res,'checkout page new booking response');

    }

    return (
        <div>
          <Toaster/>
          <h1 className='text-center font-semibold text-primary text-2xl'>CheckOut {data?.title}</h1>

          <Image alt='title' src={data?.img} height={200} width={200} />
          <h1 className='text-center font-semibold text-primary text-2xl'>Price {data?.price}</h1>

          <div className='w-full p-3 border-2 border-primary text-center'>
          <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' defaultValue={email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" defaultValue={data.phone} placeholder="number" name='phone' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" defaultValue={data.address} name='address' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due</span>
          </label>
          <input type="number" defaultValue={data.due} placeholder="Due" name='due' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
       
          </div>

        </div>
    );
};

export default UpdateBookings;