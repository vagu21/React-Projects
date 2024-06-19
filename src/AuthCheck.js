// import React, { useEffect, useState } from 'react';
// import { auth } from '../firebase';
// import UserAuth from './UserAuth';
// import Food from './Food';

// const AuthCheck = () => {
//     const [present, setPresent] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             if (user) {
//                 setPresent({
//                     uid: user.uid,
//                     email: user.email
//                 });
//             } else {
//                 setPresent(null);
//             }
//         });

//         // Cleanup subscription on unmount
//         return () => unsubscribe();
//     }, []);

//     return (
//         <div>
//             {
//                 present ? <Food info={present} /> : <UserAuth />
//             }
//         </div>
//     );
// };

// export default AuthCheck;
