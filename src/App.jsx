import React, { useState } from 'react';
import Main from './Main';
import Alert from './alert/Alert';
import './assets/scss/style.scss';

export const AlertContext = React.createContext()

function App() {

    const[alert, setAlert] = useState(false);

    const toggleAlert = () => setAlert((prev => !prev))

  return (
    <div className="container pt-3">
        <AlertContext.Provider value={alert}>
            <Alert/>
            <Main test={'wertey'} toggle={toggleAlert}/>
        </AlertContext.Provider>
    </div>
  );
}

export default App;
