import './Navtopbar.css'
import {Navbar,Container} from 'react-bootstrap';

function Navtopbar(){

    let lastScrollY=0
    // 네비게이션 바 이벤트
    function scrollEvent(){
      const margin=document.querySelector(`.margin`);
      // 네비게이션 바 고정
      if(window.scrollY>30){
        margin.classList.add('shadow');
      }
      else{
        margin.classList.remove('shadow')
      }
      // 네비게이션 바 올려짐/내려짐
      if(window.scrollY>lastScrollY){
        margin.classList.add(`nav-lift-up`)
      }
      else{
        margin.classList.remove(`nav-lift-up`)
      }
      lastScrollY=window.scrollY
    }

    window.addEventListener('scroll',scrollEvent)

    return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="margin" >
          <Container className="font">
            <Navbar.Brand href="#home" className="middle">우리의 미래는 환경-이지(easy)!</Navbar.Brand>
          </Container>
        </Navbar>
    )
}
export default Navtopbar;