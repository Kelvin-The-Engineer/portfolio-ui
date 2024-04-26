import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import { UserInfoProvider } from './providers/UserInfoProvider';
import Community from './pages/Community';
import PersonalProjects from './pages/PersonalProjects';
import About from './pages/About';
import SecretPage from './pages/SecretPage';
 
function App():JSX.Element  {
  return (
    <UserInfoProvider>
<BrowserRouter  future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/"  element= {<Landing/>}/> 
        <Route path="/community"  element= {<Community/>}/>
        <Route path="/projects"  element= {<PersonalProjects/>}/>
        <Route path="/about"  element= {<About/>}/>
        <Route path="/specials"  element= {<SecretPage/>}/>
      </Routes>
    </BrowserRouter>
    </UserInfoProvider>
  );
}

export default App;
