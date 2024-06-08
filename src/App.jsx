import { useState } from 'react';
import { AlertComponent } from './components/AlertComponent';
import { Instructions } from './components/Instructions';
import './App.css';

function App() {
  const [alertShow, setAlertShow] = useState(false);

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>
      
      <div>
        {alertShow ? (
          <AlertComponent onClick={()=>setAlertShow(false)}>Are you sure?</AlertComponent>
        ) : (
          <button onClick={()=>setAlertShow(true)}>Delete</button>
        )}
      </div>    
    </>
  )
}

export default App
