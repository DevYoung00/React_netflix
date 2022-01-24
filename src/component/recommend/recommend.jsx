import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import React from 'react'
import "./recommend.css"

export default function recommend() {
  return (
    <div className="recommend">

      <img 
      width="100%"
      src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTu8cBeVrqQEil1JH2qeRQfc4dNXJdvBghmVQDGD0aAGUlQ9XOFIqCtdk3-HXFdfPc7EIz5_EHNN6JAlV8DQ3e0cBTng.webp?r=9fd"
      alt="눈이 부시게"
      />
      <div className="info">
        <img src="https://occ-0-325-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbOqEj3iurTzau4L6NNpvqt9p_W5f_BvSVUJqQD_pUAF3UduTRBCrF5aicpdrL1qhzC5uLi_SCuH7qnG3fpog7RAXCtgmJtvKHO-.webp?r=7f2"
        alt="눈이 부시게 제목"/>
        <span className="detail">
        살짝 예스러운 이름에 지극히 평범한 스펙, 그래도 꿈만은 야무진 25세 처자. 그녀에게 특별한 점이 있다면 신비한 시계가 있다는 정도? 비극적인 사건 이후 시간을 되돌린 그녀에게 날벼락 같은 현실이 찾아온다. 내가 70대 할머니라니.
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
