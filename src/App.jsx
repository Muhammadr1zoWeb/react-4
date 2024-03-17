import { useRef, useState } from 'react';
import './App.css';

const arr = ['olma', 'nok']
function App() { 
    const [render, setRender] = useState(true)
    const inpRef = useRef()
    function setMeve(){
      setRender(!render)
      arr.push(inpRef.current.value)
      inpRef.current.value = ' '
    }
  return (
    <div className="App">
      <h1>2</h1>
      <div className='d-flex justify-content-center'>
        <input ref={inpRef} className='form-control w-25' type="text" />
        <button onClick={setMeve} className='btn btn-success' >add</button>
      </div>
      <ul>
        {
          arr.map((item, index)=>(
            <li key={index}>{item}</li>
          )
          )
        }
      </ul>

       {
}
    </div>
  );
}

export default App;
