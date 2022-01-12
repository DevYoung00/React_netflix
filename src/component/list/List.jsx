
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import ListItem from "./listItem/listItem"
import "./list.css"

export default function List(type) {

  return (
    <div className="list">
      <span className="listTitle">지금 뜨는 콘텐츠</span>
      <div className="wrapper">
      <ArrowBackIosOutlined
      className="slider-left"  />
        <div className="container" >
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>

          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>

          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
    
        </div>
        <ArrowForwardIosOutlined
        className="slider-right"  />
      </div>
    </div>
  )
}
