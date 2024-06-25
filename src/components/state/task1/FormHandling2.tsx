import React, {ChangeEvent, FormEvent, useState} from 'react'

interface FormData{
    name:string;
    email:string;
    password:string;
} 

const FormHandling2:React.FC = () => {
    const [formdata, setformdata]= useState<FormData>({
        name:'',
        email:'',
        password:''
    });
    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= e.target;
        setformdata((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit =(e:FormEvent)=>{
        e.preventDefault();
        console.log("Form Submitted:", formdata)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">
                Name:
                </label>
                <input 
                name="name"
                id="name"
                type="name"
                value={formdata?.name}
                onChange={handleChange}
                required
                 />
            </div>
        <div>
            <label htmlFor="email">
                Email:
            </label>
                <input 
                id="email"
                name="email"
                type="email"
                value={formdata?.email}
                onChange={handleChange}
                required
                 />
            
            </div>
        <div>
            <label htmlFor="password">
                Password:
            </label>
                <input 
                type="password" 
                id="password"
                name="password"
                onChange={handleChange}
                value={formdata?.password}
                required
                />
            </div>
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormHandling2
