import { Container, Row, Col } from "react-bootstrap";
import HomeMainSection from "./HomeMainSection";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={5}>
          <HomeMainSection></HomeMainSection>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};
export default Home;
