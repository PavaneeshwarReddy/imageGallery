import { async } from '@firebase/util';
import nothing from "../Images/nothingToShow.jpg"
import { collection, Firestore, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import "../CSS/ContactUs.css"
import { projectFirestore } from "../Firebase/firebaseConfig"
function ContactUs() {
  const FireStoreRef = collection(projectFirestore, "allImages");
  const [allDocs, setAllDocs] = useState([]);



  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(FireStoreRef);
      const doc = [];
      data.forEach((e) => {
        if(doc.indexOf(e.data().imageURL)===-1)
        {
          doc.push(e.data().imageURL);
        }
       
      })
      setAllDocs(doc);
    }
    getPost();


  }, [])
  const printAll = () => {
    allDocs.forEach((e) => {
      console.log(e);
    })
  }






  return (
    <div className='gallery'>
      {
        allDocs.length == 0 ? <img src={nothing} className="nothing"></img> : <div>
          {

            allDocs.map(imageurl => (
              imageurl != null ? <img src={imageurl} className="galleryImages"></img> : <></>
            )
            )
          }
        </div>
      }
    </div>
  )
}

export default ContactUs