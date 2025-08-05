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
import { useUser } from '@clerk/clerk-react'
import Layout from './pages/Layout';

const App = ()=>{
  const {user}=useUser();
  return (
    <>
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Layout />}>
         <Route index element={<Feed />}/>
         <Route path='messages' element={<Messages />}/>
         <Route path='messages/:userId' element={<ChatBox/>}/>
         <Route path='connections' element={<Connections/>}/>
         <Route path='discover' element={<Discover/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='profile/:profileId' element={<Profile/>}/>
         <Route path='create-post' element={<CreatePost/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default App; 