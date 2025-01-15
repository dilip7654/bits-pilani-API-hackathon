import React from 'react'
import { useState , useEffect } from 'react';
import {Card, CardContent, CardHeader  } from '@mui/material';
import { collection, query, where, getDocs ,getDoc,doc } from 'firebase/firestore';

import {db} from '../Firebase'
import { getAuth } from 'firebase/auth';

// const q = query(collection(db, "users")) ;
const Info = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (currentUser) {
        const userId = currentUser.uid; // Get the user's UID
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
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  // const handleClick = async () => {
  //   try {
  //     const querySnapshot = await getDocs(collection(db , "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log( doc.id ,"=>" ,doc.data());
  //     });
  //   } catch (error) {
  //     console.error("Error fetching documents: ", error);
  //   }
  // };
  
 
  return (
    
    <Card>
      <CardHeader>
        {/* <CardTitle>Patient Information</CardTitle> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div >
            <h4 className="font-semibold">Date of Birth</h4>
            <p>{userData.birthDate}</p>
          </div>
          <div>
            <h4 className="font-semibold">Gender</h4>
            <p>Male</p>
          </div>
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>{userData.phone}</p>
          </div>
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>{userData.email}</p>
          </div>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>123 Main St, Anytown, USA 12345</p>
          </div>
          <div>
            <h4 className="font-semibold">Emergency Contact</h4>
            <p>Jane Doe (Wife) - (555) 987-6543</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Info
