import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselSlide from './CarouselSlide';
import Navtopbar from './Navtopbar';
import UpContainer from './UpContainer';
import AccordionContent from './AccordionContent';
import BottomContainer from './BottomContainer';
import Tabc from './Tabc';
import Chatbox from './Chatbox';
import Remote from './Remote';

function App() {
  // 마우스 오른쪽 버튼 눌림 방지
  function del(e){
    e.preventDefault();
  }

  // 스크롤 최상단 기능
  function upClick(){
    window.scrollTo({top:0, behavior:'smooth'});
  }
  // 스크롤 최하단 기능
  function downClick(){ 
    window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'});
  }


  return (
    <div onContextMenu={del} className="App">
      <div>
        {/* 모듈1 */}
        <Navtopbar></Navtopbar>
      </div>
      <div>
        {/* 모듈2 */}
        <CarouselSlide></CarouselSlide>
      </div>
      <div>
        {/* 모듈3 */}
        <AccordionContent></AccordionContent>
      </div>
      <div className="overflow">
        {/* 모듈4 */}
        <UpContainer></UpContainer>
      </div>
      <div>
        {/* 모듈5 */}
        <BottomContainer></BottomContainer>
      </div>
      <div>
        {/* 모듈6 */}
        <Tabc></Tabc>
      </div>
      
      {/* 모듈7 */}
      <Chatbox></Chatbox>
      {/* 모듈8 */}
      <Remote upClick={upClick} downClick={downClick}></Remote>
    </div>
  );
}

export default App;
