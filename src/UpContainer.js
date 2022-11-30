import './UpContainer.css';
import {Container,Row,Col} from 'react-bootstrap';
import plastic from './img/plastic.png'
import stiro from './img/stiro.png'
import chop from './img/chop.png'
import box from './img/box.png'
import hoil from './img/hoil.png'
import vinyl from './img/vinyl.png'
import plus from './img/plus2.png'
import { useState } from 'react';

// 폐기물 리스트 1
let list1=["col1","col2","col3"];
let img1=[plastic,box,vinyl];
let h1=["페트/플라스틱(재활용 가능)","박스/종이(일부 재활용 가능)","비닐(재활용 가능)"]
let p1=["깨끗이 세척하고, 페트나 플라스틱을 감싸는 부착물이 있다면 떼어서 압착 후 분리수거합니다.",
"박스는 그대로 분리수거하고, 박스를 감싸고 있는 테이프나 기타 부착물은 떼어서 일반쓰레기로 분류합니다. 그러나 코팅되어있거나, 종이컵과 음식 박스 등 혹은 찌꺼기가 묻어있다면 일반쓰레기로 분류합니다.",
"오염물질이나 찌꺼기가 묻어있다면 세척후 말린 뒤 분리수거합니다."]
// 폐기물 리스트 2
let list2=["col4","col5","col6"];
let img2=[chop,hoil,stiro];
let h2=["나무젓가락","알루미늄호일","스티로폼(일부 재활용 가능)"]
let p2=["길이가 길다면 젓가락을 알맞은 크기로 분할해 일반쓰레기로 분리수거합니다.",
"깨끗이 세척한 뒤 일반쓰레기로 분리수거합니다.",
"일반 포장(가전제품,의류 등)에 사용하는 스티로폼은 따로 스티로폼으로 분리수거하지만, 기타 오염(음식물, 이물질)되거나 색이 있는 스티로폼은 깨끗이 씻어 일반쓰레기로 분류합니다. 분리수거 시 혹시라도 부착물이 있다면 제거합니다."]

// 상단 컨테이너
function UpContainer(){

    const [modal,setModal]=useState(true);
    
    // 클릭 이벤트
    function openClick(){
        const background=document.querySelector(`.background`);
        background.classList.toggle(`lift-up`);
        setModal(!modal);
    }  


    return(
    <div className="background">
        <Container>
            <Row>
                {
                    list1.map((val,i)=>{
                        // 클릭 이벤트
                        const onClick=()=>{
                            const col=document.getElementsByClassName(val);
                            col[0].classList.toggle(`size-up`);

                            // 폐기물 이미지 이벤트
                            const img=document.getElementsByClassName('img');
                                for(let i of img){  
                                    if(i.parentElement.parentElement.classList.value===`${val} size-up`){
                                        i.classList.add(`play`)
                                        i.classList.add('size')
                                    }
                                    else if(i.parentElement.parentElement.classList.value===`${val}`){
                                        i.classList.remove('play')
                                        i.classList.remove('size')
                                    }
                                }
                            
                            // 폐기물 이름 이벤트
                            const h=document.getElementsByClassName('grid-h');
                            for(let i of h){
                                if(i.parentElement.parentElement.parentElement.classList.value===`${val} size-up`){
                                    i.classList.add(`visible`)
                                }
                                else if(i.parentElement.parentElement.parentElement.classList.value===`${val}`){
                                    i.classList.remove('visible')
                                }
                            }
                            // 분리수거 설명법 이벤트
                            const p=document.getElementsByClassName('grid-p');
                            for(let i of p){
                                if(i.parentElement.parentElement.parentElement.classList.value===`${val} size-up`){
                                    i.classList.add(`visible`)
                                }
                                else if(i.parentElement.parentElement.parentElement.classList.value===`${val}`){
                                    i.classList.remove('visible')
                                }
                            }      
                        }
                        return <Col xs={12} xl={4} onClick={onClick} className="all">
                                    <div className={val}>
                                        <div>
                                            {/* 폐기물 이미지 */}
                                            <img className="img" src={img1[i]} alt="" width="65%"></img>
                                            <div>
                                                {/* 폐기물 이름 */}
                                                <h1 className="grid-h">{h1[i]}</h1>
                                                {/* 분리수거 설명법 */}
                                                <p className="grid-p">{p1[i]}</p>
                                            </div>
                                        </div>   
                                    </div>
                                </Col>
                    })
                }
            </Row>
            <Row>
                {
                    list2.map((val,i)=>{
                        // 클릭 이벤트
                        const onClick=()=>{
                            const col=document.getElementsByClassName(val);
                            col[0].classList.toggle(`size-up`);
                             // 폐기물 이미지 이벤트
                            const img=document.getElementsByClassName('img');
                                for(let i of img){  
                                    if(i.parentElement.parentElement.classList.value===`${val} size-up`){
                                        i.classList.add(`play`)
                                        i.classList.add('size')
                                    }
                                    else if(i.parentElement.parentElement.classList.value===`${val}`){
                                        i.classList.remove('play')
                                        i.classList.remove('size')
                                    }
                                }
                                // 폐기물 이름 이벤트
                                const h=document.getElementsByClassName('grid-h');
                                for(let i of h){
                                    if(i.parentElement.parentElement.parentElement.classList.value===`${val} size-up`){
                                        i.classList.add(`visible`)
                                    }
                                    else if(i.parentElement.parentElement.parentElement.classList.value===`${val}`){
                                        i.classList.remove('visible')
                                    }
                                }
                                // 분리수거 설명법 이벤트
                                const p=document.getElementsByClassName('grid-p');
                                for(let i of p){
                                    if(i.parentElement.parentElement.parentElement.classList.value===`${val} size-up`){
                                        i.classList.add(`visible`)
                                    }
                                    else if(i.parentElement.parentElement.parentElement.classList.value===`${val}`){
                                        i.classList.remove('visible')
                                    }
                                }   
                        }

                        return <Col xs={12} xl={4} onClick={onClick} className="all">
                                    <div className={val}>
                                        <div>
                                            {/* 폐기물 이미지 */}
                                            <img className="img" src={img2[i]} alt="" width="70%"></img>
                                            <div>
                                                {/* 폐기물 이름 */}
                                                <h1 className="grid-h">{h2[i]}</h1>
                                                {/* 분리수거 설명법 */}
                                                <p className="grid-p">{p2[i]}</p>
                                            </div>
                                        </div>   
                                    </div>
                                </Col>
                    })
                }
            </Row>
        {/* 더 보기 버튼 */}
        {modal?
        <button onClick={openClick} className="uc-btn"><img src={plus} alt="" width="10%"></img>처리과정 보기</button>:
        <button onClick={openClick} className="uc-btn"><img src={plus} alt="" width="10%"></img>처리과정 닫기</button>}
        </Container>
    </div>
    )
}

export default UpContainer;