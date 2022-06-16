import React from "react";
import { Chat } from "./pages";
import { Routes, Route, Link } from "react-router-dom";
import { Login, Registration } from "./pages/Auth";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
