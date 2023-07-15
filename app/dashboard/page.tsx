'use client'
import { useState,useEffect } from 'react';
import CancelButton from '../components/CancelButton';
import DeliverButton from '../components/DeliverButton';
// import { getCookie} from 'cookies-next';
// import jwt_decode from "jwt-decode";
import {useRouter} from 'next/navigation';
import { deleteCookie } from 'cookies-next';
import Navbar from '../components/Navbar';

const getLunchData=async ()=>{
  const res = await fetch('https://confused-rose-headscarf.cyclic.app/api/newOrders/lunch',{ cache: 'no-store' });
  return res.json();
  

}
const getDeliveryBoys=async ()=>{
  const res = await fetch('https://confused-rose-headscarf.cyclic.app/api/getDeliveryBoys',{ cache: 'no-store' });
  const response= res.json();
  return response
  

}


export default async function Dashboard(){
  const router=useRouter()


  const newLunchOrders =await getLunchData();
  const deliveryBoys = await getDeliveryBoys();



  const signOut = () => {
    deleteCookie('token');;
    console.log('Sign Out successfully')
    router.push('/login')
  }

  return(
   
    <div>
  <Navbar />
 <div className='flex flex-row justify-between'>
 <h1 className=' text-6xl text-red-500 m-4 underline font-extrabold'>Active Lunch Orders Of Today</h1>
     <button onClick={signOut} className=' bg-black text-white font-bold p-4 rounded-md m-4'>Signout</button>
 </div>
 
     <table className='w-[100%] text-center'>
       <tbody>
       <tr className='font-bold'>
       <td className='text-white text-xl p-2 bg-teal-500 '>Name</td>
           <td className='text-white text-xl p-2 bg-teal-500'>Phone No</td>
           <td className='text-white text-xl p-2 bg-teal-500'>Lunch Status</td>
           <td className='text-white text-xl p-2 bg-teal-500'>Amount</td>
           <td className='text-white text-xl p-2 bg-teal-500'>Delivery Status</td>
           <td className='text-white text-xl p-2 bg-teal-500'>Address</td>
       </tr>
       
       {newLunchOrders.orders.map((order:any) => (
                     <tr  key={order._id}>
     
                     <td className='text-xl text-teal-950 p-2 mx-4'><a href={`/customer/${order.customerId}`}>{ order.customerName}</a> </td>
                     <td className='text-xl text-teal-950 p-2 mx-4'>{order.customerPhone}</td>
       
                     <td className='text-xl text-teal-950 p-2 mx-4'><CancelButton orderId={order._id} customerId={order.customerId} /></td>
                     <td className='text-xl text-teal-950 p-2 mx-4'>{order.total}</td>
                     <td className='text-xl text-teal-950 p-2 mx-4'><DeliverButton orderId={order._id} customerId={order.customerId} /></td>
                     <td className='text-xl text-teal-950 p-2 mx-4'>{order.address}</td>

     
     </tr>
       ))}
     
       </tbody>
     </table>
     
     <div className="p-4 my-2">
     {deliveryBoys.map((boy:any)=>(
       <a href={`/deliveryBoy/${boy._id}`} key={boy._id}><h3 className='text-xl text-red-700 font-bold' key={boy._id}>{boy.username}</h3>
       </a>
       ))}
     </div>
     </div> 
 
 
 )
}

  

