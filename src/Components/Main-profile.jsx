import { Container, Row, Col } from "react-bootstrap";
import HeaderProfile from "./Header-Profile";

const Main = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Row>
            <Col lg={10}>
              <HeaderProfile />
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Main;
