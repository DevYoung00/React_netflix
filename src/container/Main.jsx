import {React,useState} from 'react'
import Home from './Home'
import InfoPage from './InfoPage'


export default function Main() {
  const [logined] = useState(true);
 
  if(logined){
    return (
      <div className="main">
        <Home/>
      </div>
    )
  }
  else{
    return (
      <div className="main">
        <InfoPage/>
      </div>
    )
  }
  
}


