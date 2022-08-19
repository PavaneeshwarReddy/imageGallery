import React, { useEffect, useState } from 'react'
import {projectStorage} from "../Firebase/firebaseConfig"
import {ref} from "firebase/storage"
import chooseimage from "../Images/addimage.png"
import MorningImage from "../Images/MorningBackground.jpg"
import "../CSS/Home.css"
import { type } from '@testing-library/user-event/dist/type'
import Navbar from "../Components/Navbar"
import ProgressBar from './ProgressBar'
function Home() {
      const [file,setfile] =useState(null);
      const [imagetype,setImageType] = useState('null');
      const [error,setError] =useState(null);
      const types=['image/png','image/jpeg'];
  const imagechangehandler=(e)=>{
        let selectedImage = e.target.files[0];//to choose one image of all;
        console.log(selectedImage);
        if(selectedImage && types.includes(selectedImage.type) )
        {
                setfile(selectedImage);
                setError('');
                setImageType(selectedImage.type)
        }
        else
        {
          setfile(null);
          setError("Please select a png/jpeg image");
        }

  }



  return (
    <div className='home'>
            
             
            
              <input type="file" id="file" onChange={imagechangehandler} ></input>
              <label htmlFor='file' className='choosefile'>
                    <img src={chooseimage} className="addimage" ></img>
                    <h3>Add a photo</h3>
              </label>
              {
                  file==null?<></>:<ProgressBar file={file} />
              }
              
            
    </div>
  )
}

export default Home