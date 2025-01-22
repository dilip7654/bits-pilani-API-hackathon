import React from 'react'
import { useState , useEffect } from 'react';
import { MessageSquare, Phone, User, Calendar, Droplet } from 'lucide-react';
import { collection, query, where, getDocs ,getDoc,doc } from 'firebase/firestore';


import {db} from '../Firebase'
import { getAuth } from 'firebase/auth';

const Name = () => {
  const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const auth = getAuth();
    
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          const userId = user.uid; // Get the user's UID
          try {
            // Fetch user-specific data
            const userDoc = await getDoc(doc(db, "users", userId));
            if (userDoc.exists()) {
              setUserData(userDoc.data());
            } else {
              console.log("No such user document!");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        } else {
          console.log("No user is signed in.");
        }
        setLoading(false);
      });
    
      return () => unsubscribe(); // Clean up the listener when the component unmounts
    }, []);
    
  
    if (loading) return <div>Loading...</div>;
    console.log(userData)
  return (
    <div>
      <div className="main-container h-auto w-5/5 mx-auto bg-white shadow-lg rounded-lg mt-6 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
        <div className="mt-2 h-56 flex justify-evenly rounded-lg p-4 bg-gradient-to-r relative overflow-hidden">
          {/* Decorative elements */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm opacity-30 mix-blend-soft-light"></div> */}
          {/* <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#0077b6] rounded-full opacity-20"></div> */}
          {/* <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#03045e] rounded-full opacity-20"></div> */}
          
          <div className="right-box relative z-10">
            <div className="Patient_name text-2xl font-bold mb-2 text-[#03045e] flex items-center gap-2">
             {userData.name}
              <span className="inline-block w-2 h-2 bg-[#0077b6] rounded-full animate-pulse"></span>
            </div>
            <div className="patinatId text-lg mb-2 text-[#002f6c] font-medium">
              Patient-Id: 34567
            </div>
            <div className="Personal-info h-auto ">
              <ul className="list-none space-y-2 flex justify-evenly gap-8 w-80 h-[7rem]">
                <li className="text-sm text-[#03045e] font-medium flex items-center gap-2 ">
                  
                  <p className='text-[1.2rem] font-bold'>Male</p>
                </li>
                <li className="text-sm text-[#03045e] font-medium flex items-center gap-2">
                  
                  <p className='text-[1.2rem] font-bold'>20 years</p>
                </li>
                <li className="text-sm text-[#03045e] font-medium flex items-center gap-2">
                  
                 <p className='text-[1.2rem] font-bold'> Blood Grp A+  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="left-box flex  justify-center items-start gap-2 mt-10">
            <div className="contact bg-[#e0f7fa] text-[#0077b6] px-6 py-2 rounded-md text-center cursor-pointer hover:bg-[#002f6c] shadow-lg flex items-center gap-2 w-38 justify-center transform hover:-translate-y-1 transition-all duration-200 border border-white/20">
              <Phone size={16} />
              {userData.phone}
            </div>
            <div className="msg bg-[#0077b6] text-[#fcefef] px-6 py-2 rounded-md text-center cursor-pointer hover:bg-[#03045e] shadow-lg flex items-center gap-2 w-36 justify-center transform hover:-translate-y-1 transition-all duration-200 border border-white/20">
              <MessageSquare size={16} />
              Message
            </div>
          </div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5"></div>
        </div>
      </div>

    </div>
  )
}

export default Name
