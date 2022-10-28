import React from 'react'
import {useState, useRef} from "react"
import emailjs from '@emailjs/browser';

export default function Hireme() {
  const [processing, setProcessing] = useState(false)
    const styles = {
        input: 'bg-black outline-none sm:mx-4 mb-8 px-8 py-4  rounded-md',
        button: 'cursor-pointer hover:bg-theme/80 m-4 px-16 px-8 bg-theme rounded-md mt-8 bg-black h-16 font-bold text-3xl',
        buttonProcessing: 'bg-theme/80 m-4 px-16 px-8 bg-theme rounded-md mt-8 bg-black h-16 font-bold text-3xl' ,
        textarea: 'bg-black rounded-md sm:mx-4 outline-none px-8 py-4   '
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()
        setProcessing(true)
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID, 
            form.current, 
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            setProcessing(false)
            alert("Meessage sent!")
        }, (error) => {
            console.log(error.text);
        });

    }
  return (<>
   
    <form className="w-full flex flex-col mt-16" ref={form} onSubmit={sendEmail}>
      <input placeholder='Name' className={styles.input} type="text" name="from_name" />
      <input placeholder='Email' className={styles.input} type="email" name="from_email" />
      <textarea placeholder='Message' className={styles.textarea} name="message" />
      {!processing 
        ? <input className={styles.button} type="submit" value="Send" />
        : <input className={styles.buttonProcessing} type="submit" value="Sending..." />
       }
    </form>
    </>

  )
}

