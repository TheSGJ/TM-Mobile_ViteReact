import React, { useState } from "react";
import './App.css';
import TextForm from './components/TextForm';
import AlertBox from "./components/AlertBox";
export default function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <AlertBox alert={alert} />
      <TextForm showAlert={showAlert}/>
    </>
  )
}
