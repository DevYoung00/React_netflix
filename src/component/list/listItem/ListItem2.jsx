import React, {useState, useRef, useEffect} from 'react'
import "./listItem.css"
// import styled from 'styled-components';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

export default function ListItem() {
  const listBox = useRef();
  const [nowX, setNowX] = useState(0);
  useEffect(() => {
    listBox.current.style.transform = `translateX(${nowX}vw)`;
  }, 
  
  [nowX]
  );
  
  // useState 말고 useEffect를 이용해야할듯.
  const clickLeftButton = () => {

    setNowX(nowX + 80);
 
  };
  const clickRightButton = () => {
    setNowX(nowX - 80);

  };
  return (
    <div className="listItem" style={{overflow:"hidden"}}>
      <div>{nowX}</div>
      <ArrowBackIosOutlined id="sliderBtn_Left" onClick={clickLeftButton}/>
      <ArrowForwardIosOutlined id="sliderBtn_right" onClick={clickRightButton}/>
  
        
      <div className="listBox" ref={listBox}>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXT_FJFhTyLy_XBbQpdsEWHNf4D0Eh3GNWRVuC44cqW8PaFc3qp82gCpBbW8D756T4VPCeF3MX_F_bW5eXgKU1inX507ZbaDGwXdrUZV1nXzZqXkpiazaolQB2ECfdbNaHNld65Jsi_fgkT8wsrsNc0dOpSB7KaHrZuGJpgbC6eS8knqCo1a7wr3P7IZ.webp?r=120"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR6CF89PYRjLdJcq0t-Xfdj50MqLnNH485f72L4HWbvN7yhagv0aZ50x_fcToDjqKRQxuDljGCtDPaOmARyqgjp_2J0FPAY9FasF2buI2bKm_I2uztfoNPPnFl7UJTm_CH6sSVSJ0CEyC_NT0ggw5eaUS-CdLmanr2C7BpsobL0FtBeujxUw1fHHIEzHmGl5Pu45O4m1PFBs0_mO5_RyeEmx.jpg?r=788"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTENDBA2G3-d-prFW_f4k1hMHRaDOZF3vyPxC19FW9fV0huo2HgpQ43woRrAePpIS5ZAOxpeqMYgmL3Z1aoXf5C3DNyVfY7eNOhVJOFttn8gMiv0PXuCE6LW1VUWXDFUN9BGqQrv69emGDmB1oWvE9vQBlT3RiXCzZ0goYsn4qV7dR_KIKAzY4E.jpg?r=e3d"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRD0k8_ppcGPo_0gkX_b7NbU_ZIVPW1rxYWsyFDaGji4O-soJExpQr5ydRb4aIErTi9KTAnXibPzbO2_J-FnLj7GfzvDxhiZQUZioD2rAVzl8g0oou03iyzR1G-R.jpg?r=87c"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABahVYGWhYyf2fMuO5eWzaQXCBg_Jp6blF-7yEKGK3li3BoxO9at6_T148Nf1fhp3wgGcPPhBDFvUYjyulpm-qgq4zBE2nSrWYjvkYgVHcKNJ0QOCd6mKhmDhw8gl.jpg?r=371"} alt=""/>
          </div>

          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd0jbdNxP6iNj9BlcFottKjwAoBmaBxVf0j_VkCSgEsb5D4zzdg0vcFpJVUzJ5jwvrZkyj4sWL2WtZ_YKm5gNp-U0fM.webp?r=45f"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjS94Q--6oi11hLJhJo2RhY8z-rJMTBfMlM6ScrtNnPc4zpiNWqdskdA5S0APnDMpOR6Xwvi735lZNHhCyqc8UZXojfs8eDyZBKqglzDmFetP0j6WPmK6obZihN.jpg?r=08a"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABax8q4XZthf-k-crI-6RV1lYMcbL1kyV6kV5vbQjeUpz2QE-0C03gT1-zDOfDpuet6lYaXhA_7hGu1-w64QXg0RWAFzFz9UOpQGPQSj2ppugaIFrEKBRnte8Qsi1i8070VKi7f5GWLPzIF019xmVB8jooBbE7Q.jpg?r=dae"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeKSmYB_m4tDJ5UjBmD8XUsPKDQgBvzPMirUfLok_1lBdfq0FwVMeCRHLyQD4qywlPyJ132K85ahUNjCYtFwmVeA6wQ.webp?r=0de"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ6gBq0AT0SFlGff92U4837bAHyuOgXhsg-_TggnNR3VCE1Q5LMq7FEwR8UEC9nkYCTJ9TEVZUDUontkETEX3v0ayQo.webp?r=900"} alt=""/>
          </div>
          <div className="inner">
            <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbMcOacWNAapGVoPrJt0ijZGw8MA78X0VT5mcenVG7n0HVIKquU4IYAsYxeyp0Hw5YrIxzM6dRVCdUvzIkAl5sFOdbE.webp?r=52b"} alt=""/>
          </div>
          <div className="inner">
            <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZPjZvq-30jcqVWO-JsbUxRMxUMPBNoXdhd1ribAsZV5wvLYHzxs8CgwV5ETeDLM3oNBrn_xVWhIYtkyMI5iBlDJX8LSAQ5icE7V4S7Ek6cSc43vC3r0bP7DUlIO1GvQ8g.webp?r=c3d"} alt=""/>
          </div>
        
         
      </div>
      
    </div>
  )
}
