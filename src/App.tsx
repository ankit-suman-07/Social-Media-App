import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from "./pages/main/main";
import { Login } from "./pages/login";
import { NavBar } from "./components/navbar";
import { CreatePost } from './pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
