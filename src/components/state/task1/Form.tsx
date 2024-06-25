import React, {ChangeEvent, useState} from 'react';

const InputField =()=>{
  const [text, setText] = useState('');
  const handleChange =(event: ChangeEvent<HTMLInputElement>)=>{
    setText(event.target.value);
  }
  return(
    <div>
      <input type='text' value={text} onChange={handleChange}/>
       <h4> The input text is {text} </h4> 
    </div>
  )
}

export default InputField;