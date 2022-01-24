
// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import React from 'react'
import ListItem1 from "./listItem/ListItem1"
import ListItem2 from "./listItem/ListItem2"
import "./list.css"

export default function List(type) {

  return (
    <div className="list">
   
        <div className="container" >
          <h3>로맨틱한 한국 시리즈</h3>
          <ListItem1/>
          <h3>지금 뜨는 콘텐츠</h3>
          <ListItem2 />
        </div>
 
      </div>
    
  )
}
