// // Import required modules
// import { useState } from 'react';

// // Sign-in form component
// const SignInForm = (router:any) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading,setLoading]=useState(false)

//   // Function to handle form submission
// //   const handleSubmit = async (e:any) => {
//     // e.preventDefault();

// //     try {
// //       // Send a POST request to the /signin route
// //       const response = await axios.post('/signin', { username, password });

// //       // If successful, store the token in local storage
//     //   localStorage.setItem('token', response.data.token);

// //       // Clear form input fields and error state
//     //   setUsername('');
//     //   setPassword('');
//     //   setError('');
// //     } catch (err) {
// //       // Display error message if sign-in fails
// //       setError(err.response.data.error);
// //     }
// //   };
// const handleSubmit = async (e:any) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:8000/api/signin`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({username:username,password:password }),

//       })
//       .then(response => response.json())
//       .then(data => {
//         const { token, deliveryBoy } = data;
//         localStorage.setItem('token', token);
//         console.log(token); // Access the token value
//         setUsername('');
//         setPassword('');
//         setError('');
//         setLoading(false)
//         // ${deliveryBoy._id}
//       })
//     } catch (error) {
//       console.error('Failed to Signin order:', error);
//       // setErrorMessage('Failed to cancel order');
//     }
//   };

//   return (
//     <div>
//       <h2 className=' text-teal-700 text-3xl m-4'>Sign In</h2>
//       {error && <p>{error}</p>}
//       <form className='flex flex-col' onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className=' rounded-md w-[50%] p-3 m-4'
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className=' rounded-md w-[50%] p-3 m-4'
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={()=>setLoading(true)}  className='bg-orange-700 p-2 rounded-lg m-4 w-24' type="submit">{loading ? 'Please Wait' : 'Sign In'}</button>
//       </form>
//     </div>
//   );
// };

// export default SignInForm;
