"use client"
import { useRef } from "react";
import classes from "./image-picker.module.css"
import { useState } from "react";
import Image from 'next/image';


export default function ImagePicker({label,name}){
    const [pickedImage,setPickedImage] = useState(null);

    const ref =  useRef();
    function handlePickClick(){
        ref.current.click();
    }

    function handleImageChange(){
        const file = ref.current.files[0];
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
            setPickedImage(fileReader.result);
        }
    }   

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt="Picked" fill />}
                </div>
                <input type="file" id="image" accept=".jpg,.jpeg,.png" name={name} className={classes.input} ref={ref} onChange={handleImageChange} required/>
                <button type="button" className={classes.button} onClick={handlePickClick}>Pick an Image</button>
            </div>
        </div>
    )
}