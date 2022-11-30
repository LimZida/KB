import './Remote.css'
import UP from './img/위화살표.png'
import DOWN from './img/아래화살표.png'
import { Fragment } from 'react'

function Remote({upClick,downClick}){
    // 리모콘 이벤트
    function onScroll(){
        const STANDARD=document.body.scrollHeight/6;
        const scroll=document.querySelector(`#rmt-scroll`)
        // 스크롤 일정 수치로 내려갈 시 이벤트 발생
        if(window.scrollY>STANDARD){
          scroll.classList.add(`rmt-visible`)
        }
        // 스크롤 일정 수치로 다시 올라갈 시 이벤트 발생
        else{
          scroll.classList.remove('rmt-visible')
        }
      }
      window.addEventListener('scroll',onScroll)
    

    return(
        <Fragment>
            <div id="rmt-scroll">
              <img onClick={upClick} src={UP} alt=""></img>
              <img onClick={downClick} src={DOWN} alt=""></img>
            </div> 
        </Fragment>
    )
}

export default Remote;