import React, {ChangeEvent, useState} from 'react';

 function CharacterCounter() {
  const [countChar,setCountChar] = useState('');
  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setCountChar(event.target.value);
  }
const countWords = (countChar:string)=>{
  return countChar.trim().split(/\s+/).filter(word=>word.length>0).length
};
  return (
    <div>
      <textarea value ={countChar} onChange={handleChange}/>
      <p>Character count: {countChar.length}</p>
      <p>Word Count: {countWords(countChar)}</p>
    </div>
  );
}

export default CharacterCounter;
