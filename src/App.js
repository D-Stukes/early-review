import './App.css';
import { useState } from 'react';

function App() {
  //useState takes initial value for variable as argument
  //In the array, we have TWO values:
  //first value: the piece of stte
  //second value: the handler function to update

    // const [] = useState('light')

  //destructured
    const[mode, setMode] = useState('light')
 
    const changeMode = () => {
      if(mode === 'light'){
        setMode('dark')
      } else {
        setMode('light')
      }
    }

    //alternative
    // mode === 'light' ? setMode('dark') : setMode('light')

    console.log(mode)
    
    return(
      <div className={mode}>

          {/* <button onClick={changeMode}>    
            Change to dark mode
          </button> */}

<button onClick={changeMode}> Change to {mode === 'light' ? 'dark': 'light'} mode </button>
          <h1>{mode}</h1>

      </div>
    )
}
export default App;
