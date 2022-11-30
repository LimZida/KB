import './Chatroom.css'
import click from './img/전송.png'
import { useState } from 'react';


function Chatroom(){

    const chatroom=document.querySelector(`.Chatroom`);
    const input=document.querySelector(`.input`);

     //input 내용 이벤트
     const [text, setText] = useState('')  
     const onChange = (e) => {
         setText(e.target.value)		
     }
      
 
     //명령어 리스트
     const list={'!제작자':'개발자를 꿈꾸는 대학생입니다.','!목적':'국민들과 함께 환경문제를 해결하기 위해 개발했습니다.','!이용방법':'정보제공형 소프트웨어이기 때문에, 큰 어려움 없이 터치나 클릭으로 이용할 수 있습니다. '}
     const subList=['right-display','left-display',"명령어를 제대로 입력해주세요!"]
     
     //채팅 구현 함수
     function textInput(val,subVal){
         const rCommand=document.createElement(`div`);
         rCommand.classList.add(subVal[0]);
         rCommand.innerText=val;
         chatroom.append(rCommand);
         
             if(list[val]){
                 const lCommand=document.createElement(`div`);
                 lCommand.classList.add(subVal[1]);
                 lCommand.innerText=list[val];
                 chatroom.append(lCommand);
             }
             else{
                 const lCommand=document.createElement(`div`);
                 lCommand.classList.add(subVal[1]);
                 lCommand.innerText=subVal[2];
                 chatroom.append(lCommand);
             }
         }
     
     //클릭 이벤트
     function onClick(){
         chatroom.innerText=""
         textInput(text,subList);
         input.value="";
     }
     //엔터 이벤트
     function enterPress(e){
        //  쉬프트 엔터(행 이동) 방지
         if(e.key==='Enter'&&!e.shiftKey){
             onClick();
            //  엔터(행 이동) 방지
             e.preventDefault();
         }
         e.target.value="";
     }
    
    return(
        <div className="Chatroom-container">
            <div className="Chatroom">
                <div className="left-display">명령어를 입력해보세요!</div>
            </div>
            <div className="Typeroom">
                <input onChange={onChange} onKeyPress={enterPress} className="input" type="text" placeholder="명령어: !제작자 !목적 !이용방법"></input>
                <button onClick={onClick} className="chat-btn"><img src={click} width="50vw" alt=""></img></button>
            </div>
        </div>
    )
}

export default Chatroom;