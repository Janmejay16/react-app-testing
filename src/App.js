/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [visible, setVisible] = useState(false)

  const onNameChange = e => {
    setName(e.target.value)
  }

  const handleClick = e => {
    if(e) setVisible(!visible)
  }

  return (
    <div className="App">
      <input type="text" onChange={onNameChange} />
      <button onClick={handleClick}>
          {visible ? "Hide" : "Show"}
      </button>
      <br/>
      {visible ? <p>{name}</p> : null}
    </div>
  );
}

export default App;
