// 'use client'

interface Order {
  _id: string;
  orderDate: string;
}
//https://confused-rose-headscarf.cyclic.app
//http://localhost:8000/api
const OrderHistory=async ({ params }: { params: { customerId: string } }) => {
  const res = await fetch(`https://confused-rose-headscarf.cyclic.app/api/orderHistory/${params.customerId}`,{ cache: 'no-store' });
  const orders =await res.json();
  
// const orders=await getData(params.customerId)
  if (!orders) return <div>Loading...</div>;
const price=60;
  return (
    <>
    <div className="flex flex-row justify-between">
    <h1 className='text-6xl text-teal-600 font-extrabold underline p-3 m-4'>{orders.orderHistory[0].name}</h1>
    <h1 className='text-6xl text-teal-600 font-extrabold underline p-3 m-4'>{orders.orderHistory[0].subscription}</h1>
    <h1 className={orders.orderHistory[0].rsub <= 0 ? 'text-red-600 text-6xl  font-extrabold underline p-3 m-4' : 'text-teal-600 text-6xl  font-extrabold underline p-3 m-4'}>{orders.orderHistory[0].rsub}</h1>
    </div>

      <table className='m-2 w-[100%] text-center'>
      <tbody>
      < tr className=' text-white bg-teal-600 p-2'>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Date</h2></td>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Meal Time</h2></td>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Tiffins</h2></td>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Amount</h2></td>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Delivery Status</h2></td>
        <td className='mx-3 font-semibold'><h2 className='text-2xl'>Cancellation Status</h2></td>

      </tr>
      {/* <tr className=' text-2xl font-extrabold underline text-red-500'>Lunch Orders</tr> */}
      {orders.orderHistory.map((order:any) => (
        

       <tr className='p-2' key={order._id}>
          <td className='mx-3 text-teal-500 font-semibold'>{order.orderDate}</td>
          <td className='mx-3 '>{order.newMeal}</td>
          <td className='mx-3 '>{order.tiffins}</td>
          <td className='mx-3 '>{order.isCancelled ? 0 :order.price*order.tiffins}</td>
          <td className='mx-3'>{order.deliveryStatus ? 'Delivered':'Not Delivered'}</td>
          <td className='mx-3'>{order.isCancelled ? 'Cancelled':'Not Cancelled'}</td>

        </tr>
      ))}
      </tbody>
    </table>  
    </>

  );
};

export default OrderHistory;
