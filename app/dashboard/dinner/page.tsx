'use client'
import CancelButton from "@/app/components/CancelButton";
import DeliverButton from "@/app/components/DeliverButton";


const getDinnerData=async ()=>{
    const res = await fetch('http://localhost:8000/api/newOrders/dinner',{ cache: 'no-store' });
    return res.json();

  }
  
  export default async function DinnerDashboard(){

    const newDinnerOrders = await getDinnerData();
    
    return(
        <>
    <h1 className=' text-6xl text-red-500 m-4 underline font-extrabold'>Active Dinner Orders Of Today</h1>
    
    <table className="text-center w-[100%]">
      {/* <thead> */}
      <tbody>
      <tr className='font-bold'>
      <td className='text-white text-xl p-2 bg-teal-500'>Name</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Phone No</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Dinner Status</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Amount</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Delivery Status</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Address</td>


      </tr>
      {/* </thead> */}
    
    
      {newDinnerOrders.orders.map((order:any) => (
                    <tr  key={order._id}>
    
                    <td className='text-xl text-teal-950 p-2 mx-4'><a href={`/customer/${order.customerId}`}>{ order.customerName}</a> </td>
                    <td className='text-xl text-teal-950 p-2 mx-4'>{order.customerPhone}</td>
      
                    {/* <td className='text-xl text-teal-950 p-2 mx-4'> <button className='btn bg-red-500 p-3 rounded-md mx-3'>{order.mealType==='lunch' && order.isCancelled ? 'Undilivered': 'Active'}</button>  <button className='btn bg-red-500 p-3 rounded-md mx-3'>{order.mealType==='lunch' && order.delivererd ? 'Delivered': 'Undelivered'}</button> </td> */}
                    <td className='text-xl text-teal-950 p-2 mx-4'><CancelButton orderId={order._id} customerId={order.customerId} /></td>

                    <td className='text-xl text-teal-950 p-2 mx-4'>{order.total}</td>
                    
                    <td className='text-xl text-teal-950 p-2 mx-4'><DeliverButton orderId={order._id} customerId={order.customerId} /></td>
                    <td className='text-xl text-teal-950 p-2 mx-4'>{order.address}</td>

    </tr>
      ))}
      </tbody>    
    </table>
    
    </>
      )

  }