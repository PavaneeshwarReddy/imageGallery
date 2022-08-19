import React, { useEffect, useState } from 'react'
import { projectStorage } from "../Firebase/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Modal from "react-modal"
import "../CSS/ProgressBar.css"
import uploadingImageLoader from "../Images/uploading.gif"
import NightBackground from '../Images/NightBackground.jpg'
function ProgressBar(file) {
    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const metadata = {
        contentType: file.file.type,
    }
    const storageRef = ref(projectStorage, 'images/' + file.file.name);
    const uploadTask = uploadBytesResumable(storageRef, file.file, metadata);


    useEffect(() => {
        console.log(file.file.type);
        uploadTask.on('state_changed',
            (snapshot) => {
                setLoading(true);
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log(progress);
            },
            (error) => {
                console.log("Error occured while uploading an image");
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLoading(false);
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