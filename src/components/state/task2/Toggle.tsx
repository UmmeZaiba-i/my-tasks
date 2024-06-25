import  {useState} from 'react';

const ToggleVisibility=()=>{
  const [visible, setVisible] = useState(false);
  const handleClick =()=>{
    setVisible(!visible);
  }
  return(
    <div>
    <button onClick={handleClick}>Toggle Text Visibility</button>
      {visible && <p>Toggled text</p>}
    </div>
  )
}
export default ToggleVisibility;