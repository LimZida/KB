import './BottomContainer.css'
import {Container,Row,Col} from 'react-bootstrap'
import light from './img/light2.png'
import cursor from './img/cursor.png'

function BottomContainer(){

    // 일정 스크롤까지 내려가면 해당 컨텐츠들이 조건에 의해 보이게 되는 함수
    function onscroll(){
        const btmLeftAll=document.querySelector(`.btm-left-all`);
        const btmRightAll=document.querySelector(`.btm-right`);
        const btmImg=document.querySelector(`.btm-left-img`);
        const STANDARD=document.body.scrollHeight/2;

        if(window.scrollY>STANDARD){
            btmLeftAll.classList.add('btm-visible');
            btmRightAll.classList.add('btm-visible');
            btmImg.classList.add('translate');
        }
        else{
            btmLeftAll.classList.remove('btm-visible');
            btmRightAll.classList.remove('btm-visible');
            btmImg.classList.remove('translate');
        }
    }
    window.addEventListener('scroll',onscroll);

    return(
        <div className="btm-background">
            <Container>
                <Row>
                    <Col xs={12} sm={12} xl={4}>
                       <div className="btm-left-all"> 
                            <div className="btm-left">
                                <img src={light} alt="" width="100%"></img>
                            </div>    
                            <div className="btm-left-text">
                                미약하다고 생각할지는 몰라도, 우리가 실천하면 환경을 얼마나 보전할 수 있을까요?
                            </div>
                            <div className="btm-left-img">
                                <img src={cursor} alt="" width="130vw"></img>
                            </div>
                        </div>    
                        </Col>    
                    <Col xs={12} sm={12} xl={8}>
                        <div className="btm-right">
                            <li>재활용이 가능한 자원들의 재사용률이 1% 증가할 때마다 <b className="bold">연간 639억원의 외화가 절감</b>됩니다.</li>
                            <li>연간 <b className="bold">매립비용 100억을 절약</b>하는 효과를 볼 수 있습니다.</li>
                            <li>매립/소각물질의 최소화로 인해 <b className="bold">환경오염을 예방</b>합니다.</li>
                            <li>대기 오염 배출물질을 <b className="bold">많이 줄일 수 있어 환경 오염을 예방</b>합니다.</li>
                            <li>기업의 사회적 책임수행 및 자원의 절약으로 <b className="bold">경제에 기여함</b>은 물론 더 나아가 <b className="bold">아름다운 우리의 환경을 보존</b>할 수 있습니다.</li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BottomContainer;