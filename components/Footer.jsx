import { Col, Row } from "antd";

export default function Footer() {
    return (
        <Row align="middle"
        style={{
            height: 50,
            textAlign: "right",
        }}
        >
            <Col span={24}>
                <p>(c){ new Date().getFullYear() } © SeongJin. All rights reserved.</p>
            </Col>
        </Row>
    )
}