import './Tabc.css'
import {Tab,Tabs} from 'react-bootstrap'
import tab1 from './img/광고1.jpg'
import tab2 from './img/광고3.png'
import tab3 from './img/광고4.PNG'
import { useState } from 'react'

// 탭 모듈
function Tabc() {
    const [key, setKey] = useState('우리는');

    return (
      <div className="tab-bg">
          <h1 className="tab-h1">오늘부터 당장 실천해보는 것은 어떨까요?</h1>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            // 탭 키 이벤트
            onSelect={(k) => setKey(k)}
            className="mb-3 tab-align tab-mg"
          >
            <Tab className="tab-border" eventKey="우리는" title="우리는">
                <div className="tab-img1">
                    <img src={tab1} alt="" width="50%"></img>
                </div>
            </Tab>

            <Tab className="tab-border" eventKey="할 수" title="할 수">
                <div className="tab-img2">
                    <img src={tab2} alt="" width="45%"></img>
                </div>
            </Tab>

            <Tab className="tab-border" eventKey="있습니다" title="있습니다">
                <div className="tab-img3">
                    <img src={tab3} alt="" width="33%"></img>
                </div>
            </Tab>
        </Tabs>
      </div>  
    );
  }

export default Tabc;