'use client'
import { useState ,useEffect ,ChangeEvent, FormEvent} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DeliveryBoy = {
  _id: string;
  name: string;
};

export default function Customer() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('no@gmail.com');
    const [address, setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [subscription, setSubscription] = useState('');
    const [pincode, setPincode] = useState('');
    const [price, setPrice] = useState('');
    const [dinnerTiffins, setDinnerTiffins] = useState(0);
    const [lunchTiffins, setLunchTiffins] = useState(0);
    const [deliveryBoy, setDeliveryBoy] = useState('');
    const [deliveryBoys, setDeliveryBoys] = useState<DeliveryBoy[]>([]);
    const [subscriptionStart, setSubscriptionStart] = useState<Date | null>(new Date());
    const [subscriptionEnd, setSubscriptionEnd] = useState<Date | null>(new Date());


    useEffect(() => {
      const fetchDeliveryBoys = async () => {
        try {
          const response = await fetch('https://confused-rose-headscarf.cyclic.app/api/getDeliveryBoys',{
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          if (data) {
            setDeliveryBoys(data);
          }
        } catch (error) {
          console.log('Failed to fetch delivery boys:', error);
        }
      };
      fetchDeliveryBoys();
    }, []);

    const deliveryBoyOptions = deliveryBoys.map((boy) => (
      <option key={boy._id} value={boy._id}>
        {boy.name}
      </option>
    ));
    
    // https://confused-rose-headscarf.cyclic.app/api
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('https://confused-rose-headscarf.cyclic.app/api/createCustomer', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name,address,phone,email,subscription,price,subscriptionStart, subscriptionEnd, dinnerTiffins, lunchTiffins,pincode,deliveryBoy  }),
        });
        const data = await response.json();
        console.log('User created:', data);

    setName("")
    setEmail("")
    setAddress("")
    setPhone("")
    setSubscription("")
    setPrice('')
    setPincode("")
    setDinnerTiffins(Number())
    setLunchTiffins(Number())
    setDeliveryBoy("")
    setDeliveryBoys([])
    setSubscriptionStart(new Date());
    setSubscriptionEnd(new Date())

  

        // You can perform any necessary actions after successful creation
      } catch (error) {
        console.log('Failed to create user:', error);
      }
    };

  
  return (
    <form autoComplete="off"  className=" my-6" onSubmit={handleSubmit}>
    <h3 className="text-6xl text-red-500 m-4 underline font-bold">Create Customer</h3>
    <div className=" p-3 ">
     
      <input
      id='name'
      className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
      placeholder="Name of Customer"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
    </div>
    <div className="p-3">
    <p className="text-teal-500 text-lg m-2">Set Number of Tiffins in Dinner</p>

          <input
          id='dinnerTiff'
            type="number"
            placeholder="Number of Tiffins Ind Dinner For Whole Month"
            className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
            value={dinnerTiffins}
            onChange={(e) => setDinnerTiffins(Number(e.target.value))}
          />
        </div>
        <div className="p-3">
        <p className="text-teal-500 text-lg m-2">Set Number of Tiffins in Lunch</p>
          <input
            type="number"
            id='lunchTiff'
            className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
            placeholder="Number of Tiffins In Lunch For Whole Month"
            value={lunchTiffins}
            onChange={(e) => setLunchTiffins(Number(e.target.value))}
          />
        </div>
    <div className="p-3">
  <p className="text-teal-500 text-lg m-2">Set Subscription Start Date</p>
  <DatePicker
          className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
          selected={subscriptionStart}
          onChange={(date) => setSubscriptionStart(date)}
          // dateFormat="yyyy-MM-dd"
        />

</div>
      <div className="p-3">
         <p className="text-teal-500 text-lg m-2">Set Subscription End Date</p>
         <DatePicker
          className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
          selected={subscriptionEnd}
          onChange={(date) => setSubscriptionEnd(date)}
          // dateFormat="yyyy-MM-dd"
        />
        </div>
        <div className="p-3">
        <select
         className="shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
         placeholder="Deliver Boy"
         value={deliveryBoy}
        onChange={(e) => setDeliveryBoy(e.target.value)}>
       <option value="">Select Delivery Boy</option>
        {deliveryBoyOptions}
        </select>
        </div>
    <div className="p-3">
      <input
        placeholder="Email of Customer"
        className=" shadow-md rounded-md p-3 border-teal-700 w-[50%]"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="p-3">
      <input
      id='address'
        placeholder="Address"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
    <div className="p-3">
      <input
      id='phone'
        placeholder="Mobile Number"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
    </div>
    <p className="text-teal-500 text-lg m-3">Set Price of One Tiffin</p>

    <div className="p-3">
      <input
        id='price'
        placeholder="Price of a Tiffin"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>     
     <div className=" p-3">
      <input
      id='subs'
        placeholder="Subscription Price"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="subscription"
        value={subscription}
        onChange={(e) => setSubscription(e.target.value)}
      />
    </div>    

    <div className="p-3">
      <input
      id='pin'
        placeholder="Pincode"
        className=" shadow-md rounded-md p-3 border-teal-700 w-[50%]"
        type="pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
    </div>
    <button className=" bg-teal-700 p-3 rounded-md m-4 text-white w-52" type="submit">Create</button>
  </form>  )
}

