'use client'
import CancelButton from "@/app/components/CancelButton";
import DeliveryButton from "@/app/components/DeliverButton";
import {useRouter} from 'next/navigation';
import { deleteCookie } from 'cookies-next';

export default async function SingleBoy({ params }: { params: { deliveryId: string } }){
    const router=useRouter()


    const res = await fetch(`https://confused-rose-headscarf.cyclic.app/api/getDeliveryBoys/${params.deliveryId}`,{ cache: 'no-store' });
    const boys= await res.json();
  
    if (!boys) return <div>Loading...</div>;

    const signOut = () => {
        deleteCookie('token');;
        console.log('Sign Out successfully')
        router.push('/login')
      }

    return(
        <>
        <h1 className=" text-6xl text-red-500 font-extrabold p-4 underline"> Task Of The Day</h1>
        <div className='flex flex-row justify-between'>
        <h2 className="m-4 text-3xl underline font-extrabold text-green-500">Lunch Orders</h2>
        <button onClick={signOut} className=' bg-black text-white font-bold p-4 rounded-md m-4'>Signout</button>
        </div>


        <table className="m-4 text-center w-[100%]">
            <tbody>
                <tr className="p-3 bg-teal-700 font-bold ">
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Name</h2></td>
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Phone No.</h2></td>
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Delivery Status</h2></td>
                    <td className="p-3 m-2"><h2 className="text-xl text-white ">Order Status</h2></td>

                </tr>
                {boys.map((boy:any)=>(
                    boy.mealType==='lunch' && 
                    <tr className="p-3" key={boy._id}>
                        <td className="p-3 m-2"><h3 className="text-lg">{boy.customerName}</h3></td>
                        <td className="p-3 m-2"><h3 className="text-lg">{boy.customerPhone}</h3></td>
                        <td className="p-3 m-2"><DeliveryButton  customerId={boy.customerId} orderId={boy._id} /></td>
                        <td className="p-3 m-2"><CancelButton customerId={boy.customerId} orderId={boy._id} /></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <h2 className="m-4 text-3xl underline font-extrabold text-green-500">Dinner Orders</h2>
        <table className="m-4 text-center w-[100%] my-3">
            <tbody>
                <tr className="p-3 bg-teal-700 font-bold ">
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Name</h2></td>
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Phone No.</h2></td>
                    <td className="p-3 m-2"><h2 className=" text-xl text-white ">Delivery Status</h2></td>
                    <td className="p-3 m-2"><h2 className="text-xl text-white ">Order Status</h2></td>

                </tr>
                {boys.map((boy:any)=>(
                    boy.mealType==='dinner' && 
                    <tr className="p-3" key={boy._id}>
                        <td className="p-3 m-2"><h3 className="text-lg">{boy.customerName}</h3></td>
                        <td className="p-3 m-2"><h3 className="text-lg">{boy.customerPhone}</h3></td>
                        <td className="p-3 m-2"><DeliveryButton  customerId={boy.customerId} orderId={boy._id} /></td>
                        <td className="p-3 m-2"><CancelButton customerId={boy.customerId} orderId={boy._id} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    
    )
}
