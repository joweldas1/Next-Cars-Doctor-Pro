"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const CheckOut = ({service}) => {
  
    const { title, img, price ,_id} = service
    const session=useSession()
    const email=session?.data?.user?.email


    const handleSubmit=async(e)=>{
        e.preventDefault()
        const newBooking={
            name : e.target.name.value,
             email : e.target.email.value,
             phone: e.target.phone.value,
             address:e.target.address.value,
             due:e.target.due.value,
           title:title,
           img:img,
           price:price
        }

      
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/checkOut/api/newBookings`,{
          method:"POST",
          body:JSON.stringify(newBooking),
          headers:{
            "content-type":"application/json",
          }
        })

        if(res.status===200){
          toast.success("Submitted your order")
            e.target.reset()
        }

    }




    return (
        <div>
          <Toaster/>
          <h1 className='text-center font-semibold text-primary text-2xl'>CheckOut {title}</h1>

          <Image alt='title' src={img} height={200} width={200} />
          <h1 className='text-center font-semibold text-primary text-2xl'>Price {price}</h1>

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
          <input type="number" placeholder="number" name='phone' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="text" placeholder="Address" name='address' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due</span>
          </label>
          <input type="number" placeholder="Due" name='due' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
       
          </div>

        </div>
    );
};

export default CheckOut;