import React, {useState, useRef, useEffect} from 'react'
import "./listItem.css"
// import styled from 'styled-components';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

export default function ListItem() {
  const listBox = useRef();
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const [nowX, setNowX] = useState(0);


  useEffect(() => {
    
      listBox.current.style.transform = `translateX(${nowX}vw)`;

   
  }, 
  [nowX]
  );

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
        <div className="first" ref={first}>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR05vFb4ZEhFXclfmayJAcc2NasilnWJ8WVOiWeuwK_2Lk1hxSyI2M6dUrheBjpAcOr50DsXMXny7PXxSrcWrsVrvPQ.webp?r=804"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV-qBy1FZLxPbncqWnJtPyy5qwvPuaYTBcLXAkrMx8MinRJGX8VO1_qsfypb4_S99y5D-1Nv5f0uJZ5dC7rMB20blIOaACmruqoqFgdq0EyIx0FFpEIdjWIOk4ltB_zuBETUTn-czfPh-RVgZgJfW3Wdr9s.webp?r=fe1"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQdZ1SgD3HkeBzqA-7B9hw51QDysYnDNI2BDIg61IPEkuyvui-ztmf05DHgVknUy6jXNzu6UB82kpY8MekRqcAFeHhU.webp?r=a45"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS6K6vg2INl9Ad1bDb-xylRq84cdAwozO9E3NLgk5Gzmy34dNINWjzm8v4I29lXfC48qPWIg1C7_gcnE3zb8c-maXd4.webp?r=d63"} alt=""/>
          </div>

        </div>
        <div className="second" ref={second}>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQwjZVaiWRCJE0iNPe1y7opqsm7TzQpo74iW9rE_tMqqN_TxOKOWasAV3p17qOdgbmcG9tgEx23RAav_ByuFKjrcQfY.webp?r=85e"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeG4gtUicRcsMkm6xYplURfQowRx_ZzuaYyiKLEnNBiGmkY1ly2LcaXzV_WMyzwh_1DDS5GyMS-R0q42NDmn7UkeDrc.webp?r=5d9"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQYoc_OO2hIPZ1zKyPXaEy6Y721bb03xyfhJNW5nhjLyY4Ie087KrIo3ku6z3LV9_6_kgBbwTDLvjiscFWXRaZC-zU.webp?r=05c"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfmdGor_MNxfYCWSfI11A3-zqs-mduX88BSgPjqTYmxlirEMXyGp21G020h6dyW94pCnj3pspt4SZsNJtCjCPUz3Ako.webp?r=de9"} alt=""/>
          </div>

        </div>
        <div className="third" ref={third}>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrQ1BQrp6M3VY1jTFEMlNgCOX3pAYBA8ScFSvJQqJpTvviEZ574oScpRJBApsvzriao8rpAeisWVYsCdA-J9aCBSyTJN35LU7JafNaT746TTsitvLYJWYJ8pluDe5cdFhJ8uutyuQzychH6I-ejRmoXXLDnq2_qWoJQqlQq0Y15FYr1hqLRkMj8KUwu.webp?r=831"} alt=""/>
          </div>
          <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXT_FJFhTyLy_XBbQpdsEWHNf4D0Eh3GNWRVuC44cqW8PaFc3qp82gCpBbW8D756T4VPCeF3MX_F_bW5eXgKU1inX507ZbaDGwXdrUZV1nXzZqXkpiazaolQB2ECfdbNaHNld65Jsi_fgkT8wsrsNc0dOpSB7KaHrZuGJpgbC6eS8knqCo1a7wr3P7IZ.webp?r=120"} alt=""/>
          </div>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQVp5bUpcIX7S1cY41hWAxvwdcUUT2Y4tU0TVH4h8dkWwKTrRah_FE19eNPZwaQsSffRCpqSa06LmKRAbSTEXFjtDNU.webp?r=350"}/>
        </div>
        <div className="inner">
          <img src={"https://occ-0-325-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcgfSJZGkZKAHjUMUHZ5Uh5TMQzebAzyX6MiB86h9ssl_OMoauZ-1hxw3oHZBpZIkn6PgkYuPF8wz8oaU-rHYV6CnEM.webp?r=baf"}/>
        </div>
        </div>
         
         
      </div>
      
    </div>
  )
}
