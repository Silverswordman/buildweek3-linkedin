import { Container, Row, Col } from "react-bootstrap";
import HomeMainSection from "./HomeMainSection";
import HomeLeftSection from "./HomeLeftSection";
import HomeRightSection from "./HomeRightSection";
import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <HomeLeftSection></HomeLeftSection>
        </Col>
        <Col md={6}>
          <HomeMainSection></HomeMainSection>
        </Col>
        <Col md={3}>
          <HomeRightSection></HomeRightSection>
          <HomeFooter></HomeFooter>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
