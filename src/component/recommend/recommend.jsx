import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./recommend.css"

export default function recommend() {
  return (
    <div className="recommend">
      {/* {type && (
        <div className="catagory">
          <span>{type === "영화" ? "영화" : "시리즈"}</span>
          <select name="genre" id="genre">
            <option>장르</option>
            <option value="adventure">어드벤쳐</option>
            <option value="comedy">코미디</option>
            <option value="crime">범죄</option>
            <option value="fantasy">판타지</option>
            <option value="history">역사</option>
            <option value="horror">호러</option>
            <option value="romance">로맨스</option>
            <option value="sci-fi">공상과학</option>
            <option value="thriller">스릴러</option>
            <option value="animation">애니메이션</option>
            <option value="drama">드라마</option>
            <option value="documentary">다큐멘터리</option>
          </select>
        </div>
      )} */}
      <img 
      width="100%"
      src="https://occ-0-988-1360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaq1wzI0hzX3igdNSKAyc5hlHx6FOoVEQnDIx50523MBqHdfYWWGB_o5FQEz4K6IzDBk3wLCA0ouinkNfGLjbhqWVHPL.webp?r=037"
      alt="나를 차버린 스파이"
      />
      <div className="info">
        <img src="https://occ-0-988-1360.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRvKkFnUmj8arkMHlpXob0w3IdNUA0pS7-ld76D0shiDWVgTNVwT7auL55nalbUDD6gJJJPjt0DXRm6uvx7KaFAMkQTBTCCWwfLr.webp?r=42b"
        alt="나를 차버린 스파이 제목"/>
        <span className="detail">
        문자로 이별 통보한 남친이 CIA 요원? 게다가 세계 평화가 걸린 엄청난 미션을 내게 맡기다니. 얼떨결에 스파이계에 입문해 국제 범죄 조직을 상대하게 된 여자와 그녀의 절친. 근데 웬걸. 환상의 팀워크가 발휘된다. 원래 적성이었나?
        </span>
        <div className="reco_btn">
          <button className="play">
            <PlayArrow/>
            <span>재생</span>
          </button>
          <button className="goto">
            <InfoOutlined/>
            <span>상세 정보</span>
          </button>
        </div>

      </div>
      
    </div>
  )
}
