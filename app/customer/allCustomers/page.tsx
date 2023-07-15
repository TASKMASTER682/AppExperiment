'use client'
import { useState,useEffect,FormEvent } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import UpdateCustomer from '@/app/components/UpdateCustomer';




type Customers = {};
// const AllCustomer: React.FC = () =>


export default function AllCustomer(){
  // const [newOrders, setNewOrders] = useState({ orders: [] });
  const [price,setPrice]=useState('')
  const [subscription,setSubscription]=useState('')
  const [phone,setPhone]=useState('')
  const [customers,setCustomers]=useState<Customers[]>([])
  const [newCom,setNewCom]=useState({})
  const [rsub,setRsub]=useState('')
  const [subscriptionStart, setSubscriptionStart] = useState<Date | null>(new Date());
  const [subscriptionEnd, setSubscriptionEnd] = useState<Date | null>(new Date());
  const [isOpen ,setIsOpen]=useState(false)


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fetchCustomers=async ()=>{
    const res = await fetch('https://confused-rose-headscarf.cyclic.app/api/getAllCustomers',{ cache: 'no-store' });
    const response= await res.json();
    setCustomers(response)
    
    
  
  }

fetchCustomers();

  
function selectCustomer(subs:any,pesa:any,phone:any,id:any,end:any,rsub:any){
          setPrice(pesa);
          setSubscription(subs);
          setPhone(phone)
          setNewCom(id)
          setRsub(rsub)
        // setSubscriptionStart(new Date(start))
          setSubscriptionEnd(new Date(end))

    }



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await fetch(`https://confused-rose-headscarf.cyclic.app/api/updateCustomer/${newCom}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ price,subscription,phone,subscriptionStart,subscriptionEnd ,rsub }),
          });
          const data = await response.json();
          console.log('Updated')
    //   setAddress("")
      setPhone("")
      setSubscription("")
      setPrice('')
      setRsub('')
    //   setPincode("")
    //   setDinnerTiffins(Number())
    //   setLunchTiffins(Number())
    //   setDeliveryBoy("")
    //   setDeliveryBoys([])
    //   setSubscriptionStart(new Date());
    //   setSubscriptionEnd(new Date())
  
    
  
          console.log('User created:', data);
          // You can perform any necessary actions after successful creation
        } catch (error) {
          console.log('Failed to create user:', error);
        }
      };

        return(
          <>
<h1 className=' text-6xl text-red-500 m-4 underline font-extrabold'>All Customers</h1>

<table className='w-[100%] text-center'>
  <tbody>
  <tr className=' font-bold'>
  <td className='text-white text-xl p-2 bg-teal-500'>Name</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Phone No</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Subscription</td>
      <td className='text-white text-xl p-2 bg-teal-500'> Remaining Amount</td>
      <td className='text-white text-xl p-2 bg-teal-500'>Address</td>
  </tr>
  


  {customers.map((customer:any) => (
                <tr  key={customer._id}>

                <td className='text-xl text-teal-950 p-2 mx-4'>{ customer.name}</td>
                <td className='text-xl text-teal-950 p-2 mx-4'>{customer.phone}</td>
                <td className='text-xl text-teal-950 p-2 mx-4'>{customer.subscription}</td>
                <td className='text-xl text-teal-950 p-2 mx-4'>{customer.rsub}</td>
                <td className='p-2 mx-4'><button className='bg-teal-600 rounded-md p-2 px-4' onClick={()=>selectCustomer(customer.subscription,customer.price,customer.phone,customer._id,customer.subscriptionEnd,customer.rsub)}>Edit</button></td>

</tr>
  ))}

  </tbody>
</table>
<div className='my-2 z-20 fixed bottom-0 right-2 w-[40%]'>
    <form onSubmit={handleSubmit} className={isOpen ?'bg-teal-200 rounded-lg shadow-xl opacity-90 flex flex-col ' : ' hidden'}>
    <h3 className='text-xl text-blue-950 font-bold text-center m-2'>Update Form</h3>

        <input className='p-2 border-2 border-teal-400 m-3 rounded-md' placeholder='Price' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        <input className='p-2 border-2 border-teal-400 m-3 rounded-md' placeholder='Subscription'  value={subscription} onChange={(e)=>{setSubscription(e.target.value)}} />
        <input className='p-2 border-2 border-teal-400 m-3 rounded-md' placeholder='Phone'value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
        <input className='p-2 border-2 border-teal-400 m-3 rounded-md' placeholder='Remaining Balance'value={rsub} onChange={(e)=>{setRsub(e.target.value)}} />

        <div className="p-3">
  <p className="text-teal-500 text-lg">Set Subscription Start Date</p>
  <DatePicker
          className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
          selected={subscriptionStart}
          onChange={(date) => setSubscriptionStart(date)}
          // dateFormat="yyyy-MM-dd"
        />
 <p className="text-teal-500 text-lg">Set Subscription End Date</p>
  <DatePicker
          className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
          selected={subscriptionEnd}
          onChange={(date) => setSubscriptionEnd(date)}
          // dateFormat="yyyy-MM-dd"
        />
</div>    
<button className='bg-blue-950 p-2 rounded-xl m-2 text-white font-bold'>Update</button>
    </form>
    <button onClick={toggleMenu} className=' bg-emerald-600 p-4 text-white font-bold rounded-xl'>{!isOpen ? 'Show Form' : 'Hide Form'}</button>

</div>
</>
        )
      

  
  }

  // export default AllCustomer