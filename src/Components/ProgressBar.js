import React, { useEffect, useState } from 'react'
import { projectStorage,projectFirestore } from "../Firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import {collection,addDoc, Firestore} from "firebase/firestore"
import Modal from "react-modal"
import "../CSS/ProgressBar.css"
import uploadingImageLoader from "../Images/uploading.gif"
import NightBackground from '../Images/NightBackground.jpg'
import { async } from '@firebase/util'
function ProgressBar(file) {
    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [fileName,setFileName] = useState("");
    const metadata = {
        contentType: file.file.type,
    }
    const storageRef = ref(projectStorage, 'images/' + file.file.name);
    const uploadTask = uploadBytesResumable(storageRef, file.file, metadata);
    const FireStoreRef = collection(projectFirestore,"allImages");
    const   addImageURL =async ()=>{
        await addDoc(FireStoreRef,{imageURL});

}
    useEffect(() => {
        console.log(file.file.type);
        uploadTask.on('state_changed',
            (snapshot) => {
                setFileName(file.file.name);
                setLoading(true);
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log(progress);
            },
            (error) => {
                console.log("Error occured while uploading an image");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>  {
                    setLoading(false);
                    setImageURL(downloadURL);
                   addImageURL();

                    console.log(downloadURL);
                })
            }

        )
    }, [file])



      



    return (
        <div>
           
            <Modal className="uploading" isOpen={loading}>
                <div className='modaldiv'>
                    <img src={uploadingImageLoader} className="loader"></img>
                    <div className='progressbar' style={{ width: progress + '%' }}></div>
                    <p className='loadingmessage'>{fileName}</p>
                    {
                        progress == 100 ? <p className='loadingmessage'>Hold on a sec</p> : <p className='loadingmessage'>loading</p>
                    }
                </div>

            </Modal>
            {/* <div className='temp'></div>
            <div className='temp'></div> */}


        </div>
    )
}

export default ProgressBar