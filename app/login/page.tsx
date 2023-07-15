'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie'
import { getCookie,setCookie } from 'cookies-next';
import jwt_decode from "jwt-decode";



export default function Login(){
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState(false)

    

  const handleSubmit = async (e:any) => {
      e.preventDefault();
      setLoading(true)
  
      try {
         await fetch(`https://confused-rose-headscarf.cyclic.app/api/deliverySignin`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:username,password:password }),
  
        })
        .then(response => response.json())
        .then(data => {
          const { token,tokenData} = data;
          setUsername('');
          setPassword('');
          setCookie('token', token, {maxAge: 60 * 6 * 24})
          setLoading(false)

          tokenData.role===1 ? router.push(`/deliveryBoy/${tokenData.id}`):router.push('/dashboard')
 
        })
      } catch (error) {
        
        setError(true);
      }
    };
  
    return (
      <div className='mx-7 p-3'>
        <h2 className=' text-teal-700 text-6xl font-extrabold m-4 underline'>Sign In</h2>
        <form className='flex flex-col lg:w-[50%]' onSubmit={handleSubmit}>
          <input
            type="text"
            className=' rounded-md p-3 m-4 border-teal-600 border-2'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className=' rounded-md p-3 m-4 border-2 border-teal-600'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  className='bg-teal-700 p-2 rounded-lg m-4 w-[40%] text-white font-bold' type="submit">{loading ? 'Please Wait' : 'Sign In'}</button>
        </form>
        {error && <div className=' bg-red-400 p-2 w-[50%] rounded-md'>Failed to Sign In.Check the Username and Password again</div>}
      </div>
    );


}

// export default Login;