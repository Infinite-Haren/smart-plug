import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import MainApp from './components/app/MainApp.jsx';
import FirstPage from'./components/app/FirstPage.jsx';
const container = document.getElementById('root');
const root = createRoot(container!);
const First = ()=>{
  const [access,setAccess] = useState(true);
  return(
    <>
      {access&&<FirstPage setAccess = {setAccess} />}
      {!access&&<MainApp />}
    </>
  )
}
root.render(
  <React.StrictMode>
    <First/>
  </React.StrictMode>
);
