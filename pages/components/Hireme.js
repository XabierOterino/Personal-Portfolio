import React from 'react'
import {useState} from "react"
function Hireme() {
    const styles = {
        input: 'bg-black outline-none mx-4 mb-8 px-8 py-4  rounded-md',
        button: 'hover:bg-theme/80 m-4 px-16 px-8 bg-theme rounded-md mt-8 bg-black h-16 font-bold text-3xl',
        textarea: 'bg-black rounded-md mx-4 outline-none px-8 py-4   '
    }
    const [formInput , setFormInput] = useState({
        firstName:'',
        secondName:'',
        email:'',
        phone:'',
        message:''
    })

    const send = async (e) => {
        e.preventDefault()
        let response = await fetch("https://localhost:5000/contact",{
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body:JSON.stringify(formInput)
        })
        let result = response.json()
        setFormInput({
            firstName:'',
            secondName:'',
            email:'',
            phone:'',
            message:''
        })
        if(result.code === 200){
            alert("DONE!")
        }else{
            alert("FAILED")
        }

    }
  return (
    <div className='mt-16 flex flex-col md:flex-row md:items-start '>
        <div className=' md:w-1/2 flex flex-col w-full'>
            <input onChange={e => setFormInput({...formInput, firstName:e.target.value})} className=  {styles.input} placeholder='First Name'  type="text"></input>
            <input onChange={e => setFormInput({...formInput, secondName:e.target.value })} className={styles.input} placeholder='Second Name' type="text"></input>
            <input onChange={e => setFormInput({...formInput, email:e.target.value })} className={styles.input} placeholder='Email Address' type="text"></input>
            <input onChange={e => setFormInput({...formInput, phone:e.target.value})} className={styles.input} placeholder='Phone No.' type="text"></input>
        </div>
        <div className='md:w-1/2 flex w-full flex-col'>
            <textarea rows="6" onChange={e => setFormInput({...formInput, message:e.target.value})} className={styles.textarea} placeholder='Message'></textarea>
            <button onClick={send}className={styles.button}>Send</button>
        </div>
        
    </div>

  )
}

export default Hireme