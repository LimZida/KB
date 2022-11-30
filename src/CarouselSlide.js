import './CarouselSlide.css'
import {Carousel} from 'react-bootstrap';
import disposal from './img/disposal.jpg';
import garbage from './img/garbage.jpg'
import plasticcups from './img/plastic-cups.jpg'

function CarouselSlide(){
    return(
        <Carousel fade>
            {/* 사진1 */}
            <Carousel.Item>
                <div className="Carousel-img">
                    <img
                    className="d-block w-100"
                    src={disposal} height="800vh"
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption className="caption-font">
                <p>우리가 버린 쓰레기들은 계속해서 매립됩니다.</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* 사진2 */}
            <Carousel.Item>
                <div className="Carousel-img">
                    <img
                    className="d-block w-100"
                    src={garbage} height="800vh"
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption className="caption-font">
                <p>우리의 분리수거장은 어떤 모습일까요?</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* 사진3 */}
            <Carousel.Item>
                <div className="Carousel-img">  
                    <img
                    className="d-block w-100"
                    src={plasticcups} height="800vh"
                    alt="Third slide"
                    />
                </div>
                <Carousel.Caption className="caption-font">
                <p>이러한 쓰레기가 환경을 위협합니다.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselSlide;