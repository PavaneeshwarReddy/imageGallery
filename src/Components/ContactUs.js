import { async } from '@firebase/util';
import { collection, Firestore, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import "../CSS/ContactUs.css"
import {projectFirestore} from "../Firebase/firebaseConfig"
function ContactUs () {
  const FireStoreRef = collection(projectFirestore,"allImages");
  const [allDocs,setAllDocs] = useState([]);
  
  
    
    useEffect(()=>{
      const  getPost=async ()=>{
        const data = await getDocs(FireStoreRef);
        const doc=[];
        data.forEach((e)=>{
          doc.push(e.data().imageURL);
        })
        setAllDocs(doc);
      }
      getPost();
      

    },[])
    console.log(allDocs)

   
 
 
  return (
    <div className='gallery'>
               
    </div>
  )
}

export default ContactUs