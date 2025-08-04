import React from 'react';
import { Route, Routes } from "react-router-dom";

// import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Connections from './pages/Connections';
import Profile from './pages/Profile';
import ChatBox from './pages/ChatBox';
import Feed from './pages/Feed';
import Discover from './pages/Discover';
import Login from './pages/login';
import Messages from './pages/Messages';

const App = ()=>{
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}/>
         <Route index element={<Feed />}/>
         <Route path='messages' element={<Messages />}/>
         <Route path='messages/:userId' element={<ChatBox/>}/>
         <Route path='connections' element={<Connections/>}/>
         <Route path='discover' element={<Discover/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='profile/:profileId' element={<Profile/>}/>
         <Route path='create-post' element={<CreatePost/>}/>
      </Routes>
    </>
  )
}

export default App