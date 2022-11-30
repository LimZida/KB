import './AccordionContent.css';
import {Accordion,ListGroup} from 'react-bootstrap'
import click from './img/click.png'

function AccordionContent(){
    // 아코디언 버튼 클릭 시
    function onclick(e){
        e.target.classList.toggle('check');
    }
    // 아코디언 버튼 초기화
    function deleteclick(){
        const listItem=document.getElementsByClassName('list-item');
        for(let i of listItem){
            if(i.className==='list-item list-group-item check'){
                i.classList.remove('check');
            }
        }
    }

    return(
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="acc-border">
                    <div className="acc-header">
                       분리수거의 현황이 궁금하신가요? 링크를 클릭해보세요<img src={click} width="25vw" alt=""></img>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="acc-body">
                        <div className="a-margin">
                            <a href="http://news.kmib.co.kr/article/view.asp?arcid=0014659147&code=61171811&cp=nv" target="_blank">‘대노주의’ 분리수거장 체험기</a>
                        </div>
                        <div className="a-margin">
                            <a href="https://www.nocutnews.co.kr/news/5154333" target="_blank">배달천국 대한민국, 사고·쓰레기 천국될라</a>  
                        </div>
                        <div className="a-margin">
                            <a href="https://news.nate.com/view/20201126n24025" target="_blank">일회용 배달음식 용기 분리배출 엉망</a>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="acc-border">
                    <div className="acc-header">
                        제대로 분리수거를 하기 힘드신가요?
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="acc-body">
                        배달 음식을 통해 나올 수 있는 쓰레기들을 클릭해보세요. 
                        상세한 정보와 분리수거 종류, 후에 이루어질 처리까지 알려줍니다.
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header  className="acc-border">
                    <div onClick={deleteclick} className="acc-header">
                        현재 얼마나 분리수거에 대해 알고 계신가요? 자신이 아는 내용을 체크해보세요.
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="acc-body"> 
                        <ListGroup className="list">
                            <ListGroup.Item onClick={onclick} className="list-item">분리수거를 자주 한다.</ListGroup.Item>
                            <ListGroup.Item onClick={onclick} className="list-item">쓰레기 종류에 대한 분리수거법을 정확히 알고 실천한다.</ListGroup.Item>
                            <ListGroup.Item onClick={onclick} className="list-item">평소 환경 문제에 관심이 있다.</ListGroup.Item>
                            <ListGroup.Item onClick={onclick} className="list-item">분리수거를 철저히 지킬 경우, 이점에 대해 알고 있다.</ListGroup.Item>
                            <ListGroup.Item onClick={onclick} className="list-item">재활용 할 수 있는 품목과, 그렇지 않은 품목에 대해 알고 있다.</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header  className="acc-border">
                    <div className="acc-header">
                        우리도 동참합시다.
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="acc-body"> 
                    매우 작고 간단한 행동이지만, 국민이 환경에 동참할 수 있는 의미있는 행동입니다.
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AccordionContent;