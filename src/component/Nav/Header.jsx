import {React,useState,useEffect } from 'react'
import "./header.css"
import {  Search , Notifications ,ArrowDropDown } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Header = () => {

  const [ScrollY,setScrollY] = useState(false);
  function handleScroll() {
    if(window.pageYOffset ===0){
      setScrollY(false);
    }
    else{
      setScrollY(true);
    }
  }
  useEffect(()=>{
    function scrollListener(){
      window.addEventListener("scroll",handleScroll);}
      scrollListener();
      return () =>{
        window.removeEventListener("scroll",handleScroll);}
  })

  return (
    // { ScrollY  ?  style = {{ backgroundColor: "rgba(0, 0, 0, 0)" }} : null }
    <div 
    style = { ScrollY  ? { backgroundColor: "rgba(0, 0, 0, 1)" } : {backgroundColor: "rgba(0, 0, 0, 0)"} }
     className="header" 
    >
      <div className="gnb">
        <div className="left">
          <img src="images/logo.png"
          alt="netflix" />
        <span>홈</span>
        <span>시리즈</span>
        <span>영화</span>
        <span>NEW! 요즘 대세 콘텐츠</span>
        <span>내가 찜한 콘텐츠</span>
        </div>
        <div className="right">
          <Search className="icon"/>
          <span>키즈</span>
          <Notifications className="icon"/>
          <img src="images/pro1.png" alt="엘"/>
          <div className="profile">
          <ArrowDropDown className="icon"/>
          <div className="profile_setting">
          <ul className="other_profile">
          <li><img src="images/pro2.png" alt="마이크"/>마이크</li>
          <li><img src="images/pro3.png" alt="더스틴"/>더스틴</li>
          <li><img src="images/pro4.png" alt="윌"/>윌</li>
          <li>
          <Link to="/profile_setting" style={{ color: 'inherit', textDecoration: 'inherit'}}>프로필관리</Link>
          </li>
          </ul>
          <hr></hr>
            <span>계정</span>
            <span>고객센터</span>
            <span>로그아웃</span>
          </div>
          </div>
            </div>
          </div>
          </div>
  )
}

export default Header
