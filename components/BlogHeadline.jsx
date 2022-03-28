import {Row, Col} from 'antd';

export default function BlogHeadline() {
    return (
        <Row
         align="middle"
         style={{
             height: 400,
             textAlign: "center",
         }}
         >
             <Col span={24}>
                <h1 style={{
                    fontSize: 70,
                    fontWeight: "bold",
                }}>SeongJin, Blog
                </h1>
                <p style={{
                    fontSize: 24,
                }}>
                    할 수 있는 한 평생 벌어 먹을 수 있을 때 까지 웹 프론트엔드 개발자로 일을 하고 싶으며 
                    미래의 대한 걱정과 고민보단 현재 주어진 일을 열심히 하며 달리지 않고 천천히 꾸준하게 금방 지치지 않고 앞으로 나아갈 수 있는 웹 프론트엔드 개발자가 되고싶은 이성진 입니다. 
                </p>
             </Col>
        </Row>
    )
}