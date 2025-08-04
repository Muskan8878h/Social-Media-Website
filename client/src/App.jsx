import React from 'react'
import { Route, Routes } from "react-router-dom"
import CreatePost from './pages/CreatePost'
import Connections from './pages/Connections'
import Profile from './pages/Profile'
// import Login from './pages/Login'

const App = ()=>{
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}>
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

export default App