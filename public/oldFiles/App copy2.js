import './App.css';
import { useState } from 'react';

function App() {

    // const [] = useState('light')

  
    const[mode, setMode] = useState('dark')
 
    const changeMode = (modeChoice) => {
      console.log(`${modeChoice} is the best`)
    }

    console.log(mode)
    return(
      <div className={mode}>

          <button onClick={()=> changeMode('dark')}>    
            Change to dark mode
          </button>

      </div>
    )
}
export default App;
