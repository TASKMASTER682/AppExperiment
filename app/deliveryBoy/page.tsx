'use client'
import { useState ,ChangeEvent, FormEvent} from "react";

const CreateDeliveryBoy = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:8000/api/deliveryBoy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name,username,password}),
        });
        const data = await response.json();
        setName("");
        setUsername("");
        setPassword("");
        console.log('User created:', data);
        // You can perform any necessary actions after successful creation
      } catch (error) {
        console.log('Failed to create delivery boy:', error);


      }
    };
  
  return (
    <form onSubmit={handleSubmit}>
    <h3 className="text-6xl text-teal-500 m-4 underline">Create Delivery Agent</h3>
    <div className=" p-3 ">
     
      <input
      className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
      placeholder="Name of Delivery Agent"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div className="p-3">
      <input
        placeholder="Unique Username"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </div>
    <div className="p-3">
      <input
        placeholder="Password"
        className=" shadow-md rounded-md p-3 border-red-500 border-2 w-[50%]"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    
    <button  className=" bg-teal-700 p-3 rounded-md m-4 text-white w-52" type="submit">Create</button>
  </form>  )
}

export default CreateDeliveryBoy;