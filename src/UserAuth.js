// import React, { useState } from 'react';
// import { auth } from '../firebase';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// const UserAuth = () => {
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });
//   const { email, password } = data;

//   const changeHandler = e => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const SignUp = e => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(user => console.log(user))
//       .catch(err => console.error('Error during sign up:', err));
//   };

//   const SignIn = e => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then(user => console.log(user))
//       .catch(err => console.error('Error during sign in:', err));
//   };

//   return (
//     <div>
//       <center>
//         <h1>User Authentication</h1>
//         <form autoComplete="off">
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={changeHandler}
//           /><br /><br />
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={changeHandler}
//           /><br /><br />
//           <button onClick={SignIn}>Sign in</button>&nbsp;&nbsp;
//           <button onClick={SignUp}>Sign up</button>&nbsp;
//         </form>
//       </center>
//     </div>
//   );
// };

// export default UserAuth;
