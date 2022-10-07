import './App.css';
import { useState } from 'react';

function App() {

    // const [] = useState('light')

  
    const[mode, setMode] = useState('light')
 
    const changeMode = () => {
      if(mode === 'light'){
        setMode('dark')
      } else {
        setMode('light')
      }
    }

    console.log(mode)
    return(
      <div className={mode}>

          <button onClick={changeMode}>    
            Change to dark mode
          </button>
          <h1>{mode}</h1>

      </div>
    )
}
export default App;
