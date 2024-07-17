import axios from "axios"

export const getService=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/services/api/get-all`)
    const services = await res.json()
    return services

}
export const getServiceDetails=async(id)=>{
    const service = await axios.get(`${process.env.NEXT_PUBLIC_URL}/services/api/${id}`)
    
    return service

}

