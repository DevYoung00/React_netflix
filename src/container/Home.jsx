import React from 'react'

import Recommend from '../component/recommend/recommend'
import List from "../component/list/List"
import "./home.css"
import Header from "../component/Nav/Header"

const Home = () => {

  return (
    <div className="home">
      <Header/>
      <Recommend />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      
    </div>
  )
}

export default Home
