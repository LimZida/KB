import './Chatbox.css'
import {GiSmartphone} from 'react-icons/gi'
import { useState } from 'react';
import Chatroom from './Chatroom'

function Chatbox(){
    const [modal,setModal]=useState(false);
    // 휴대폰 버튼 클릭 시 이벤트 발생
    const fixed=document.getElementsByClassName(`fixed`)
    function onClick(){
        setModal(!modal);
        fixed[0].classList.toggle('click')
    }

    return(
        <div>
            {
                // 휴대폰 버튼 클릭 시 Chatroom 생성/삭제
                modal?<Chatroom></Chatroom>:null
            }
            <GiSmartphone className="fixed" onClick={onClick}></GiSmartphone>
        </div>
    )
}

export default Chatbox;